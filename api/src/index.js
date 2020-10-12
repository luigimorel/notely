const depthLimit = require( "graphql-depth-limit" )
const { createComplexityLimitRule } = require( 'graphql-validation-complexity' ); 
const express = require( "express" );
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();
const db = require("db");
const models = require('./models')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const jwt = require('jsonwebtoken')
const helmet = require( 'helmet' ) 
const cors = require('cors')

const app = express();

app.use( helmet );

const DB_HOST = process.env.DB_HOST;


// Apollo server set up
const server = new ApolloServer({
	typeDefs,
	resolvers,
	validationRules:
		[ depthLimit( 5 ), createComplexityLimitRule( 5 ) ], 
	context: ({req} ) =>{
		// Get the user token from the headers
		const token = req.headers.authorization; 

		// Try to receive the token from the headers
	const user = 	await getUser(token);

		// Log out the user
		console.log(user)
		
		// Add the db models to the db 
		return {
			models, user
		}
	}
});

// Apply the apollo gql middleware  and set the path to the api
server.applyMiddleware({
	app,
	path: "/api",
});

app.listen({ port }, () =>
	console.log(
		`Graphql  server is running at https://localhost:${port}${server.graphqlPath}`
	)
);
// Get the user information from JWT 
const getUser =token =>{
	if(token ){
		try{
			// Return the user information from the token 
			return jwt.verify(token, process.env.JWT_SECRET)
		}
		catch(err){
			// If there is a problem with the token, throw abn error
			throw new Error('Session invalid')
		}
	}
}

// The port where the app is running n the server
const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello world "));

app.listen(port, () => {
	console.log("Server is running on" + port);
});
