//typescript: interface for payload
export interface Map {
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