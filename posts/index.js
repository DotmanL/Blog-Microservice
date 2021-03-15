const express = require('express');

const app = express();

app.get('/post', (req, res) => {});

app.get('/posts', (req, res) => {});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
