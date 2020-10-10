const mongoose = require('mongoose')

module.exports = {
	DB_HOST 
	=>{
		// Use the mongo driver updated URL  string parser 
		mongo.set('useNewUrlParser', true); 
		// use findOneAndUpdate() in place of findAndModify()
		mongoose.set('useFindAndModify', false)
		 // use createIndex() in place of ensureIndex()
		 mongoose.set('useCreateIndex', true)
		 // Use the new server discovery and monitoring engine 
		 mongoose.set('useUnifiedTopology', true)

		 // Connect to the database 
		 mongoose.connect(DB_HOST);
		 // Log an error if we fail to connect 
		 mongoose.connection.on('error', err => {
		 	console.error(error)
		 	console.log('MongoDB connection error. Please make sure that MongoDB is running.');
		 	process.exit()

		 });
	}, 
	close: () =>{
		mongoose.connection.close()
	}
}