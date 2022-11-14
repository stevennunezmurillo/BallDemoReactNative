import React from "react";
import { StyleSheet, View, Text} from "react-native";

export const TABLE_SIZE = 250;

export default function Table({ children, contador}) {
  return <View style={[styles.table, styles.centeredContent]}>{children}
          </View>;
}

const styles = StyleSheet.create({
  table: {
    alignItems: "center",
    backgroundColor: "#521351",
    flexDirection: "column",
    height: TABLE_SIZE,
    justifyContent: "center",
    width: TABLE_SIZE,
  },
});