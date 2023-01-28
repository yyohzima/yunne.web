import http from "http"

import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import bodyParser from "body-parser"
import cors from "cors"
import express from "express/index.js"
import { loadFile } from "graphql-import-files"

import resolvers from "./resolvers/index.js"

const typeDefs = loadFile("../schemas/schema.graphql")

type MyContext = {
  token?: string
}

async function startApolloServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()
  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: true,
      credentials: true,
    }),
    bodyParser.json(),
    expressMiddleware(server),
  )

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  )
  // eslint-disable-next-line no-console
  console.log("🚀 Server ready at http://localhost:4000/graphql")
}

startApolloServer()
