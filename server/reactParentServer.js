const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'react-parent', 'build');

const proxyMap = {
    '/reactChild': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            '^/reactChild': ''
        },
        logLevel: 'debug'
    }
};

startServer(buildRoot, 3000, proxyMap);