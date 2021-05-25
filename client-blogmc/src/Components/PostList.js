import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-size: 18;
  width: auto;
  padding: 15px 30px;
`;
const Card = styled.div`
  padding: 5px 5px;
  width: auto;
`;

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');

    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    // returns an array of all values in the posts object
    return (
      <Card key={post.id}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </Card>
    );
  });

  return <PostContainer>{renderedPosts}</PostContainer>;
};

export default PostList;
