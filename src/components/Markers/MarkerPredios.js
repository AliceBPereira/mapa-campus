import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markeredificios from "../../icones.png/pino-de-localizacao.png";
import {
  predioH,
  LaboratorioGEAGRO,
  MecanizacaoAgricola,
  PredioPedagogicoVeterinaria,
  PredioPedaggicoEngenhariaAgronomica,
  LaboratorioBiotecnologia,
  LaboratorioBromatologiaAgua,
  Agroindustria,
  Biblioteca,
  CEAD,
  PredioTecnologiaInformação,
  Refeitorio,
  Estacionamento,
  LanchoneteNegrinho,
  GinasioPoliesportivo,
  AlojamentoMasculinoBlocoA,
  AlojamentoMasculinoBlocoB,
  AlojamentoFemininoBlocoC,
  PrefeituraEGaragem,
  HospitalVeterinario,
  ZootecniaIIIBovinoculturaLeiteira,
  ZootecniaIICaprinoOvino,
} from "../../coordenadas/CoordPredios";
import imgPredioH from "../../ImgLugares/PredioH.png";

const Iconlugar = new L.Icon({
  iconUrl: markeredificios,
  iconRetinaUrl: markeredificios,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});


const LocalMarkers = () => {
  

  return (
    <>
      <Marker icon={Iconlugar} position={predioH}>
        <Popup><p>Prédio H</p>
        <div>
          <img src={imgPredioH} alt="Prédio H" />
        </div>
        </Popup>
        
      </Marker>
      <Marker icon={Iconlugar} position={MecanizacaoAgricola}>
        <Popup>Mecanização Agricola</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={LaboratorioGEAGRO}>
        <Popup>Laboratorio do GEAGRO</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={PredioPedagogicoVeterinaria}>
        <Popup>MED Vet c</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={PredioPedaggicoEngenhariaAgronomica}>
        <Popup>Engenharia Agro</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={LaboratorioBiotecnologia}>
        <Popup>Biotecnologia</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={LaboratorioBromatologiaAgua}>
        <Popup>Bromologia</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={Agroindustria}>
        <Popup>Agroindustria</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={Biblioteca}>
        <Popup>Biblioteca</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={CEAD}>
        <Popup>CEAD</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={PredioTecnologiaInformação}>
        <Popup>Informática</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={Refeitorio}>
        <Popup>Refeitório</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={Estacionamento}>
        <Popup>Estacionamento</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={LanchoneteNegrinho}>
        <Popup>Lanchonete</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={GinasioPoliesportivo}>
        <Popup>Ginásio Poliesportivo</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={AlojamentoMasculinoBlocoA}>
        <Popup>Alojamento masculino A</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={AlojamentoMasculinoBlocoB}>
        <Popup>Alojamento masculino B</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={AlojamentoFemininoBlocoC}>
        <Popup>Alojamento Feminino C</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={PrefeituraEGaragem}>
        <Popup>Prefeitura</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={HospitalVeterinario}>
        <Popup>Hospital veterinário</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={ZootecniaIIIBovinoculturaLeiteira}>
        <Popup>Zootecnia III</Popup>
      </Marker>
      <Marker icon={Iconlugar} position={ZootecniaIICaprinoOvino}>
        <Popup>Bovinocultura</Popup>
      </Marker>
    </>
  );
};

export default LocalMarkers;
