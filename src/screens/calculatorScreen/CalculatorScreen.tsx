import React from "react";
import { Text, View } from "react-native";
import { ButtonCalculator } from "../../components/buttonCalculator/ButtonCalculator";
import { useCalculator } from "../../hooks/useCalculator";
import { calculatorPageStyle } from "./styles";

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={calculatorPageStyle.calculatorContainer}>
      {lastNumber !== "0" && (
        <Text style={calculatorPageStyle.resultLitte}>{lastNumber}</Text>
      )}

      <Text
        style={calculatorPageStyle.resultText}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator
          text="C"
          backgroundColor="#9B9B9B"
          onPress={cleanCalculator}
        />
        <ButtonCalculator
          text="+/-"
          backgroundColor="#9B9B9B"
          onPress={positiveNegative}
        />
        <ButtonCalculator
          text="del"
          backgroundColor="#9B9B9B"
          onPress={deleteLastNumber}
        />
        <ButtonCalculator
          text="/"
          backgroundColor="#FF9247"
          onPress={buttonDivide}
        />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="7" onPress={buildNumber} />
        <ButtonCalculator text="8" onPress={buildNumber} />
        <ButtonCalculator text="9" onPress={buildNumber} />
        <ButtonCalculator
          text="X"
          backgroundColor="#FF9247"
          onPress={buttonMultiply}
        />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="4" onPress={buildNumber} />
        <ButtonCalculator text="5" onPress={buildNumber} />
        <ButtonCalculator text="6" onPress={buildNumber} />
        <ButtonCalculator
          text="-"
          backgroundColor="#FF9247"
          onPress={buttonSubstract}
        />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="1" onPress={buildNumber} />
        <ButtonCalculator text="2" onPress={buildNumber} />
        <ButtonCalculator text="3" onPress={buildNumber} />
        <ButtonCalculator
          text="+"
          backgroundColor="#FF9247"
          onPress={buttonAdd}
        />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="0" width onPress={buildNumber} />
        <ButtonCalculator text="." onPress={buildNumber} />
        <ButtonCalculator
          text="="
          backgroundColor="#FF9247"
          onPress={calculate}
        />
      </View>
    </View>
  );
};
