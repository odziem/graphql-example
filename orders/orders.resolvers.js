const ordersModel = require('./orders.model');

module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    }
  }
};