import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Example Map Component
const MapComponent = () => {
    const position = [20.5937, 78.9629];

    return (
        <MapContainer
            center={position}
            zoom={5}
            style={{ width: '100%', height: '100vh' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>Issue Location</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
