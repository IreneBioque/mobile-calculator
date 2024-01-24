import { StyleSheet } from "react-native";

export const calculatorPageStyle = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  resultText: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },
  resultLitte: {
    color: "rgba(255,255,255, 0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
