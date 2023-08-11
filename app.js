const express = require('express');
const myRouter = require('./router/blog-router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/blogs', myRouter);

app.listen(3000, () => console.log('Server is running on http://localhost:3000!'));

//http://localhost:3000/blog