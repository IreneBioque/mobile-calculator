import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { CalculatorScreen } from "./src/screens/calculatorScreen/CalculatorScreen";
import { generalStyles } from "./src/theme/appTheme";

const App = () => {
  return (
    <SafeAreaView style={generalStyles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
