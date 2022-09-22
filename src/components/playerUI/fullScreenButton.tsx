import * as React from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IconButton from '@mui/material/IconButton';

export default function FullScreenButton() {
    return(
        <IconButton aria-label="previous song">
            <FullscreenIcon fontSize="large" />
        </IconButton>
    )
}