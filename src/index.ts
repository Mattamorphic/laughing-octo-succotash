/**
 * @file Runner
 * @author Mattamorphic
 */

// Custom imports
import variables from './lib/console';
import NgrokWrapper from './lib/ngrok-wrapper';
const ngrok = new NgrokWrapper(variables.port);

// ExpressJS Config
import express from 'express';
const app = express();
app.locals.ngrok = ngrok;
app.locals.name = variables.name;
app.locals.number = variables.number;
app.locals.file = variables.file;

import bodyParser from 'body-parser';
app.use(bodyParser.json());

// Import routers
//import { myRouter } from './routes/';

// Add endpoints
//app.use('/endpoint', myRouter);

// start the app on the port
app.listen(variables.port);

// Start app with ngrok
(async (): Promise<void> => {
  const url = await ngrok.gen();
  console.log(url);
})();
