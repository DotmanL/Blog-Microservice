import React from 'react';
import PostCreate from './Components/PostCreate';
import PostList from './Components/PostList';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  background: darkblue;
  color: white;
  width: auto;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <h1>Create Post</h1>
      <PostCreate />
      <hr style={{ width: '100%' }} />
      <h1>Posts</h1>
      <PostList />
    </Container>
  );
};

export default App;
