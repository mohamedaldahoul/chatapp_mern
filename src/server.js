const { ApolloServer, gql} = require('apollo-server');
const crypto = require('crypto');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schema')

const {
  DB_USERNAME= 'admin', 
  DB_PASSWORD= 'secret',
  DB_HOST= '172.17.0.2',
  DB_PORT= 27017,
  DB_NAME= 'chat'
} = process.env

mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true })
  .then(()=> new ApolloServer({ typeDefs, resolvers }).listen())
  .then(({ url }) => {
  console.log(`Apollo Server listening at ${url}`)
})
.catch(console.error)

  /*
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
  */