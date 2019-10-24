const http = require('http');
const path = require('path')
const express = require('express')

// const config = require('./config/config')

const app = express();
const port = process.env.PORT || 3000

/**
 * 用于指定URL路径和服务器路径的映射
 */
const publicDir = path.resolve(__dirname, './build');
app.use('/', express.static(publicDir))

app.use('/flow', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/flow-static/index.html'));
})

app.use('/mz', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/mz-static/index.html'));
})


http.createServer(app).listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});


