"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/entity', (req, res) => {
    res.json({
        id: 1001,
        firstName: 'Abe',
        lastName: 'Lincoln',
        age: 25,
        height: 176,
        weight: 84.15
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
