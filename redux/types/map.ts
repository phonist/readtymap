import { Map } from './interface/map'

export const UPDATE_MAP = 'UPDATE_MAP';
export const UPDATE_MARKER = 'UPDATE_MARKER';
export const UPDATE_INFO_WINDOW = 'UPDATE_INFO_WINDOW';

//typescript: interface for redux's state
interface MapStateTypeAction {
    mapApiLoaded: boolean,
    mapInstance: any,
    mapApi: any,
    geoCoder: any,
    places: string[],
    center: string[],
    zoom: number,
    address: string,
    draggable: boolean,
    lat: any,
    lng: any,
    showingInfoWindow: boolean,
    activeMarker: any,
    selectedPlace: any
}

export type MapStateType = MapStateTypeAction

//typescript: interface for redux's action
interface UpdateMapActionType {
    type: typeof UPDATE_MAP;
    payload: Map
}

export type UpdateMapType = UpdateMapActionType

interface UpdateMarkerActionType {
    type: typeof UPDATE_MARKER;
    payload: Map
}

export type UpdateMarkerType = UpdateMarkerActionType

interface UpdateInfoWindowActionType {
    type: typeof UPDATE_INFO_WINDOW;
    payload: Map
}

export type UpdateInfoWindowType = UpdateInfoWindowActionType