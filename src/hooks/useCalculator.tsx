import { useRef, useState } from "react";
import { Operators } from "../screens/calculatorScreen/operators.enum";

export const useCalculator = () => {
  const [number, setNumber] = useState("0");
  const [lastNumber, setLastNumber] = useState("0");
  const lastOperation = useRef<Operators>();

  const cleanCalculator = () => {
    setNumber("0");
    setLastNumber("0");
  };

  const buildNumber = (receiveNumber: string) => {
    // Do not accept double dots
    if (number.includes(".") && receiveNumber === ".") {
      return;
    }

    if (number.startsWith("0") || number.startsWith("-0")) {
      // decimal dot
      if (receiveNumber === ".") {
        setNumber(number + receiveNumber);

        // Number it's another zero, and there's a point
      } else if (receiveNumber === "0" && number.includes(".")) {
        setNumber(number + receiveNumber);

        // Number different from zero and does not have a dot
      } else if (receiveNumber !== "0" && !number.includes(".")) {
        setNumber(receiveNumber);

        // Avoid number 0000.0
      } else if (receiveNumber === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + receiveNumber);
      }
    } else {
      setNumber(number + receiveNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };
  const deleteLastNumber = () => {
    if (
      number.length === 1 ||
      (number.length === 2 && number.startsWith("-"))
    ) {
      return setNumber("0");
    }
    setNumber(number.slice(0, -1));
  };

  const changeNumberByLastNumber = () => {
    if (number.endsWith(".")) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber("0");
  };
  const buttonDivide = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.divide;
  };
  const buttonMultiply = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.multiply;
  };
  const buttonSubstract = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.substract;
  };
  const buttonAdd = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    if (lastOperation.current === Operators.divide && num1 === 0) {
      setNumber("0");
    } else {
      switch (lastOperation.current) {
        case Operators.add:
          setNumber(`${num1 + num2}`);
          break;
        case Operators.substract:
          setNumber(`${num2 - num1}`);
          break;
        case Operators.multiply:
          setNumber(`${num1 * num2}`);
          break;
        case Operators.divide:
          setNumber(`${num2 / num1}`);
          break;
      }
    }
    setLastNumber("0");
  };
  return {
    number,
    lastNumber,
    cleanCalculator,
    buildNumber,
    positiveNegative,
    deleteLastNumber,
    buttonDivide,
    buttonMultiply,
    buttonSubstract,
    buttonAdd,
    calculate,
  };
};
