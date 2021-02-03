import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { Icon } from 'leaflet'
import './styles.css'
import data from '../../data.json'


const Map = () => {

    const stopsAB = data[0].stops
    const segmentsAB = data[0].segments
    const stopsBA = data[1].stops
    const segmentsBA = data[1].segments

    const busStopIcon = new Icon({
        iconUrl: 'bus-stop.svg',
        iconSize: [50, 50]
    })

    const renderStops = (x, index) => {

        return <Marker position={[x.location.lat, x.location.lng]} key={x.id} icon={busStopIcon}>
            <Popup >
                <div className="stop-baloon">
                    <h3>Спиркa #{index + 1}:</h3>
                    <p>{x.name.toUpperCase()}</p>
                </div>
            </Popup>
        </Marker >
    }
    const renderSegments = (x, color) => {
        let latLngs = []
        x.coordinates.forEach(z => {
            latLngs.push(Object.values(z))
        })
        return <Polyline key={x.id} positions={[latLngs]} color={color} />
    }

    console.log(stopsAB)
    const stopsRouteAB = stopsAB.map((x, index) => renderStops(x, index))
    const segmentsRouteAB = segmentsAB.map(x => renderSegments(x, '#0078a8'))
    const stopsRouteBA = stopsBA.map((x, index) => renderStops(x, index))
    const segmentsRouteBA = segmentsBA.map(x => renderSegments(x, '#377a4aeb'))

    return <div >
        <h1>The map</h1>
        <div id="mapid">
            <MapContainer center={[42.69181499481202, 23.351221656799318]} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stopsRouteAB}
                {segmentsRouteAB}
                {stopsRouteBA}
                {segmentsRouteBA}
            </MapContainer>
        </div>
    </div>


}
export default Map