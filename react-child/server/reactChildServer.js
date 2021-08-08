const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/**', (req, res) => {
    const { path } = req;
    res.set({
        'Content-Type': 'text/html'
    })
    res.send('Hello World');
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});