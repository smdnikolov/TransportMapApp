import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useSelector } from 'react-redux'



import './styles.css'

const Map = () => {

    const route = useSelector(state => state.route)
    const mapData = useSelector(state => state.map)
    const busStopIcon = new Icon({
        iconUrl: 'bus-stop.svg',
        iconSize: [50, 50]
    })
    const renderStops = (x, index) => {

        return <Marker position={[x.location.lat, x.location.lng]} key={x.id} icon={busStopIcon}>
            <Popup >
                <div className="stop-baloon" id={x.id}>
                    <h5>Спиркa #{index + 1}:</h5>
                    <p>{x.name.toUpperCase()}</p>
                </div>
            </Popup>
        </Marker >
    }
    const renderSegments = (x) => {
        let z
        route.name === 'Зоопарка - ж.к. Левски Г' ? z = '#0078a8' : z = '#377a4aeb'
        let latLngs = []
        x.coordinates.forEach(z => {
            latLngs.push(Object.values(z))
        })
        return <Polyline key={x.id} positions={[latLngs]} color={z} />
    }
    const stops = () => {
        if (route.name) {
            return route.stops.map((x, index) => renderStops(x, index))
        }
    }
    const segments = () => {
        if (route.name) {
            return route.segments.map(x => renderSegments(x))
        }
    }
    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    return <div >
        <div id="mapid">
            <MapContainer center={mapData.center} zoom={mapData.zoom} scrollWheelZoom={true}>
                <ChangeView center={mapData.center} zoom={mapData.zoom} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stops()}{segments()}
            </MapContainer>
        </div>
    </div>


}
export default Map