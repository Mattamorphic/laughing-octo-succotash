"use strict";
/**
 * @file Runner
 * @author Mattamorphic
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom imports
const console_1 = __importDefault(require("./lib/console"));
const ngrok_wrapper_1 = __importDefault(require("./lib/ngrok-wrapper"));
const ngrok = new ngrok_wrapper_1.default(console_1.default.port);
// ExpressJS Config
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.locals.ngrok = ngrok;
app.locals.name = console_1.default.name;
app.locals.number = console_1.default.number;
app.locals.file = console_1.default.file;
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
// Import routers
//import { myRouter } from './routes/';
// Add endpoints
//app.use('/endpoint', myRouter);
// start the app on the port
app.listen(console_1.default.port);
// Start app with ngrok
(() => __awaiter(this, void 0, void 0, function* () {
    const url = yield ngrok.gen();
    console.log(url);
}))();
//# sourceMappingURL=index.js.map