import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import Posts from "./components/Posts";
import Post from "./components/Post";

const client = new ApolloClient({
  uri: "https://natural-remote-3000.codio.io/backend/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/post/:slug" component={Post} />
            </nav>
          </header>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
