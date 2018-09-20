import { buildSchema } from 'graphql';

const schema = buildSchema (`
  type Account {
    id: ID!
    balance: Float!
    availableBalance(context: String): Float!
  }
  
  type ReservedBalance {
    id: ID!
    context: String!
    balance: Float!
  }
  
  type VirtualBalance {
    id: ID!
    context: String!
    balance: Float!
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  } 
  
  type Query {
    friend: Friend
    account(id: ID!): Account
    reservedBalance(id: ID!): ReservedBalance
    virtualBalance(id: ID!): VirtualBalance
    reservedBalances(account: ID!): [ReservedBalance]!
    virtualBalances(account: ID!): [VirtualBalance]!
  }

  input AccountInput {
    id: ID
    balance: Float!
    availableBalance: Float!
  }
  
  type Mutation {
    createAccount(input: AccountInput): Account
    updateBalance(request: ID!, account: ID!, amount: Float!): Float!
    createReservedBalance(request: ID!, account: ID!, context: String!, amount: Float!): ReservedBalance!
    updateReservedBalance(request: ID!, account: ID!, context: String!, amount: Float!): ReservedBalance!
    releaseReservedBalance(request: ID!, account: ID!, context: String!): Boolean
    createVirtualBalance(request: ID!, account: ID!, context: String!, amount: Float!): VirtualBalance!
    updateVirtualBalance(request: ID!, account: ID!, context: String!, amount: Float!): VirtualBalance!
    cancelVirtualBalance(request: ID!, account: ID!, context: String!): Boolean
    commitVirtualBalance(request: ID!, account: ID!, context: String!): Boolean
  }
`)

export default schema;