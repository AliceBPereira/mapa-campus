import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "./App.css";

import LocalMarkers from "./components/Markers/MarkerPredios";
import MilhoPolygons from "./components/Poligonos/MilhoPoligono";
import CafePolygons from "./components/Poligonos/CafePoligono";

function App() {
  return (
    <div>
      
      <div className="left-column">
        <div className="index">
          <h2>Índice</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div class="right-column">
        <MapContainer center={[-21.3504826, -46.5282748]} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=4ArPJH6nkUswZlxzgz4E"
          />
          <div className="leaflet-control-layers leaflet-control-layers-expanded">
            <LayersControl position="topright">
              <LayersControl.Overlay name="Cafe">
                <LayerGroup>
                  <CafePolygons />
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="locais">
                <LayerGroup>
                  <LocalMarkers />
                </LayerGroup>
                <LayersControl.Overlay checked name="milho">
                  <LayerGroup>
                    <MilhoPolygons />
                  </LayerGroup>
                </LayersControl.Overlay>
              </LayersControl.Overlay>
            </LayersControl>
          </div>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
