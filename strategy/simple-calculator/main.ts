import {
  calculatorOperation,
  Addition,
  Subtraction,
  Multiplication,
  Division,
} from "./calculator-operations.ts";

function main() {
  let calculatorOperation: calculatorOperation;

  const a = 100;
  const b = 25;

  calculatorOperation = new Addition();
  console.log(calculatorOperation.calculate(a, b));

  calculatorOperation = new Subtraction();
  console.log(calculatorOperation.calculate(a, b));

  calculatorOperation = new Multiplication();
  console.log(calculatorOperation.calculate(a, b));

  calculatorOperation = new Division();
  console.log(calculatorOperation.calculate(a, b));
}

main();
