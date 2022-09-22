import * as React from 'react';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import IconButton from '@mui/material/IconButton';

export default function FastForwardButton() {
    return(
        <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" />
        </IconButton>
    )
}