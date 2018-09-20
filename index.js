import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = new express();

app.get('/', (req, res) => {
    res.send('Testing GraphQL');
})

class Account {
    constructor(id, { balance, availableBalance }){
        this.id = id;
        this.balance = balance;
        this.availableBalance = availableBalance;
    }
}

const accountDatabase = {};

const root = { 
    createAccount: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        accountDatabase[id] = input;
        return new Account(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log('GraphQL is running in localhost:8080/graphql');
})