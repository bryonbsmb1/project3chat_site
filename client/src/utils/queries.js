import { gql } from '@apollo/client';


export const QUERY_POSTS = gql`
query allPost{
  posts{
    _id
    title
     authorID{
      _id
      name
      email
    }
     categoryID{
      _id 
      category
    }
  }
}
`





export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
// get a post

//get all posts