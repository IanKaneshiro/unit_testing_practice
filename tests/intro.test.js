import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz } from "../src/intro";

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
