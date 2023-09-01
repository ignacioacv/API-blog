"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const comments_routes_1 = __importDefault(require("./routes/comments.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", post_routes_1.default);
app.use("/api", comments_routes_1.default);
exports.default = app;
