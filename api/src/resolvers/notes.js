
module.exports ={
	// ?Resolve the author info for a note when requested 
	author: async (note, args, {models}) =>{
		return await models.User.findBy(note.author)
	}
	// Resolve the favouritedBy info for a note hen requested 
favouritedBy: async(note, args , {models}) =>{
	return await models.Users.find({
		_id: {
			$in: note.favouritedBy
		}
	})
}
}