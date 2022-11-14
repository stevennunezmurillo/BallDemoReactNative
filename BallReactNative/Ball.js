import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

const staticImage = require("./Ball.png");


export const BALL_SIZE = 50;
export default function Ball({ x, y }) {
  return <View style={[styles.ball, { transform: [{ translateX: x }, { translateY: y }] }]}>
          <ImageBackground source={staticImage} style={styles.ImageBackground}>
          <StatusBar style="auto" />
          {}
          </ImageBackground>
         </View>;
}

const styles = StyleSheet.create({
  ball: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: "red",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});