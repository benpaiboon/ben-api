// Init Dependencies
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const fs = require('fs');

//Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load Config
const routeConfig = require('./CONFIG/route.config');
const keyConfig = require('./CONFIG/key.config.json');

// Init Root ROUTE folder
const dir = './ROUTE';

fs.readdir(dir, (err, files) => {
  if (files.length !== routeConfig.totalRoute) {
    // Handling Errors 
    app.use((req, res) => {
      const error = new Error(`Element in CONFIG/route.config.js isn't equal to route files in folder ROUTE.`);
      res.status(404 || 500).json({ error: error.message });
    });
  }
  else {
    // Request any Rroutes depend on URL path
    routeConfig.routes.map(route => { app.use('/api', route); });

    // Server static assets if in production
    if (keyConfig.env === 'prod') {
      app.use(favicon(path.join(__dirname, 'client/build/favicon.ico')));
      app.use(express.static(path.join(__dirname, 'client/build')));

      // Handling Errors
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
      });
    }
    else {
      // Handling Errors 
      app.use((req, res) => {
        const error = new Error('Not found the requested url.');
        res.status(404 || 500).json({ error: error.message });
      });
    }
  }
});

// Running Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));