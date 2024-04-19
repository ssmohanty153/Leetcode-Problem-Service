

const dovenv = require("dotenv")

dovenv.config();

module.exports = {
    PORT: process.env.PORT || 3000
}