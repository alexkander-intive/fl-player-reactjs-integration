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

  useEffect(()=>{
    if(playerBuilder) {

      const player = playerBuilder
        .mediaElement(videoElementRef.current)
        .mediaUrl(contentUrl)
        .drmLicenseUrl(licenseUrl)
        .drmScheme(flPlayerInterface.DrmScheme.WIDEVINE)
        .mediaType(flPlayerInterface.MediaType.DASH)
        .build();

      player.play();
    }
  }, [playerBuilder]);

  return (
    <div>
      <p>
        <video ref={videoElementRef} controls width={1060} height={800}></video>
      </p>
    </div>
  );
}

export default FirstLightPlayer;
