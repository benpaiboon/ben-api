// Init dependencies
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

//Init middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Load config
const routes = require('./CONFIG/route.config');
const keyConfig = require('./CONFIG/key.config.json');

// Request any routes depend on URL path
routes.map(route => { app.use(keyConfig.root_api, route); });

// Run static assets if in production
if (keyConfig.env === 'prod') {
  app.use(favicon(path.join(__dirname, keyConfig.prod_favicon_path)));
  app.use(express.static(path.join(__dirname, keyConfig.prod_client_path)));

  // Handling errors
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, keyConfig.prod_client_path, 'index.html'));
  });
}
else {
  // Handling errors 
  app.use((req, res) => {
    const error = new Error(`Not found the requested URL or 
        element in CONFIG/route.config.js isn't equal to route files in folder ROUTE.`);
    res.status(404 || 500).json({ error: error.message });
  });
}

// Running server
const port = process.env.PORT || keyConfig.server_port;

app.listen(port, () => console.log(`Server running on port ${port}`));