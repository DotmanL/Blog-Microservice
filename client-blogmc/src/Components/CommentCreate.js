import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  background: darkblue;
  color: white;
  justify-content: space-between;
  align-items: 'center';
  margin-bottom: 6px;
`;

const Button = styled.button`
  background: black;
  color: white;
  padding: 5px 5px;
  border-radius: 8px;
  border-color: darkblue;
`;

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Container>
          <label>New Comment </label>
          <input value={content} onChange={handleChange} />
        </Container>
        <Button> Submit </Button>
      </FormContainer>
    </>
  );
};

export default CommentCreate;
