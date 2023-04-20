require("dotenv").config();
let express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { createProxyMiddleware } = require('http-proxy-middleware');
const routers = require("./src/routers");
const handle = routers.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    server.use("/static", express.static(__dirname + "/static"));
    server.use("/apiprod", createProxyMiddleware({
        target: process.env.REACT_APP_BACKEND_URL,
        logLevel: 'debug',
        changeOrigin: true,
        headers: {
            "Connection": "keep-alive"
        },
        pathRewrite: function (path, req) {
            return path.replace('/apiprod/', '/')
        }
    }))
    server.use(handle);
    server.listen(process.env.PORT || 3000, () => {
        console.log("App running On  http://localhost:" + process.env.PORT)
    })
})