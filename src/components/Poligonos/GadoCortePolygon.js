import React from "react";
import { Polygon, Popup } from "react-leaflet";
import { GadoCorte1, GadoCorte2, GadoCorte3, GadoCorte4 } from "../../coordenadas/CoordGadoCorte";

const greenOptions = { color: "orange" };

const GadoCortePolygon = () => {
  return (
    <>
      <Polygon pathOptions={greenOptions} positions={GadoCorte1}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoCorte2}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoCorte3}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoCorte4}>
        <Popup></Popup>
      </Polygon>
      
      
      
    </>
  );
};

export default GadoCortePolygon;
