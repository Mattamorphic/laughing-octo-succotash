/**
 * @file myRouter
 * @author Mattamorphic
 */

import { Request, Response, NextFunction, Router } from 'express';
import { getMe } from '../controllers/meController';

export const myRouter = Router();

// Router middleware
myRouter.use((req: Request, _: Response, next: NextFunction) => {
  // Global app variables
  console.log(req.app.locals);
  if (req.body) {
    console.log(req.body);
  }
  next();
})

myRouter.post('/', getMe);
