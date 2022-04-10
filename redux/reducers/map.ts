import { UPDATE_MAP, UPDATE_MARKER, MapStateType, UpdateMapType, UpdateMarkerType, UpdateInfoWindowType, UPDATE_INFO_WINDOW } from "../types/map";


const initialState: MapStateType = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    geoCoder: null,
    places: [],
    center: [],
    zoom: 9,
    address: '',
    draggable: true,
    lat: null,
    lng: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
}

export const mapReducer = (
    state = initialState, 
    action: UpdateMapType | UpdateMarkerType | UpdateInfoWindowType
): MapStateType => {
    switch (action.type) {
        case UPDATE_MAP:
            return {
                ...state,
                showingInfoWindow : action.payload.showingInfoWindow,
                activeMarker : action.payload.activeMarker,
                selectedPlace : action.payload.selectedPlace,
                lat : action.payload.lat,
                lng : action.payload.lng,
                address : action.payload.address,
                zoom : action.payload.zoom,
                mapApiLoaded: true
            }
        case UPDATE_MARKER:
            return {
                ...state,
                lat : action.payload.lat,
                lng : action.payload.lng
            }
        case UPDATE_INFO_WINDOW:
            return {
                ...state,
                showingInfoWindow : action.payload.showingInfoWindow,
                activeMarker : action.payload.activeMarker,
                selectedPlace : action.payload.selectedPlace
            }
        default:
            return state;
    }
}
