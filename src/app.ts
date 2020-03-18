import express from 'express'
import helloRouter from './routers/hello'

const app = express();

app.use('/hello', helloRouter)

export default app
