import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  credentials: "include",
  uri: "http://localhost:4000"
});

export default apolloClient;
