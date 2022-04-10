import { Map } from '../types/interface/Map';
import { 
    UpdateMapType, UpdateMarkerType, UpdateInfoWindowType, UPDATE_MAP, UPDATE_MARKER, UPDATE_INFO_WINDOW
} from '../types/map';

export const updateMap = (map: Map) : UpdateMapType => ({
    type: UPDATE_MAP,
    payload: map
});

export const updateMarker = (map: Map) : UpdateMarkerType => ({
    type: UPDATE_MARKER,
    payload: map
});

export const updateInfoWindow = (map: Map) : UpdateInfoWindowType => ({
    type: UPDATE_INFO_WINDOW,
    payload: map
});

