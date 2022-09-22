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
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const fullscreenDivRef = useRef<HTMLDivElement>(null);

  const [tracks, setTracks] = useState<any>({text: [], audio:[]});
  const [status, setStatus] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [velocity, setVelocity] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  const adjustVolume = (volumePercent: number)=>{
    setVolume(volumePercent);
    if(videoElementRef.current){
      videoElementRef.current.volume = volumePercent / 100;
    }
  };

  const adjustVelocity = (newVelocity: number) => () =>{
    setVelocity(newVelocity);
    player.playbackRate = newVelocity;
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

  const handleFullscreen  = (fullscreen: boolean) => () => {
    setIsFullscreen(fullscreen);
    if(fullscreenDivRef.current){
      if(fullscreen) {
        fullscreenDivRef.current.requestFullscreen();
      } else {
        (window as any).divfs = fullscreenDivRef.current;
        document.exitFullscreen();
      }
    }
  };

  const handleChangeTrack = (type: string) => (event: any)=>{
    const track = tracks[type][event.target.value]
    player.selectTrack(track);
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
        setTimeInfo({
          currentTime: playerSetup.currentTime,
          duration: playerSetup.duration,
        });
      });
    }
  }, [playerBuilder]);

  useEffect(()=>{
    if(player){
      if(status === 'started'){
        const availableTracks = player.getAllTracks();
        const groupedTracks = availableTracks.reduce((acc: any, item: any)=>({
          ...acc,
          [item.type]: [...acc[item.type], item]
        }), {
          audio: [],
          text: [],
        })
        setTracks(groupedTracks);
        console.log(groupedTracks);
      }
    }
  }, [status, player]);

  return (
    <div ref={fullscreenDivRef}>
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
        Velocity:
        <button onClick={adjustVelocity(0.25)}>0.25</button>
        <button onClick={adjustVelocity(0.5)}>0.5</button>
        <button onClick={adjustVelocity(1)}>1</button>
        <button onClick={adjustVelocity(1.25)}>1.25</button>
        <button onClick={adjustVelocity(1.5)}>1.5</button>
        <button onClick={adjustVelocity(2.0)}>2.0</button>
      </p>
      <p>
        <button onClick={handleFullscreen(!isFullscreen)}>
          {isFullscreen? 'Desactivate fullscreen' : 'Activate fullscreen'}
        </button>
      </p>
      <p>
        Volumen: <input value={volume} type="range" min={0} max={100} onChange={event => adjustVolume(+event.target.value)} />
      </p>
      <p>
        Seekbar: <input value={currentTime} type="range" min={0} max={duration} onChange={event => handleTime(+event.target.value)} style={{width: '100%'}} />
      </p>
      <p>
        Audio:
        <select onChange={handleChangeTrack('audio')}>
          {tracks.audio.map((track: any, idx: number)=>(
            <option key={`audio-opt-${idx}`} value={idx}>{track.language}</option>
          ))}
        </select>
      </p>
      <p>
        Subtitles:
        <select onChange={handleChangeTrack('text')}>
          {tracks.text.map((track: any, idx: number)=>(
            <option key={`texts-opt-${idx}`} value={idx}>{track.language}</option>
          ))}
        </select>
      </p>
    </div>
  );
}

export default FirstLightPlayer;
