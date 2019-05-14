"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file FileDetails class
 * @author Mattamorphic
 */
const fs_1 = __importDefault(require("fs"));
class FileDetails {
    constructor(filename) {
        this.filename = filename;
        this.exists = fs_1.default.existsSync(filename);
        this.contents = null;
        this.mtime = this.getMtime();
    }
    getFilename() {
        return this.filename;
    }
    doesExist() {
        return this.exists;
    }
    getContents() {
        if (!this.exists) {
            return '';
        }
        // If the contents is null of the modified time has changed
        if (this.contents === null || this.mtime !== this.getMtime()) {
            this.contents = fs_1.default.readFileSync(this.filename, 'utf8');
        }
        return this.contents;
    }
    getMtime() {
        if (!this.exists) {
            return null;
        }
        const stats = fs_1.default.statSync(this.filename);
        return stats.mtime.getTime();
    }
}
exports.default = FileDetails;
//# sourceMappingURL=file-details.js.map