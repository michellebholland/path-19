/* GraphQL schemas */
const { gql } = require('apollo-server');

// Define shape of data as types
const typeDefs = gql`
  type User {
    id: Int!
    email: String
    locations: [Location]
    jwt: String
  }

  type Location {
    id: Int!
    longitude: Int!
    latitude: Int!
    timestamp: Int
  }

  type LoginResponse {
    token: String
    user: User
  }
  # type Query defines all top-level entry points for queries that clients can execute
  type Query {
    locations: [Location]
  }
  # Mutation type defines entry points for write operations
  type Mutation {
    addLocation(longitude: Int, latitude: Int, timestamp: Int): Location
    register(email: String!, password: String!): User
    login(email: String!, password: String!): LoginResponse
  }
`;

export default typeDefs;
