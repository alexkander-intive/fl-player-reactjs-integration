import React, { useEffect, useRef, useState} from 'react';

import * as flPlayerInterface from './third-party/fl-player-es6/fl-player-interface.es';
import { createPlayerBuilder } from './third-party/fl-player-es6/fl-player.es';

type FlPlayerBuilderType = ReturnType<typeof createPlayerBuilder>;

const contentUrl = 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd';
const licenseUrl = 'https://cwip-shaka-proxy.appspot.com/no_auth';

const usePlayerBuilder = () => {
  const [playerBuilder, setPlayerBuilder] = useState<FlPlayerBuilderType | null>(null);

  useEffect(()=>{
    if (playerBuilder === null) {
      const newPlayerBuilder = createPlayerBuilder();
      setPlayerBuilder(newPlayerBuilder)
    }
  }, [playerBuilder]);

  return playerBuilder;
}

function FirstLightPlayer() {
  const playerBuilder = usePlayerBuilder();
  const videoElementRef = useRef(null);
  const [status, setStatus] = useState('');
  const [player, setPlayer] = useState<any>(null);
  // const [time, setTime] = useState(0);
  const [{currentTime, duration}, setTimeInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const seek = (time: number)=> {
    player.seek(time);
    setTimeInfo({
      currentTime: time,
      duration
    })
  };

  const handlePlay = () => player.play();

  const handlePause = () => player.pause();

  const handleTime = (time: number) => {
    seek(time);
  };

  const handleForward = () => {
    seek(Math.min(duration, currentTime+10));
  };

  const handleRewind = () => {
    seek(Math.max(0, currentTime-10));
  };

  useEffect(() => {
    if(playerBuilder) {

      const playerSetup = playerBuilder
        .mediaElement(videoElementRef.current)
        .mediaUrl(contentUrl)
        .drmLicenseUrl(licenseUrl)
        .drmScheme(flPlayerInterface.DrmScheme.WIDEVINE)
        .mediaType(flPlayerInterface.MediaType.DASH)
        .build();

      setPlayer(playerSetup);

      playerSetup.subscribe('playbackstatechanged', (state: string) => setStatus(state));

      playerSetup.subscribe('progressupdate', function () {
        console.log('progresseupdate', playerSetup);
        setTimeInfo({
          currentTime: playerSetup.currentTime,
          duration: playerSetup.duration,
        });
      });
    }
  }, [playerBuilder]);

  return (
    <div>
      <p>
        <video ref={videoElementRef} controls width={1060} height={800}></video>
      </p>
      <p>Status: {status}</p>
      <p>Current time: {currentTime}s</p>
      <p>Duration: {duration}s</p>
      <p>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleForward}>Fast Forward (+10 seconds)</button>
        <button onClick={handleRewind}>Rewind (-10 seconds)</button>
      </p>
      <p>
        <input value={currentTime} type="range" min={0} max={duration} onChange={event => handleTime(+event.target.value)} style={{width: '100%'}} />
      </p>
    </div>
  );
}

export default FirstLightPlayer;
