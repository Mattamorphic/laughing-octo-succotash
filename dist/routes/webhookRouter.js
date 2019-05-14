"use strict";
/**
 * @file Authorization router
 * @author Mattamorphic
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postWebhook_1 = require("../controllers/postWebhook");
const jwt_1 = __importDefault(require("../lib/jwt"));
exports.webhookRouter = express_1.Router();
exports.webhookRouter.use((req, res, next) => {
    console.log(req);
    if (req.body && req.body.installation && req.body.action === 'created') {
        const token = jwt_1.default(req.app.locals.key, req.body.installation.id);
        console.log(token);
    }
    next();
});
exports.webhookRouter.post('/', postWebhook_1.postWebhook);
//# sourceMappingURL=webhookRouter.js.map