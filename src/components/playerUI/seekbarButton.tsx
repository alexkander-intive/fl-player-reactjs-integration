import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function SeekBarButton({ onChange, duration, currentTime }: { onChange: (value: number) => void; duration: number; currentTime: number; }) {
    const theme = useTheme();
    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft.toFixed(2)}` : secondLeft.toFixed(2)}`;
    }

    return(
        <div>
            <Slider
            aria-label="time-indicator"
            size="small"
            value={currentTime}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => onChange(+value)}
            sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                height: 4,
                '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'
                    }`,
                },
                '&.Mui-active': {
                    width: 20,
                    height: 20,
                },
                },
                '& .MuiSlider-rail': {
                opacity: 0.28,
                },
            }}
            />
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: -2,
            }}
            >
            <TinyText>{formatDuration(currentTime)}</TinyText>
            <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
            </Box>

        </div>
    )
}
