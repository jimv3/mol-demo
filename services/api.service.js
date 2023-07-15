"use strict"
const ApiService = require("moleculer-web");
const Service = require("moleculer").Service;

class MyApi extends Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "api",
            mixins: [ApiService],
            settings: {
                port: 7213,
                routes: [{
                    path: "/api",
                    aliases: {
                        "GET heartbeat": "api.heartbeat"
                    },
                    whitelist: "**"
                }]
            },
            actions: {
                heartbeat(ctx) {
                    return ctx.nodeID;
                }
            },
            async started() {
                this.logger.info("MyApi was succesfully started");
            }
        });
    }
}

module.exports = MyApi;