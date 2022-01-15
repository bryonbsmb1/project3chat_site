const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    category: String!
  }
  type Post {
    _id: ID
    title: String
    content: String
    authorID: Profile
    createdAt: String
    categoryID: Category
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    posts: [Post]
    post(postId: ID!): Post

    categories: [Category]
    category(categoryId: ID!): Category

    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addPost(
      title: String,
      content: String,
      authorID: String,
      categoryID: String
    ): Post

    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
