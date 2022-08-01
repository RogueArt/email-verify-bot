import { toTitleCase } from "../../src/utils/lib";

describe('toTitleCase helper function', () => {
  test('Empty string is returned unchanged', () => {
    expect(toTitleCase('')).toBe('')
  })

  test('Strings without whitespace begin with capital letter', () => { 
    const expected = 'Test'
    expect(toTitleCase('test')).toBe(expected) // all lowercase
    expect(toTitleCase('TEST')).toBe(expected) // all uppercase
    expect(toTitleCase('tEsT')).toBe(expected) // mixed case
  })

  test('Strings with whitespace have each word start with capital letter', () => {
    const singleSpaced = 'have a nice day!'
    const mixedSpaced = 'have    a nice          day!'
    
    const expected = 'Have A Nice Day!'
    expect(toTitleCase(singleSpaced)).toBe(expected)
    expect(toTitleCase(mixedSpaced)).toBe(expected)
  })
})