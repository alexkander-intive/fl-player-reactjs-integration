import * as React from 'react';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import IconButton from '@mui/material/IconButton';

export default function RewindButton() {
    return(
        <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" />
        </IconButton>
    )
}