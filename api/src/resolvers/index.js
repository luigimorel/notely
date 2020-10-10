const Query = require("./query");
const Mutation = require("./mutation ");
const { GraphQLDateTime } = require("graphql-iso-date");
const User = require("./user");
const Note = require("./note");

module.exports = {
	Query,
	Mutation,
	DateTime: GraphQLDateTime,
	Note,
	User,
};
