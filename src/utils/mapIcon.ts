import Leaflet from 'leaflet'

import mapMarkerImg from '../images/marker.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175, 2]
})

export default mapIcon
