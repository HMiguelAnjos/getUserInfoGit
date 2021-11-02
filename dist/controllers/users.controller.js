"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersService_1 = require("../service/usersService");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.name;
    if (req.query.protocol === '') {
        res.status(400).send('Protocolo não informado').end();
        return;
    }
    yield (0, usersService_1.getUsers)(userName)
        .then(result => res.status(200).send(result).end())
        .catch(err => res.status(400).send(`Não foi possível receber dados do usuário ${err.message}`).end());
}));
module.exports = router;
//# sourceMappingURL=users.controller.js.map