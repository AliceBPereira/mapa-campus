import React from "react";
import { Polygon } from "react-leaflet";
import { Campus } from "../../coordenadas/CoordCampus";

const greenOptions = { color: "blue" };

const CampusPolygon = () => {
  return (
    <>
      <Polygon pathOptions={greenOptions} positions={Campus}>
      </Polygon>
      
      
    </>
  );
};

export default CampusPolygon;
