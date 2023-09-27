import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markeredificios from "../../icones.png/pino-de-localizacao.png";

const Iconlugar = new L.Icon({
  iconUrl: markeredificios,
  iconRetinaUrl: markeredificios,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

const LocalMarkers = () => {
  return (
    <>
      <Marker icon={Iconlugar} position={[-21.351392, -46.5216]}>
                <Popup>Mecanização Agricola</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351288, -46.522005]}>
                <Popup>Laboratorio do GEAGRO</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351103, -46.522599]}>
                <Popup>Laboratorio de classificação</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351136, -46.523]}>
                <Popup>MED Vet c</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350967, -46.523729]}>
                <Popup>Med Vet</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351004, -46.52408]}>
                <Popup>Engenharia Agro</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.35103, -46.524479]}>
                <Popup>Biotecnologia</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351099, -46.52487]}>
                <Popup>Bromologia</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351392, -46.5216]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[21.351005, -46.526087]}>
                <Popup>Nucleo intitucional</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.3512, -46.52541]}>
                <Popup>Agroindustria</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.351609, -46.526388]}>
                <Popup>Biblioteca</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.35097, -46.526101]}>
                <Popup>Nucleo intitucional</Popup>
              </Marker>

              <Marker icon={Iconlugar} position={[-21.351037, -46.526323]}>
                <Popup>CEAD</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350814, -46.526807]}>
                <Popup>Depósito</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350809, -46.527035]}>
                <Popup>Informática</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350703, -46.527511]}>
                <Popup>Refeitório</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350458, -46.528142]}>
                <Popup>Predio H</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350152, -46.527417]}>
                <Popup>Estacionamento</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.349883, -46.527834]}>
                <Popup>Lanchonete</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.349631, -46.528143]}>
                <Popup>Laboratorio de solos</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.349263, -46.528795]}>
                <Popup>Coordenadoria de registros</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.34906, -46.528713]}>
                <Popup>Ginásio Poliesportivo</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.34932, -46.529483]}>
                <Popup>Alojamento masculino A</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.349658, -46.529593]}>
                <Popup>Alojamento masculino B</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.350116, -46.529936]}>
                <Popup>Alojamento Feminino C</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.348894, -46.530168]}>
                <Popup>Prefeitura</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.34778, -46.531037]}>
                <Popup>Hospital veterinário</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.347316, -46.532575]}>
                <Popup>Zootecnia III</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.347209, -46.53324]}>
                <Popup>Bovinocultura</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.35097, -46.526101]}>
                <Popup>Nucleo intitucional</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.353186, -46.529496]}>
                <Popup>Corte de vaquinhas</Popup>
              </Marker>

              <Marker icon={Iconlugar} position={[-21.345324, -46.530161]}>
                <Popup>Zootecnia 2</Popup>
              </Marker>
    </>
  );
};

export default LocalMarkers;
