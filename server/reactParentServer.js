const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'react-parent', 'build');

startServer(buildRoot, 3000);