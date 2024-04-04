import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, Marker, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from '../../../context/SourceContext';
import { DestinationContext } from '../../../context/DestinationContext';
import './googleMapSection.css'

function GoogleMapSection() {
  const containerStyle = {
    width: '100%',
    height: window.innerWidth * 0.35
  };

  const [center, setCenter] = useState({
    lat: 10.022,
    lng: -83.944,
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);

  useEffect(() => {
    if (source && typeof source.lat === 'number' && !isNaN(source.lat) &&
        source.lng && typeof source.lng === 'number' && !isNaN(source.lng)) {
          map.panTo({
            lat: source.lat,
            lng: source.lng
          })
      setCenter({
        lat: source.lat,
        lng: source.lng
      });
      console.log(source.label())
    }
  }, [source]);

  useEffect(() => {
    if (destination && typeof destination.lat === 'number' && !isNaN(destination.lat) &&
        destination.lng && typeof destination.lng === 'number' && !isNaN(destination.lng)) {
          map.panTo({
            lat: destination.lat,
            lng: destination.lng
          })
      setCenter({
        lat: destination.lat,
        lng: destination.lng
      });
    }
  }, [source,destination]);

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11} 
      onLoad={map=>setMap(map)}
      onUnmount={onUnmount}
      options={{ mapId: 'b72abe131813fa3c' }}
    >
      {source && source.lat ? (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
        >
          <OverlayViewF
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className='sourceLabelBox'>
              <p className='sourceLabel'>{source.name}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      ) : null}
      {destination && destination.lat ? (
        <MarkerF
          position={{ lat: destination.lat, lng: destination.lng }}
        >
          <OverlayView
          position={{lat:destination.lat, lng:destination.lng}}
          icon={{
            url:'/paquete.png',
            scaledSize:{
              width:20,
              height:20
            }
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className='sourceLabelContainer'>
                <div className='sourceLabelBox'>
                    <p className='sourceLabel'>{destination.label}</p>
                </div>
            </div>
          </OverlayView>
        </MarkerF>
      ) : null}
      <></>
    </GoogleMap>
  ) : <></>;
}

export default GoogleMapSection;
