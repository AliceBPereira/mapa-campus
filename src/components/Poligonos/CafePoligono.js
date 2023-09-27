import React from "react";
import { Polygon, Popup } from "react-leaflet";
import { talhao1 } from "../../coordenadas/Cafe";

const purpleOptions = { color: "purple" };

const CafePolygons = () => {
  return (
    <>
      <Polygon pathOptions={purpleOptions} positions={talhao1}>
      
        <Popup>talhao1</Popup>
      </Polygon>
      
    </>
  );
};

export default CafePolygons;