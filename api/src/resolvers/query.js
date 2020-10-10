module.exports = {
	notes: async (parent, args, { models }) => {
		return await models.Note.find();
	},
	note: async (parent, args, { models }) => {
		return await models.Note.findById(args.id);
	},
	user: async(parent, {username}, {models}) =>{
		// Find a user given there user name 
		return await models.User.findOne({username})
	},
	//Find all the users
	users: async (parent, args, {models}) =>{
		return await models.User.find({})
	} 
	me: async(parent, args, {models, user}) =>{
		// Find a user given the current user context 
		return await models.User.findById(user.id)
	}
};
