import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css'

const Map = () => {


    return <div >
        <h1>The map</h1>
        <div id="mapid">
            <MapContainer center={[42.697708, 23.321867]} zoom={23} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    </div>


}
export default Map