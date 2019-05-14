"use strict";
/**
 * @file meController
 * @author Mattamorphic
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getMe(_, res) {
    console.log('Endpoint logic...');
    res.status(200).send('OK');
}
exports.getMe = getMe;
//# sourceMappingURL=meController.js.map