import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  color: white;
  width: auto;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 60%;
  font-size: 20px;
  padding: 30px 0px 30px 0px;
  color: black;
  align-items: center;
`;

const FormInput = styled.input`
  height: 20px;
  border-radius: 7px;
  outline: none;
`;

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://posts.com/posts/create', { title });

    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label style={{ fontWeight: 700, fontSize: '25px' }}> Title </label>
        <FormInput value={title} onChange={handleChange} />
        <button>Submit </button>
      </Form>
    </Container>
  );
};

export default PostCreate;
