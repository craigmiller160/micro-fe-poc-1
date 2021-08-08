const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const buildRoot = path.resolve('..', 'build');

const getContentType = (ext) => {
    switch (ext) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'application/javascript';
        default:
            throw new Error(`Cannot find content-type for extension: ${ext}`);
    }
}

app.get('/**', (req, res) => {
    const { path } = req;
    const filePath = path.resolve(buildRoot, path);
    if (!fs.existsSync(filePath)) {
        res.status(404);
        res.send(`Cannot find file: ${filePath}`);
        return;
    }

    const extension = path.extname(filePath);

    res.set({
        'Content-Type': getContentType(extension),
        'Cache-Control': 'public, max-age=604800'
    })
    res.send('Hello World');
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});