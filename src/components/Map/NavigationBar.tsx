import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import AutocompleteGoogleMap from './AutocompleteGoogleMap';
import { attemptSearchLocation, attemptVoiceSearchLocation } from '../../../redux/thunks/map';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';

function NavigationBar () {
    const dispatch = useDispatch();
    const mapState = useSelector((state: AppState) => state.map);

    const onSearchClick = (e) => {
      e.preventDefault();
      mapState.address = e.target.value;
      dispatch(attemptSearchLocation(mapState.address));
    }
  
    const onKeyDown = (e) => {
      if (e.key === 'Enter') {
        dispatch(attemptSearchLocation(mapState.address));
      }
      mapState.address = e.target.value;
      return e.key;
    }

    const onVoiceSearchClick = (e) => {
      e.preventDefault();
      dispatch(attemptVoiceSearchLocation());
    }

    return (
      <AppBar position='static'>
        <Toolbar>
          <AutocompleteGoogleMap />
          <IconButton size='large' onClick={onVoiceSearchClick} color="inherit" aria-label="voice search" component="span">
            <MicIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}

export default NavigationBar;
