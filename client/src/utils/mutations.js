import { gql } from '@apollo/client';


export const ADD_POST = gql`
mutation addPost( $title: String, $content: String, $authorID: String,$categoryID: String){
  addPost(title: $title, content: $content, authorID: $authorID, categoryID: $categoryID){
    _id
    title
    content
    createdAt
    categoryID{
      _id 
      category
    }
    authorID{
      _id
      name
      email
    }
  }
}

`


export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
//add a post

// edit a post

// delete a post

// like a post
