"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 9000;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    return console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=app.js.map