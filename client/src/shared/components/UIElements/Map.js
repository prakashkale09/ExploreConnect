// src/Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Ensure you create a CSS file for basic styling if needed

const Map = ({ center, zoom }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map', {
      center: center,
      zoom: zoom,
    });

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker to the map
    L.marker(center).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, [center, zoom]);

  return <div id="map" className="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;
