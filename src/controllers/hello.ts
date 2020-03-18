import { Request, Response } from 'express'

export function world(req: Request, res: Response) {
  res.send('hello world')
}
