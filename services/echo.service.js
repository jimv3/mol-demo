"use strict";
const Service = require("moleculer").Service;

class Echo extends Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "echo",
            actions: {
                get: {
                    description: "Return the repsonse of a GET request",
                    rest: {
                        method: "GET",
                        path: "/get",
                    },
                    handler: this.returnData
                },
                post: {
                    description: "Return the response of a POST request",
                    rest: {
                        method: "POST",
                        path: "/post",
                    },
                    handler: this.returnData
                },
                delete: {
                    description: "Return the response of a DELETE request",
                    rest: {
                        method: "DELETE",
                        path: "/delete",
                    },
                    handler: this.returnData
                }
            }
        })
    }

    returnData(ctx) {
        let req = ctx.options.parentCtx.params.req;
        return { "URL": req.originalUrl, "method": req.method, "data": ctx.params };
    }
}

module.exports = Echo;