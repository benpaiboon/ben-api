// Shell
const shell = require('shelljs');

// Load prod path
const srcPath = require('./configs/key.config.json');

shell.rm('-rf', `${srcPath.prod_client_path}`);
shell.cp('-R', `${srcPath.client_build_path}`, `${srcPath.prod_client_path}`);