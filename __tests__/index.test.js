import reverse from '../src/index.js'
import { expect, test } from '@jest/globals'
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('reverse', () => { 
  //expect(reverse('hello')).toEqual('olleh')
  expect(reverse('')).toEqual('')
})

test('test reverse text', () => {
  let file_text = fs.readFileSync(path.join(__dirname,'..', '__fixtures__', 'text.txt'), 'utf-8');
  fs.writeFileSync('reversed_text.txt', reverse(file_text));
  expect(file_text).not.toEqual(reverse(file_text));
})
