import React, {useRef, useState, useEffect} from 'react'

function Music({volume}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const audioRef = useRef(new Audio());

    const songSrc = [
        '/hangmangame/music/track1.mp3',
        '/hangmangame/music/track2.mp3',
        '/hangmangame/music/track3.mp3',
    ];

    const setVolume = () => volume / 100;

    const handleEnded = () => {
        // Avanza al siguiente índice, reinicia si llega al final
        setCurrentIndex((prevIndex) => prevIndex===2? 0 : prevIndex+1)
    };

    const handleUserFirstInteraction = () => {
        const audio = audioRef.current;
        if(audio.paused) {
            audio.src = songSrc[currentIndex];
            audio.play();
            document.removeEventListener('click',handleUserFirstInteraction)
        }
    }

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = setVolume();
    }, [volume])
    

    useEffect(() => {
      document.addEventListener('click',handleUserFirstInteraction)
    
      return () => {
        document.removeEventListener('click',handleUserFirstInteraction)
      }
    }, [])
    

    useEffect(() => {
        const audio = audioRef.current;

        audio.src = songSrc[currentIndex];
        audio.addEventListener('ended', handleEnded);
        audio.play();
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };

    }, [currentIndex]);
    
  return (
    <React.Fragment> </React.Fragment>
  )
}

export default Music