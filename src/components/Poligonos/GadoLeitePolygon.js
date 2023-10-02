import React from "react";
import { Polygon, Popup } from "react-leaflet";
import { GadoLeite1, GadoLeite2, GadoLeite3, GadoLeite4, GadoLeite5, GadoLeite6, GadoLeite7, GadoLeite8 } from "../../coordenadas/CoordGadoLeite";


const greenOptions = { color: "black" };

const GadoLeitePolygons = () => {
  return (
    <>
     
      <Polygon pathOptions={greenOptions} positions={GadoLeite1}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite2}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite3}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite4}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite5}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite6}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite7}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={GadoLeite8}>
        <Popup></Popup>
      </Polygon>

      
      
    </>
  );
};

export default GadoLeitePolygons;
