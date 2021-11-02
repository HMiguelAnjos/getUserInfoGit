import express, { Router } from "express"
import { getUsers } from '../service/usersService'

const router: Router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    const userName = req.body.name
    const result = await getUsers(userName)

    return res.status(200).send(result).end()
})

module.exports = router;
