const ApiService = require("moleculer-web");
module.exports = {
    name: "api",
    mixins: [ApiService],
    settings: {
        port: 7213,
        routes: [{
            path: "/api",
            aliases: {},
            whitelist: "**"
        }]
    }
}