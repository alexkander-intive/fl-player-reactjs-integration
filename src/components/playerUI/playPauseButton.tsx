import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';

export default function PlayPauseButton({ play, pause }: { play: () => void; pause: () => void; }) {
    const [paused, setPaused] = React.useState(true);
    const handlePlay = () => {
        if (paused) {
            play();
        } else {
            pause();
        }

        setPaused(!paused);
    }

    return (
        <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={handlePlay}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} />
            )}
          </IconButton>
)}
