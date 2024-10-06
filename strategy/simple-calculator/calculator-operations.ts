interface calculatorOperation {
  calculate(a: number, b: number): number;
}

class Addition implements calculatorOperation {
  calculate(a: number, b: number): number {
    return a + b;
  }
}

class Subtraction implements calculatorOperation {
  calculate(a: number, b: number): number {
    return a - b;
  }
}

class Multiplication implements calculatorOperation {
  calculate(a: number, b: number): number {
    return a * b;
  }
}

class Division implements calculatorOperation {
  calculate(a: number, b: number): number {
    return a / b;
  }
}

export { calculatorOperation, Addition, Subtraction, Multiplication, Division };
