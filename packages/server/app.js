const { ApolloServer, gql } = require("apollo-server-express");
const Todo = require("./model/todo"); // Mongoose Todo 모델을 가져옵니다.
const express = require("express");
const mongoose = require("mongoose");

// GraphQL 스키마 정의
const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: ID!): Todo
  }
`;

// 리졸버 정의
const resolvers = {
  Query: {
    todos: async () => await Todo.find({}),
  },
  Mutation: {
    addTodo: async (_, { text }) => {
      const todo = new Todo({ text, completed: false });
      await todo.save();
      return todo;
    },
    toggleTodo: async (_, { id }) => {
      const todo = await Todo.findById(id);
      todo.completed = !todo.completed;
      await todo.save();
      return todo;
    },
  },
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect("mongodb://127.0.0.1:27017/graphqlTodos");

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
