const mongoose = require( "mongoose" );

// Define the notes database schema
const noteSchema = new mongoose.Schema( {
	content: {
		type: String, required: true
	},
	// Reference the authors object ID

	author: {
		type: String,
		required: true
	},
	favouriteCount: {
		type: Number,
		default: 0
	},

	favouritedBy: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		}
	]
},
	{
		// Assigns createdAt and updatedAt fields with the Date type
		timestamps: true
	} );



// Define the "Note" modes with the schema

const Note = mongoose.model( "Note", noteSchema );

// Export the module

module.exports = Note;
