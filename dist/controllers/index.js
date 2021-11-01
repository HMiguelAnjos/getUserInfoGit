"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get('/', (request, response) => {
    try {
        const arr = request.body.lista;
    }
    catch (err) {
        console.log(`Erro ${err.message} no get users`);
    }
});
//# sourceMappingURL=index.js.map