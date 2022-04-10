import React, { useEffect } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { Paper, Typography } from '@mui/material';
import { AppState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { attemptMarkerClick, attemptSetMarker, attemptSetLocation } from '../../../redux/thunks/map';
import { Autocomplete } from './Autocomplete';  
import { LoadingContainer } from '../Loading';

const style = {
  width: '114.5vh',
  height: '80vh',
}

function GoogleMap (props:any) {
  const dispatch = useDispatch();
  const mapState = useSelector((state: AppState) => state.map);
  const ui = useSelector((state: AppState) => state.ui);
  
  useEffect(() => {
    if(!mapState.mapApiLoaded && !ui.listening && !ui.searching) {
      setCurrentLocation();
    }
  }, [mapState.mapApiLoaded]);

  const onMarkerClick = (props, marker, e) => {
    dispatch(attemptMarkerClick({mapState, props, marker, e}));
  }

  const onMapClick = (mapProps, map, clickEvent) => {
    dispatch(attemptSetLocation({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}));
    dispatch(attemptSetMarker({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}));
  }

  const setCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
          dispatch(attemptSetLocation({lat: position.coords.latitude, lng: position.coords.longitude}));
      });
    }
  }

  return (
      <>
        <Autocomplete />
        <Map
            item
            xs = { 12 }
            style = { style }
            google = { props.google }
            onClick = { onMapClick }
            zoom = { 14 }
            initialCenter = {{ lat: mapState.lat, lng: mapState.lng}}
            center = {{ lat: mapState.lat, lng: mapState.lng}}
          >
            <Marker
              onClick = { onMarkerClick }
              title = { mapState.address }
              position = {{ lat: mapState.lat, lng: mapState.lng }}
              name = { mapState.address }
            />
            <InfoWindow
              marker = { mapState.activeMarker }
              visible = { mapState.showingInfoWindow }
            >
              <Paper>
                <Typography
                  variant = 'headline'
                  component = 'h4'
                >
                  { mapState.address }
                </Typography>
              </Paper>
            </InfoWindow>
        </Map>      
      </>
    )
  ;
  
}
export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY_MAPS,
    LoadingContainer: LoadingContainer
})(GoogleMap)
