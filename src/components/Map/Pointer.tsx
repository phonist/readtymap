import React from 'react';
import { LocationOnRoundedIcon } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';

export function Pointer(props: any) {
    return (
        <Tooltip title={props.text}>
            <IconButton >
              <LocationOnRoundedIcon />
            </IconButton>
        </Tooltip>
    )
}