"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (privateKey, id) => {
    return jsonwebtoken_1.default.sign({
        iat: Date.now(),
        exp: Date.now() + 600000,
        iss: id,
    }, privateKey, {
        algorithm: 'RS256'
    });
};
//# sourceMappingURL=jwt.js.map