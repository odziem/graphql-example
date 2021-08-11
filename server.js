const path = require('path');
const express = require('express');
const { createYoga } = require('graphql-yoga');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
  typeDefs: typesArray
});

const root = {
  products: require('./products/products.model'),
  orders: require('./orders/orders.model'),
};

const app = express();

app.use('/graphql', createYoga({
  schema: schema,
}));

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});