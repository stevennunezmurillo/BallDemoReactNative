/*
Steven Nuñez Murillo 
Gabriel Revillat 
*/

import React, { Component } from "react";
import { StyleSheet, View, ImageBackground} from "react-native";
import { StatusBar } from "expo-status-bar";

/*
Instrumento que a través de sensores, monitorea las fuerzas de aceleración debidas a la 
gravedad y el movimiento junto con su dirección, y las cuantifica.
*/
import { accelerometer, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";

import Game from "./Game";

/* 
Establece el intervalo en el que recibe actualizaciones, como los sensores son globales, solo 
podemos establecer la velocidad a la que se lee el hardware globalmente.
*/
setUpdateIntervalForType(SensorTypes.accelerometer, 16);
const staticImage = require("./BackBall.jpg");

export default class App extends Component {

  /* 
  Permite el paso de parámetros entre pantallas de react native, pasa como parámetro el
  acelerometro
  */
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={staticImage} style={styles.ImageBackground}>
       <StatusBar style="auto" />
       <Game data={accelerometer} />
       {}
     </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
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

/*
Referencias:

Material a partir del cual se desarrolló la aplicación y se le aplicaron las modificaciones.
https://github.com/react-native-sensors/react-native-sensors/tree/master/examples/KeepTheBallGame 

*/