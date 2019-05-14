/**
 * @file Console / Options for the github-oauth-tester
 * @author Mattamorphic
 */

// Dot Env Config
import { config } from 'dotenv';
import path from 'path';
config({ path: path.resolve(__dirname, '../../.env') });

import FileDetails from './console-helpers/file-details';

// Command line args
import commandLineArgs from 'command-line-args';
const options = commandLineArgs([
  { name: 'number', alias: 'n', type: Number },
  { name: 'file', alias: 'k', multiple: false, type: filename => new FileDetails(filename)},
  { name: 'name', type: String },
  { name: 'port', alias: 'p', type: Number },
]);

// If the key hasn't been passed as an arg, lets fall back to a key file
const file = !options.file || !options.file.doesExist()
  ? new FileDetails(process.env.FILE)
  : options.file;

if (!file.doesExist()) {
  throw new Error('Must provide file as either --file=/path/to/file or in .env as FILE=/path/to/file');
}

// Determine either console options or .env
const variables = {
  number: options.number || process.env.NUMBER,
  file: file.getContents(),
  name: options.name || process.env.NAME,
  port: options.port || process.env.PORT || 5000,
};

// These values must be set, so throw if they aren't
if (!variables.number || !variables.name) {
  throw new Error('Must provide number and name in .env or as console options');
}

// Return the variables
export default variables;
