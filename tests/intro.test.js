import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage, factorial } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // Arrange, Act, Assert. Triple A
    // Arrange: turn on tv;
    // Act: press power button
    // Verify tv is off
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(2, 3)).toBe(3);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it('should return "FizzBuzz" if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it('should return "Fizz" if number is only divisible by 3', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it('should return "Buzz" if number is only divisible by 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return the number as a string if it is not divisible by 3 and 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});

describe("calculateAverage", () => {
  it("should return an NaN if the input array is empty", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with a two element", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });
  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });
  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });
  it("should return undefined if given a negative number", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
