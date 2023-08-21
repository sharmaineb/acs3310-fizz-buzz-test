test('Sanity check', () => {
    expect(2+2).toBe(4)
});

const fb = require('../fizzbuzz')

// Challenge 1
// Write a test for each of the constants. 
// These should test be equal to the their string namesakes.
test('FIZZ', () => {
    expect(fb.FIZZ).toBe('fizz')
});

test('BUZZ', () => {
    expect(fb.BUZZ).toBe('buzz')
});

test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
});

// Challenge 2
// Test the isFizzy(n) function. 
// This takes a number and returns true if the number is divisible by 3. Prove this with a unit test!
test('isFizzy', () => {
    const results = fb.isFizzy(3, fb.forFizz)
    expect(results).toBe(true)
});

// Challenge 3
// Test the isBuzzy(n) function. 
// This function takes n as a parameter and returns true if the number is divisible by 5. Prove this with a unit test.
test('isBuzzy', () => {
    const results = fb.isBuzzy(5, fb.forBuzz)
    expect(results).toBe(true)
});

// Challenge 4
// Test the fizzyBuzzy(n) function. 
// This function takes the parameter n and returns a string, 'fizz' if n is divisble by 3, 'buzz' if n is divisble by 5, and fizzbuzz if divisible by both 3 and 5.
test('fizzyBuzzy', () => {
    const firstOutput = fb.fizzyBuzzy(3)
    const secondOutput = fb.fizzyBuzzy(5)
    const thirdOutput = fb.fizzyBuzzy(15)

    expect(firstOutput).toBe(fb.FIZZ)
    expect(secondOutput).toBe(fb.BUZZ)
    expect(thirdOutput).toBe(fb.FIZZBUZZ)
});

// Challenge 5
// Test the fizzBuzz(count) function. 
// This function takes a Number count and returns an Object with details about the fizzy and buzziness of the count.
test('fizzyBuzz', () => {
    const firstOutput = fb.fizzBuzz(100)
    expect(firstOutput).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
    const secondOutput = fb.fizzBuzz(100)
    expect(secondOutput).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
});

