import express from 'express'
import config from './config'
import * as routers from './routers'
const app = express();

app.use('/hello', routers.hello)

app.listen(config.port, () => console.log(`server start ${config.port}`));
