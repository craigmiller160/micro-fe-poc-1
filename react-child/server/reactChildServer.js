const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const buildRoot = path.resolve(__dirname, '..', 'build');

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
    console.log(`Received Request: ${req.path}`);
    const filePath = path.join(buildRoot, req.path);
    if (!fs.existsSync(filePath)) {
        console.error(`Cannot find file: ${filePath}`);
        res.status(404);
        res.set({
            'Content-Type': 'text/plain'
        })
        res.send(`Cannot find file: ${filePath}`);
        return;
    }

    console.log(`Returning file: ${filePath}`);

    const extension = path.extname(filePath);
    const content = fs.readFileSync(filePath, 'utf8');

    res.set({
        'Content-Type': getContentType(extension),
        'Cache-Control': 'public, max-age=604800'
    })
    res.send(content);
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});