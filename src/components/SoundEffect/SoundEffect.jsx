import React, { useEffect } from 'react';

export function playSound(audioRef) {
  if (audioRef) audioRef.play();
}

export function stopPlayingSound(audioRef) {
    if (audioRef) {
        audioRef.pause()
        audioRef.load()
    }
}

export function SoundEffect({ audioKey, src, volume, audioRef }) {
    const setVolume = () => {
        return (volume / 100) * 0.25;
    };

    const useLoadSound = () => {
        if (audioRef.current) audioRef.current.load();
    };
    
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = setVolume()
            audioRef.current.addEventListener('ended', useLoadSound);
        }
        return () => {
            if (audioRef.current) audioRef.current.removeEventListener('ended', useLoadSound);
        };
    }, [volume, audioRef]);

  return <audio key={audioKey} src={src} ref={audioRef} preload='auto' ></audio>;
}
