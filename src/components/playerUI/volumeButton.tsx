import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

export default function VolumeButton({ onChange }: { onChange: (value: number) => void }) {
  const [value, setValue] = React.useState<number>(30);
  const theme = useTheme();
  const handleChange = (event: Event, newValue: number | number[]) => {
      console.log(newValue);
    setValue(newValue as number);
    onChange(newValue as number);
  };
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
        <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
            onChange={handleChange}
          />
        <VolumeUpRounded htmlColor={lightIconColor} />
    </Stack>
  );
}
