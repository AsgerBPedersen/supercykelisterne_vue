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
      .query({ query: CURRENT_USER, fetchPolicy: "no-cache" })
      .then(data => {
        console.log(data);
        this.state.user = data.data.currentUser;
      })
      .catch(err => console.log(err));
  }
};
