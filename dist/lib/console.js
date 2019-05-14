"use strict";
/**
 * @file Console / Options for the github-oauth-tester
 * @author Mattamorphic
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dot Env Config
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
dotenv_1.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const file_details_1 = __importDefault(require("./console-helpers/file-details"));
// Command line args
const command_line_args_1 = __importDefault(require("command-line-args"));
const options = command_line_args_1.default([
    { name: 'number', alias: 'n', type: Number },
    { name: 'file', alias: 'k', multiple: false, type: filename => new file_details_1.default(filename) },
    { name: 'name', type: String },
    { name: 'port', alias: 'p', type: Number },
]);
// If the key hasn't been passed as an arg, lets fall back to a key file
const file = !options.file || !options.file.doesExist()
    ? new file_details_1.default(process.env.FILE)
    : options.file;
if (!file.doesExist()) {
    throw new Error('Must provide file as either --file=/path/to/file or in .env as FILE=/path/to/file');
}
// Determine either console options or .env
const variables = {
    number: options.number || process.env.NUMBER,
    file: file.getContents(),
    name: options.name || process.env.NAME,
    port: options.port || process.env.PORT || 5000,
};
// These values must be set, so throw if they aren't
if (!variables.number || !variables.name) {
    throw new Error('Must provide number and name in .env or as console options');
}
// Return the variables
exports.default = variables;
//# sourceMappingURL=console.js.map