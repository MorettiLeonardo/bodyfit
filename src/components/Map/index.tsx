import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngTuple } from 'leaflet'

const position: LatLngTuple = [51.505, -0.09]

const Map = () => (
  <MapContainer
    className="pt-[200px] md:mt-0"
    center={position}
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: '400px', width: '100%' }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </MapContainer>
)

export default Map
