import { Backdrop, CircularProgress, Typography } from '@mui/material';

export const Searching = (props) => (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Typography variant="h4" component="h1" gutterBottom>
            Searching...
        </Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
);