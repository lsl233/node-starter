import express from 'express';
import config from './config';

const app = express();

// eslint-disable-next-line no-console
app.listen(config.port, () => console.log(`server start ${config.port}`));
