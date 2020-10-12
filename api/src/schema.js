const { gql } = require( 'apollo-server-express' );

module.exports = gql` scaler DateTime 
	type Note {
		id: ID!
		content: String!
		author: User!
		createdAt: DateTime!
		updatedAt: DateTime!
		favouriteCount: Int!
		favouritedBy: [User!]
	}
	type User{
		id:ID!
		username: String!
		email:String!
		avatar: String 
		notes: [Note!]!
		favourites: [Note!]!
	}
	type NoteFeed {
		notes: [Note!]!
		cursor: String
		hasNextPage: Boolean!
	}
	type Query {
		hello: String
		notes: [Note!]!
		note(id: ID!): Note!
		user(username:String!): User
		users: [User!]!
		me: User!
		noteFeed(cursor: String): NoteFeed
	}
	type Mutation {
		newNote(content: String!): Note!
		upDateNote(id: ID!, content: String!): Note!
		deleteNote(id: ID!): Boolean!
		signUp(username: String!, email: String!, password: String!): String!
		signIn(username: String!, email: String!, password: String!): String!
		toggleFavourite(id: ID!): Note!
	}
`;


