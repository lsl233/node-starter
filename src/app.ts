import express from 'express'
import config from './config'
import helloRouter from './routers/hello'

const app = express();

app.use('/hello', helloRouter)

app.listen(config.port, () => console.log(`server start ${config.port}`));
