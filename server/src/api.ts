import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

const whitelist = ['http://localhost:3000', 'https://localhost:5500']

const corsOptions = {
    origin: function (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) {
console.log(origin);
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)

        } else {
            callback(new Error('Not allowed by CORS'))
            console.log('Not allowed by CORS')
        }
    },
    credentials: true
}

