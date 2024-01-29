const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// GraphQL 스키마 정의
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// 리졸버 정의
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(
      "Server is running on http://localhost:4000" + apolloServer.graphqlPath
    );
  });
}

startServer();
