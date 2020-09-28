import React from "react";
import Card from "./components/CardWealthSummary";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { URL_API, ADMIN_SECRET } from "./environment/api";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: URL_API,
  headers: {
    "x-hasura-admin-secret": ADMIN_SECRET,
    "content-type": "application/json"
  }
});

const client = new ApolloClient({
  cache,
  link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Card />
      </div>
    </ApolloProvider>
  );
}

export default App;
