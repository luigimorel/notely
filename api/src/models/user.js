const mongoose = require( 'mongoose' )
const UserSchema = new mongoose.Schema( {
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	email: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: true

	}
},
	{
		// Assign the createdAt and updatedAt fields with a Date type 
		timestamps: true
	} )

module.exports = {
	// Resolve the author info for a note when requested
	author: async ( note, args, { models } ) => {
		return await models.Note.find( { author: user._id } ).sort( {
			_id: -1
		} )
	},
	// Resolve the list of favourites for a user when requested 
	favourites: async ( user, args, { models } ) => {
		return await models.Note.find( {
			favouritedBy: user_id
		} ).sort( {
			_id: -1
		} )
	}
}

const User = mongoose.model( 'User', UserSchema )


module.exports = User