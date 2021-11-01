import express, { Application } from 'express'
import cors from 'cors'

class Server{
    private server: Application

    constructor(){
        this.server = express()
        this.server.use(express.json)
        this.server.use(express.urlencoded({ extended: false}))
        this.server.use('./src/controllers')
        this.server.use(cors)

        this.server.listen('3002', ()=>{
            console.log('Server start on port 3300')
        })
    }
    
}

new Server()
