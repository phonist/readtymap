import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from '../src/components/Map/GoogleMap';
import LoadingContainer from '../src/components/Loading';
import Searching from '../src/components/Searching';
import Listening from '../src/components/Listening';
import { AppState } from '../redux/store';

function Map () {
    const ui = useSelector((state: AppState) => state.ui);
    useEffect(() => {
    },[ui]);
    return (
        <>
            <div style={{ height: '100vh', width: '100%' }}>
                {ui.loading && <LoadingContainer />}
                {ui.searching && <Searching />}
                {ui.listening && <Listening />}
                {!ui.loading && !ui.searching && !ui.listening && <GoogleMap />}
            </div>
        </>
    )
}

export default Map;