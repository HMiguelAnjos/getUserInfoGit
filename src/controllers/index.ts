import { Router, Response, Request } from "express"
import { getUsers } from '../service/users'

const route = Router()

route.get('/', (request, response) => {
    try {
        const arr = request.body.lista
        arr.map((a) => {
            const res = getUsers(a)
            return res
        })
    }
    catch (err) {
        console.log(`Erro ${err.message} no get users`)
    }
})