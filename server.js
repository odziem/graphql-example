const express = require('express');
const { buildSchema } = require('graphql');
const { createYoga } = require('graphql-yoga');

const schema = buildSchema(`
  type Query {
    description: String
    price: Float
  }
`);

const app = express();

app.use('/graphql', createYoga({
  schema: schema,
}));

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});