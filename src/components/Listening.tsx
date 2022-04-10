import { Typography, Backdrop, CircularProgress } from '@mui/material';

export const Listening = (props) => (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Typography variant="h4" component="h1" gutterBottom>
            Listening...
        </Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
);