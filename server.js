const express = require('express');
const { buildSchema } = require('graphql');
const { createYoga } = require('graphql-yoga');

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    reviews: [Review]
    price: Float!
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`);

const app = express();

app.use('/graphql', createYoga({
  schema: schema,
}));

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});