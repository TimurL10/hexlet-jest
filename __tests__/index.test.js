import reverse from '../src/index.js'
import { expect, test } from '@jest/globals'

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh')
  expect(reverse('')).toEqual('')
})