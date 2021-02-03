import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css'
import data from '../../data.json'

const Map = () => {


    const stops = data[0].stops
    console.log(stops)
    let z = stops.map(x => {
        console.log(x.location)
        return <Marker position={[x.location.lat, x.location.lng]} key={x.id}>
            <Popup>
                {x.name}
            </Popup>
        </Marker>
    })
    console.log(stops)
    return <div >
        <h1>The map</h1>
        <div id="mapid">
            <MapContainer center={[42.697708, 23.321867]} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[42.697708, 23.321867]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {z}
            </MapContainer>
        </div>
    </div>


}
export default Map