import * as React from 'react';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import IconButton from '@mui/material/IconButton';

export default function FastForwardButton({ onClick }: { onClick: () => void }) {
    return(
        <IconButton aria-label="next song" onClick={onClick}>
            <FastForwardRounded fontSize="large" />
        </IconButton>
    )
}
