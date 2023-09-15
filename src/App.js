import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div>
      <MapContainer center={[-21.3504826, -46.5282748]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=4ArPJH6nkUswZlxzgz4E"
        />
        <Marker position={[-21.3504826, -46.5282748]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
