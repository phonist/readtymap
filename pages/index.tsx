import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Map from './Map';
import { CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import NavigationBar from '../src/components/Map/NavigationBar';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ body: { margin: 0 }, ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <NavigationBar />
      <Grid container spacing={0} direction={"row"}>
        <Grid item xs={12} lg={12} xl={12} style={{position: 'relative', height: '93.5vh'}}>
          <Map />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
