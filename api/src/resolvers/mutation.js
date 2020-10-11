const bcrypt = require( 'bcrypt' )
const jwt = require( 'jsonwebtoken ' )
const { AuthenticationError, ForbiddenError } = require( 'apollo-server-express' );
const gravatar = require( '../util/gravatar' )
require( 'dotenv' ).config();
const mongoose = require( 'mongoose' )

module.exports = {
	newNote: async ( parent, args, { models, user } ) => {
		// If there is mo user on  the context, throw an authentication error
		if ( !user )
		{
			throw new AuthenticationError( 'You must be signed in to make a new note' );
		}
		return await models.Note.create( {
			content: args.content,
			author: mongoose.Types.ObjectId( user.id ),
		} );
	},
	deleteNote: async ( parent, { id }, { models } ) => {
		// If not a user, throw an AuthenticationError 
		if ( !user )
		{
			throw new AuthenticationError( 'You must be signed into create a new note ' )
		}
		// Find the note 
		const note = await models.Note.findById( id )

		// If the owner and the current user do not match, throw a forbidden error 
		if ( note && String( note.author ) !== user.id )
		{
			throw new ForbiddenError( 'You do not have permission to delete the note ' )
		}
		try
		{
			// If everything checks out, remove the note 
			await note.remove();
			return true;
		}
		catch ( err )
		{
			// If there is an error along the way, throw the error 
			return false
		}
	},
	
	updateNote: async ( parent, { content, id }, { models, user } ) => {
		// If not the user, throw an authentication error 
		if ( !user )
		{
			throw new AuthenticationError( 'You must be logged in to update the note' )
		}
		// Find the note 
		const note = await models.Note.findById( id )

		// If the current user and the owner note do not much, throw a forbidden error

		if ( note && String( note.author ) !== user.id )
		{
			throw new ForbiddenError( 'You do  not have permission to update the note  ' )
		}
		// Update the note in the db and return the updated note 
		return await models.Note.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					content,
				},
			},
			{
				new: true,
			}
		);
	},
	signUp: async ( parent, { username, email, password }, { models } ) => {
		// Normalize the email address 
		email = email.trim().toLowerCase();
		// Hash the password
		const hashed = await bcrypt.hash( password, 10 )

		// Create the gravater url 
		const avatar = gravatar( email )

		try
		{
			const user = await models.User.create( {
				username, email, avatar, password: hashed
			} )
			// Create and sign the web token 
			return jwt.sign( {
				id: user._id
			}, process.env.JWT_SECRET )
		}
		catch ( err )
		{
			console.log( err );
			// If there is a problem creating the account, throw an error
			throw new Error( 'Error creating the account' )
		}
	},
	//Implement the signIn 
	signIn: async ( parent, { username, email, password }, { models } ) => {
		// Normalize the email address
		email = email.trim().toLowerCase();
		const user = await models.User.findOne( {
			$or: [ { email }, { username } ]
		} )
		// If the user is not found, throw an error 
		if ( !user )
		{
			throw new AuthenticationError( 'Error signing in ' );
		}
		// If the passwords do not match, throw an authentication error
		const valid = await bcrypt.compare( password, user.password );
		if ( !valid )
		{
			throw new AuthenticationError( "Error signing in " );
		}
		// Create and return the json web token 
		return jwt.sign( {
			id: user._id,
		}, process.env.JWT_SECRET )
	},
	toggleFavourite: async ( parent, { id }, { models, user } ) => {
		// If no user context is passed  throw auth error 
		if ( !user )
		{
			throw new AuthenticationError();
		}
		// Check to see if the user has already favourited the note 
		let noteCheck = await models.Note.findById( id );
		const hasUser = noteCheck.favouritedBy.indexOf( user.id )

		// If the user already exists in the list, pull them from the list and 
		// reduce the favouritedBy 1
		if ( hasUser >= 0 )
		{
			return await models.Note.findById( id, {
				$pull: {
					favouritedBy: mongoose.Types.ObjectId( user.id )
				},
				$inc: {
					favouriteCount: -1
				}
			}, {
				// Set new to true to return the updated doc 
				new: true
			} )
		} else
		{
			// If the user does not exist in the list 
			// Add them to the list and increment the favouriteCount by 1
			return await models.Note.findByIdAndUpdate( id, {
				$push: {
					favouritedBy: mongoose.Types.ObjectId( user.id )
				},
				$inc: {
					favouriteCount: 1
				}
			}, {
				new: true
			} )
		}
	}

}