import React from 'react';
import PostCreate from './Components/PostCreate';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  background: black;
  color: white;
  width: 60%;
  height: 70vh;
`;

const App = () => {
  return (
    <Container>
      <h1>Post</h1>
      <PostCreate />
    </Container>
  );
};

export default App;
