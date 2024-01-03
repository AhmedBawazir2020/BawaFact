"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './style.css';


export default function Map() {

  

  const mapRef = React.useRef(null);

  useEffect(() => {
    const iniMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");
      //init marker
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 24.536572,
        lng: 46.71963,
        
      };

      // map options center
      const mapOptions = {
        center: position,
        zoom: 15,
        // mapTypeId:"satellite",
        mapId: "Bawazir Factory",
      };
      // setup the map
      const map = new Map(mapRef.current, mapOptions);

      // put  marker
      const marker = new Marker({
        map: map,
        position: position,
        title: "Uluru (Ayers Rock)",
      });

      // html for the info window
      const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading, font-bold">your location </h1>' +
        '<div id="bodyContent">' +
        "<p><b>Bawair</b>, " +
        "Heritage Site.</p>" +
        "</div>" +
        "</div>";
      // init info window
      const infoWindow = new google.maps.InfoWindow({
        map: map,
        content: contentString,
        // ariaLabel: "bawazir facroey",
      });

      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map: map,
        });
      });
    };
    iniMap();
  }, []);

  return (
    <>
      <div id="horizontal" class="map" ref={mapRef} />
    </>
  );
}
