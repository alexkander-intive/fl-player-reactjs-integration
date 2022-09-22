import * as React from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IconButton from '@mui/material/IconButton';

export default function FullScreenButton({ onClick } : { onClick: () => void; }) {
    return(
        <IconButton aria-label="previous song" onClick={onClick}>
            <FullscreenIcon fontSize="large" />
        </IconButton>
    )
}
