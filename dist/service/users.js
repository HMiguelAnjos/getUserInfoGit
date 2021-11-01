"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getUsers(username) {
    const result = axios_1.default.get(`https://api.github.com/users/${username}`);
    return result.then((res) => { console.log(res.data); });
}
getUsers('HMiguelAnjos');
//# sourceMappingURL=users.js.map