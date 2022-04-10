import { Backdrop, CircularProgress, Typography } from '@mui/material';

function LoadingContainer (props) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Typography variant="h4" component="h1" gutterBottom>
            Loading...
        </Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default LoadingContainer;