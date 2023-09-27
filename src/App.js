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
      <MapContainer center={[-21.3504826, -46.5282748]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=4ArPJH6nkUswZlxzgz4E"
        />
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
      </MapContainer>
    </div>
  );
}

export default App;
