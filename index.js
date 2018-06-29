const { ApolloServer, gql} = require('apollo-server');
const crypto = require('crypto');

const db = {
    users:[

    ],
    
    messages: [

    ]
}

const typeDefs = gql`
    type Query{
        users: [User!]!
        user(id: ID!): User
        messages: [Message!]!
    }

    type Mutation {
        addUser(email: String!, name: String!): User
    }

    type User {
        id: ID!
        email: String!
        name: String!
        avatarUrl: String
        messages: [Message!]!

    }

    type Message {
        id: ID!
        body: String!
        createdAt: String
    }
`

const resolvers = {
    Query: {
        users: () => db.users,
        user: args => db.users.find(user => user.id === args.id),
        messages:() => db.messages,

    },
    Mutation:{
        addUser: ({ email, name }) => {
            const user = {
                id: crypto.randomBytes(10).toString(),
                email,
                name
            }
            db.users.push(user)
    
            return user
        }
    },
    User:{
        messages: ({ id }) => 
            db.messages.filter(message => message.userId === id)
    }   
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(serverInfo => {
    console.log(`Apollo Server listening at ${serverInfo.url}`);
    
})
