import React from "react";
import { Container } from "react-bootstrap";
import PostList from "../components/Postlist";

const App = () => {
  return (
    <Container fluid="md">
      <PostList />
    </Container>
  );
};

export default App;
