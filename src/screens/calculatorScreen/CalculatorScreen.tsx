import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonCalculator } from "../../components/buttonCalculator/ButtonCalculator";
import { calculatorPageStyle } from "./styles";

export const CalculatorScreen = () => {
  const [number, setNumber] = useState("0");
  const [lastNumber, setLastNumber] = useState("0");

  const cleanCalculator = () => {
    setNumber("0");
    setLastNumber("0");
  };

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
        <ButtonCalculator text="+/-" backgroundColor="#9B9B9B" />
        <ButtonCalculator text="del" backgroundColor="#9B9B9B" />
        <ButtonCalculator text="/" backgroundColor="#FF9247" />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="7" />
        <ButtonCalculator text="8" />
        <ButtonCalculator text="9" />
        <ButtonCalculator text="X" backgroundColor="#FF9247" />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="4" />
        <ButtonCalculator text="5" />
        <ButtonCalculator text="6" />
        <ButtonCalculator text="-" backgroundColor="#FF9247" />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="1" />
        <ButtonCalculator text="2" />
        <ButtonCalculator text="3" />
        <ButtonCalculator text="+" backgroundColor="#FF9247" />
      </View>
      <View style={calculatorPageStyle.row}>
        <ButtonCalculator text="0" width />
        <ButtonCalculator text="." />
        <ButtonCalculator
          text="="
          backgroundColor="#FF9247"
          onPress={cleanCalculator}
        />
      </View>
    </View>
  );
};
