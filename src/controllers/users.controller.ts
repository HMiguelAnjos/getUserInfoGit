import express, { Router } from "express"
import { getUsers } from '../service/usersService'

const router: Router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    const userName = req.body.name
    await getUsers(userName)
        .then(result => res.status(200).send(result).end())
        .catch(err => res.status(400).send(`Não foi possível receber dados do usuário ${err.message}`).end());
})

module.exports = router;
