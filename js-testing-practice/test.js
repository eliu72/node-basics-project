const code = require('./code.js')

test('capitalize first letter', () => {
    expect(code.capitalize('hello')).toBe('Hello');
    expect(code.capitalize('HeLlo')).toBe('HeLlo');
    expect(code.capitalize('_hello')).toBe('_hello');
})

test('reverseString', () => {
    expect(code.reverseString('hello')).toBe('olleh');
    expect(code.reverseString('12_!fd')).toBe('df!_21');
    expect(code.reverseString('racecar')).toBe('racecar');
})

test('addition', () => {
    expect(code.calculator.add(1,2)).toBe(1+2);
    expect(code.calculator.add(103, 385)).toBe(103+385);
    expect(code.calculator.add(-4, 19)).toBe(-4+19);
})

test('subtraction', () => {
    expect(code.calculator.subtract(1,2)).toBe(1-2);
    expect(code.calculator.subtract(103, 385)).toBe(103-385);
    expect(code.calculator.subtract(-4, 19)).toBe(-4-19);
})

test('multiplication', () => {
    expect(code.calculator.multiply(1,2)).toBe(1*2);
    expect(code.calculator.multiply(103, 385)).toBe(103*385);
    expect(code.calculator.multiply(-4, 19)).toBe(-4*19);
})

test('division', () => {
    expect(code.calculator.divide(1,2)).toBe(1/2);
    expect(code.calculator.divide(103, 385)).toBe(103/385);
    expect(code.calculator.divide(-4, 19)).toBe(-4/19);
})


