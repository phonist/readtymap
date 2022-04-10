import { Dispatch } from 'redux'
import { updateMap, updateMarker, updateInfoWindow } from '../actions/map'
import { addListening, removeListening, addSearching, removeSearching } from '../actions/ui'
import { UpdateMapType } from '../types/map'
import Geocode from 'react-geocode';
import { speech2Text } from '../../pages/api/deepgram';

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY_MAPS);

export const attemptMarkerClick = (params) => async (dispatch : Dispatch<UpdateMapType>) => {
    Geocode.fromLatLng(params.mapState.lat, params.mapState.lng).then(
        (response) => {
            const address = response.results[0].formatted_address;
            dispatch(updateMap({
                showingInfoWindow: true,
                activeMarker: params.marker,
                selectedPlace: params.props,
                lat: params.mapState.lat,
                lng: params.mapState.lng,
                address: address,
                zoom: 12
            }));
        },
        (error) => {
            // window.alert(error);
        }
    );

}

export const attemptSetMarker = (params) => async (dispatch : Dispatch<UpdateMapType>) => {
    dispatch(updateMap({
        showingInfoWindow: false,   
        lat: params.lat,
        lng: params.lng
    }));
}   

export const attemptSetLocation = (params:any) => async (dispatch : Dispatch<UpdateMapType>) => {
    dispatch(updateMap({lat: params.lat, lng: params.lng}));
    dispatch(updateMarker({lat: params.lat, lng: params.lng}));
}

export const attemptSearchLocation = (params:any) => async (dispatch : Dispatch<UpdateMapType>) => {
    Geocode.fromAddress(params).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;

            dispatch(updateMap({
                showingInfoWindow: false,
                lat: lat,
                lng: lng,
                address: params.address,
                zoom: 12
            }));
        },
        (error) => {
            // window.alert(error);
        }
    );
}

export const attemptVoiceSearchLocation = () => async (dispatch : Dispatch<UpdateMapType>) => {
    dispatch(addListening());
    speech2Text().then(async (transcript) => {
        dispatch(removeListening());
        dispatch(addSearching());
        Geocode.fromAddress(transcript).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;

                dispatch(updateMap({
                    showingInfoWindow: false,
                    lat: lat,
                    lng: lng,
                    address: transcript,
                    zoom: 12
                }));
                dispatch(removeSearching());
            },
            (error) => {
                // window.alert(error);
            }
        );
    });
}