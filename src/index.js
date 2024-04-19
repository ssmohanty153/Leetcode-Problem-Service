const express = require("express");

const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config.js");
const apiRouter = require("./routers/index.js");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get('/ping', (req, res) => {
    res.json({
        message: "Problem service alive"
    })
})
app.listen(PORT, () => {
    console.log(`server is listening on port number ${PORT}`)
})