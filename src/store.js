import { gql } from "apollo-boost";
import apolloClient from "./apolloCient";

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      email
      name
      images {
        id
        url
      }
    }
  }
`;


export const store = {
  state: {
    user: {}
  },
  refreshUser() {
      apolloClient
      .query({ query: CURRENT_USER })
      .then(data => this.state.user = data.data.currentUser)
      .catch(err => console.log(err));
  }
};
