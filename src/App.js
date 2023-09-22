import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "./App.css";
import L from "leaflet";
import markercafe from "../src/icones.png/coffee_beam_20595.png";
import markeredificios from "../src/icones.png/pino-de-localizacao.png";



function App() {
  // Define os ícones
const myIcon = new L.Icon({
  iconUrl: markercafe,
  iconRetinaUrl: markercafe,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});
const Iconlugar = new L.Icon({
  iconUrl: markeredificios,
  iconRetinaUrl: markeredificios,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

  return (
    <div>
      <MapContainer center={[-21.3504826, -46.5282748]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=4ArPJH6nkUswZlxzgz4E"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Cafe">
            <LayerGroup>
            <Marker icon={myIcon} position={[-21.3519095, -46.5211916]}>
                <Popup>
                  <a>TALHÃO</a>
                  <p>T-3</p>
                </Popup>
              </Marker>

              <Marker icon={myIcon} position={[-21.3521843, -46.521033]}>
                <Popup>
                  <a>TALHÃO</a>
                  <p>T-4</p>
                </Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.35171, -46.520575]}>
                <Popup>
                  <a>TALHÃO</a>
                  <p>T-5</p>
                </Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3520494, -46.5207648]}>
                <Popup>
                  <a>TALHÃO</a>
                  <p>T-5</p>
                </Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3511486, -46.5209594]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.351593, -46.520888]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350932, -46.52052]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350741, -46.521142]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350335, -46.520706]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350056, -46.520971]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350169, -46.521722]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350413, -46.521957]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.35043, -46.521229]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350776, -46.521923]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.349787, -46.521373]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350635, -46.522985]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.348565, -46.520455]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.348399, -46.519947]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350249, -46.522561]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.349871, -46.524036]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350451, -46.524123]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.349059, -46.52509]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.350032, -46.525617]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.34611111, -46.52861111]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3433254, -46.5258536]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.34361111, -46.52638889]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3431076, -46.5276705]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3426699, -46.5283333]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3427298, -46.5296054]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3427798, -46.5309084]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3428598, -46.5320839]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3423821, -46.5325644]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.34277778, -46.53305556]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3426799, -46.5340272]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3422222, -46.5341238]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.342492, -46.5307272]}>
                <Popup>Prédio H</Popup>
              </Marker>
              <Marker icon={myIcon} position={[-21.3427798, -46.5355019]}>
                <Popup>Prédio H</Popup>
              </Marker>
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="locais">
            <LayerGroup>
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
              <Marker icon={Iconlugar} position={[-21.349060, -46.528713]}>
                <Popup>Ginásio Poliesportivo</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.349320, -46.529483]}>
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
              <Marker icon={Iconlugar} position={[-21.347780, -46.531037]}>
                <Popup>Hospital veterinário</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.347316, -46.532575]}>
                <Popup>Zootecnia III</Popup>
              </Marker>
              <Marker icon={Iconlugar} position={[-21.347209, -46.533240]}>
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
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default App;
