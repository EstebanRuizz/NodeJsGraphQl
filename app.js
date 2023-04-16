require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT ?? 4000;

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { connectDB } = require("./db");
connectDB()

app.use(cors)

app.get("/", (req, res) => res.send("Welcome to my API"));

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);

    apolloServer.applyMiddleware({ app });
    app.use("*", (req, res) => res.status(404).send("element not found"));
  });
}

start();
 //C:\Users\rubia\Desktop\PROYECTOS DE PRUEBA\graphQL\apolloExpressMongo\typeDefs.js