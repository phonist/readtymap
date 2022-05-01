import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { attemptSearchLocation, attemptVoiceSearchLocation } from '../../../redux/thunks/map';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

function Autocomplete () {
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
      <AppBar position='static' elevation={0}>
        <Toolbar>
          <Search
            onClick={onSearchClick}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyDown={onKeyDown}
              placeholder='Enter a location'
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton onClick={onVoiceSearchClick} color="primary" aria-label="voice search" component="span">
              <MicIcon />
            </IconButton>
          </Search>

        </Toolbar>
      </AppBar>
    )
}

export default Autocomplete;
