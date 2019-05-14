"use strict";
/**
 * @file myRouter
 * @author Mattamorphic
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meController_1 = require("../controllers/meController");
exports.myRouter = express_1.Router();
// Router middleware
exports.myRouter.use((req, _, next) => {
    // Global app variables
    console.log(req.app.locals);
    if (req.body) {
        console.log(req.body);
    }
    next();
});
exports.myRouter.post('/', meController_1.getMe);
//# sourceMappingURL=myRouter.js.map