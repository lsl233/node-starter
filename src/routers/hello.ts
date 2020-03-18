import { Router } from 'express'
import * as helloControllers from '../controllers/hello'

const router = Router()

router.get('/', ((req, res) => {
  res.send('hello')
}))

router.get('/world', helloControllers.world)

export default router
