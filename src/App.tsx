import React from "react";
import Card from "./components/CardWealthSummary";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { link } from "./service/api.service";

const cache = new InMemoryCache();

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
