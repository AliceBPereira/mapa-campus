import React from "react";
import { Polygon, Popup } from "react-leaflet";
import { milho1 } from "../../coordenadas/Milho";
import { milho2 } from "../../coordenadas/Milho";

const purpleOptions = { color: "purple" };

const MilhoPolygons = () => {
  return (
    <>
      <Polygon pathOptions={purpleOptions} positions={milho1}>
        <Popup>Milho 1</Popup>
      </Polygon>
      <Polygon pathOptions={purpleOptions} positions={milho2}>
      
        <Popup>Milho 2</Popup>
      </Polygon>
    </>
  );
};

export default MilhoPolygons;
