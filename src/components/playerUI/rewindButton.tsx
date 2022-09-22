import * as React from 'react';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import IconButton from '@mui/material/IconButton';

export default function RewindButton({ onClick }: { onClick: () => void }) {
    return(
        <IconButton aria-label="previous song" onClick={onClick}>
            <FastRewindRounded fontSize="large" />
        </IconButton>
    )
}
