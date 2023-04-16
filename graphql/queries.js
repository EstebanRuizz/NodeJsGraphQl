const { GraphQLString } = require("graphql");

const hello = {
  type: GraphQLString,
  description: "Returns a string",
  resolve: () => "Hello world form queries",
};

module.exports = { hello };
