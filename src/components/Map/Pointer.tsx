import React from 'react';
import { LocationOnRoundedIcon } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';

function Pointer(props: any) {
    return (
        <Tooltip title={props.text}>
            <IconButton >
              <LocationOnRoundedIcon />
            </IconButton>
        </Tooltip>
    )
}

export default Pointer;