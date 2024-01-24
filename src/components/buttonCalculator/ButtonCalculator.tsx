import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "./styles";
import { buttonInterface } from "./types";

export const ButtonCalculator = ({
  text,
  backgroundColor = "#2D2D2D",
  width = false,
  onPress,
}: buttonInterface) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={{
          ...buttonStyles.button,
          backgroundColor: backgroundColor,
          width: width ? 180 : 80,
        }}
      >
        <Text
          style={{
            ...buttonStyles.buttonText,
            color: backgroundColor === "#9B9B9B" ? "black" : "white",
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
