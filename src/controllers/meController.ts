/**
 * @file meController
 * @author Mattamorphic
 */

import {Request, Response} from 'express';
export function getMe(_: Request, res: Response): void {
  console.log('Endpoint logic...');
  res.status(200).send('OK');
}
