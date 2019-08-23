// Example 
// const routes = [
//   require('../ROUTE/<router1>'),
//   require('../ROUTE/<router2>')
// ]

// Route Files
const routes = [
  require('../ROUTE/index.route'),
  require('../ROUTE/book.route'),
];

// Total Routes
const totalRoute = routes.length;

module.exports = { routes, totalRoute };