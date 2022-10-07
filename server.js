const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

const { router } = require('./router/main.router')

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Listening tothe port no ${PORT}`);
});