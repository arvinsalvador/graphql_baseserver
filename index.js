import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = new express();

app.get('/', (req, res) => {
    res.send('Testing GraphQL');
})

const root = { hello: () => "Hi! I am Arvin." }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log('GraphQL is running in localhost:8080/graphql');
})