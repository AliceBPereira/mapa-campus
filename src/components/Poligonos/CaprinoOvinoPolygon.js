import React from "react";
import { Polygon, Popup } from "react-leaflet";
import { CaprinoOvino1, CaprinoOvino10, CaprinoOvino11, CaprinoOvino12, CaprinoOvino13, CaprinoOvino2, CaprinoOvino3, CaprinoOvino4, CaprinoOvino5, CaprinoOvino6, CaprinoOvino7, CaprinoOvino8, CaprinoOvino9 } from "../../coordenadas/CoordCaprinoOvino";

const greenOptions = { color: "green" };

const CaprinoOvinoPolygon = () => {
  return (
    <>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino1}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino2}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino3}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino4}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino5}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino6}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino7}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino8}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino9}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino10}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino11}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino12}>
        <Popup></Popup>
      </Polygon>
      <Polygon pathOptions={greenOptions} positions={CaprinoOvino13}>
        <Popup></Popup>
      </Polygon>
      
    </>
  );
};

export default CaprinoOvinoPolygon;
