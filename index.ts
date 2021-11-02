import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


server.use(require('./src/controllers'));

server.listen(3000, () => {
    console.log({ message: `Api AdviceRisc rodando na porta 3000` });
});
