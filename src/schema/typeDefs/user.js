const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    avatarUrl: String
    chat: [Chat!]!
  }

  extend type Query {
    user(id: ID!): User!
  }

  extend type Mutation {
      signUp(email: String!, name: String!): User!
    }
`