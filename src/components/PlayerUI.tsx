import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SeekBarButton from './playerUI/seekbarButton';
import RewindButton from './playerUI/rewindButton';
import PlayPauseButton from './playerUI/playPauseButton';
import FastForwardButton from './playerUI/fastforwardButton';
import VolumeButton from './playerUI/volumeButton';
import FullScreenButton from './playerUI/fullScreenButton';

export default function PlayerUI() {
  return (
    <Box sx={{ width: 'auto', overflow: 'hidden', height: 'auto', 
               margin: '3%', padding: '3%', zIndex: '-1',
               background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(204,204,204,1) 100%)' }}>
      <SeekBarButton />
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <RewindButton />
        <PlayPauseButton />
        <FastForwardButton />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Box sx={{ width: '200px' }}>
          <VolumeButton />
        </Box>
        <FullScreenButton />
      </Box>
    </Box>
  );
}