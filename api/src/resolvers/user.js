module.exports ={
	// Resolve the list ofnotes when requested
	author: async (user, args, {models}) =>{
		return await models.Note.find( { author: user._id } ).sort( {
			_id: -1
		})
	},
	// Resolve the list of favourites for a user when requested 
	favourites: async(user, args, {models}) =>{
		return await models.Note.find({
			favouritedBy: user_id
		}).sort({
			_id: -1
		})
	}
}