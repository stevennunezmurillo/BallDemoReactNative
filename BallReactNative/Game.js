import React from "react";
import { componentFromStreamWithConfig } from "recompose";

/* 
Biblioteca de programación reactiva que se encarga del flujo de datos, su propagación y cambios.
*/
import { of, from } from "rxjs";
import App from "./App"
/*
SwitchMap: Proyecta cada valor de origen a un Observable que se fusiona en el Observable de 
salida. Actualiza el observable con la entrada más próxima, no importa la anterior, solo actualiza
el observable.

starwith: Devuelve un observable con todos los valores actualizados que luego envía sincronicamente
a los sucriptores de ese observable.

scan: Útil para encapsular y administrar el estado, utiliza un acumulador el cual registra y actualiza
el estado luego de cada llamado/actualización.

map: plica una projectfunción determinada a cada valor emitido por el Observable fuente y emite los 
valores resultantes como un Observable.

tap: Se utiliza para realizar efectos secundarios para las notificaciones de la fuente observable.
*/
import { switchMap, startWith, scan, tap, map, catchError } from "rxjs/operators";

import Ball from "./Ball";
import Table, { TABLE_SIZE } from "./Table";

const rxjsConfig = {
  fromESObservable: from,
  toESObservable: (stream) => stream,
};

const componentFromStream = componentFromStreamWithConfig(rxjsConfig);

const neutralData = {
  x: 0,
  y: 0,
};

// Función para determinar si se salió de la tabla
const hasFallenFromTable = (x, y) => Math.abs(x) > TABLE_SIZE / 2 || Math.abs(y) > TABLE_SIZE / 2;

export default componentFromStream((props$) =>
  props$.pipe(
    switchMap((props) => props.data),
    startWith(neutralData),
    scan((acc, value) => ({ x: acc.x - value.x, y: acc.y + value.y }), neutralData),
    tap(({ x, y }) => {
      if (hasFallenFromTable(x, y)) {
        console.log("Marking the game as done");
        throw "game lost";
      }
    }),
    map(({ x, y }) => (
      <Table>
        <Ball x={x} y={y} />
      </Table>
    )),
    catchError(() => of(<App></App>))
  )
);