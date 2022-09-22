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
  const [time, setTime] = useState(0);

  const handlePlay = () => player.play();

  const handlePause = () => player.pause();

  const handleSeek = () => player.seek(time);

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
    }
  }, [playerBuilder]);

  return (
    <div>
      <p>
        <video ref={videoElementRef} controls width={1060} height={800}></video>
      </p>
      <p>Status: {status}</p>
      <p>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </p>
      <p>
        <input type="text" onChange={event => setTime(+event.target.value)}/>
        <button onClick={handleSeek}>Seek</button>
      </p>
    </div>
  );
}

export default FirstLightPlayer;
