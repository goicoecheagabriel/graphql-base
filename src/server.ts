import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from "apollo-server-express";
import schema from './schema';
import { createServer } from 'http';


async function startServer(){

    const app = express();

    app.use('*', cors());

    app.use(compression());

    const server = new ApolloServer({ 
        schema,
        introspection: true,
    });

    // Iniciar el servidor Apollo antes de aplicar el middleware
    await server.start();

    // Aplicar el middleware de Apollo Server a Express
    server.applyMiddleware({ app: app as any })

    // Iniciar el servidor HTTP (tambien se define el puerto)
    const PORT = 5300;
    const httpServer = createServer(app)

    httpServer.listen(
        {port:PORT},
        () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
    )
}

startServer().catch(error => {
    console.error('Error al iniciar el servidor:', error);
  });