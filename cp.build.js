const ncp = require('ncp').ncp;

// ncp.limit = 16;

// Load prod path
const srcPath = require('./configs/key.config.json');

ncp(`${srcPath.client_build_path}`, `${srcPath.prod_client_path}`, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Create build folder done!');
});