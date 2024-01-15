import './App.css'
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowDimentions from "./hooks/useWindowDimentions";
import useDeviceOrientation from "./hooks/useDeviceOrientation";
import PlayBtn from "./components/PlayBtn/PlayBtn";
import SettingsBtn from "./components/SettingsBtn/SettingsBtn";
import Game from "./components/Game/Game";
import Credits from "./components/Credits/Credits";
import getEnglishWord from "./hooks/useGetWord";
import { playSound, stopPlayingSound, SoundEffect } from "./components/SoundEffect/SoundEffect";
import Music from "./components/Music/Music";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isGameOpen, setIsGameOpen] = useState(false)
  const [isCreditsOpen, setIsCreditsOpen] = useState(false)
  const [musicVolume, setMusicVolume] = useState(50)
  const [effectsVolume, setEffectsVolume] = useState(50)
  const [gameDifficulty, setGameDifficulty] = useState("medium")
  const [word, setWord] = useState(undefined)
  const windowDimentions = useWindowDimentions();
  const deviceOrientation = useDeviceOrientation();
  
  //audio sounds ref
  const audioClick = useRef(null);
  const audioHover = useRef(null);
  const audioCorrect = useRef(null);
  const audioIncorrect = useRef(null);
  const audioLostGame = useRef(null);
  const audioWonGame = useRef(null);
  const audioSettings = useRef(null);

  const determineAnimation = ()=>{
    let animationString = ""
    if (isSettingsOpen) {
      deviceOrientation === "portrait"? animationString = "settingsOpenPortrait" : animationString = "settingsOpenLandscape"
    } else {
      animationString = "settingsClosed"
    }
    return animationString
  }
  
  const updateWord = async()=>{
    getEnglishWord()
    .then((word)=>setWord(word))
  }

  const endGame = ()=>{
    setIsGameOpen(false)
    setWord(undefined)
  }

  const openCredits = () => setIsCreditsOpen(true);
  const closeCredits = () => setIsCreditsOpen(false);

  //handles the sound

  const playClick = () => playSound(audioClick.current);
  const playHover = () => playSound(audioHover.current);
  const playCorrect = () => playSound(audioCorrect.current);
  const playIncorrect = () => playSound(audioIncorrect.current);
  const playLostGame = () => playSound(audioLostGame.current);
  const playWonGame = () => playSound(audioWonGame.current);
  const playSettings = () => playSound(audioSettings.current);
  const stopPlayingSettings = () => stopPlayingSound(audioSettings.current);
  
  const soundEffectFunctions = {playClick, playHover, playCorrect, playIncorrect, playLostGame, playWonGame, playSettings, stopPlayingSettings}

  useEffect(() => {
    playClick()
  }, [isGameOpen, isSettingsOpen, isCreditsOpen])
  
  return (
    <motion.div>
      {effectsVolume!==0 && <React.Fragment>
        <SoundEffect audioKey={'sound1'} src='/sound/buttonClick.mp3' audioRef={audioClick} volume={effectsVolume}  />
        <SoundEffect audioKey={'sound2'} src='/sound/clickHover.mp3' audioRef={audioHover} volume={effectsVolume}  />
        <SoundEffect audioKey={'sound3'} src='/sound/correctChoice.mp3' audioRef={audioCorrect} volume={effectsVolume}  />
        <SoundEffect audioKey={'sound4'} src='/sound/incorrectChoice.mp3' audioRef={audioIncorrect} volume={effectsVolume}  />
        <SoundEffect audioKey={'sound5'} src='/sound/lostGame.mp3' audioRef={audioLostGame} volume={effectsVolume}  />
        <SoundEffect audioKey={'sound6'} src='/sound/wonGame.mp3' audioRef={audioWonGame} volume={effectsVolume}  />
        <SoundEffect audioKey={'sound7'} src='/sound/settingsHover.mp3' audioRef={audioSettings} volume={effectsVolume}  />
      </React.Fragment>}

      {musicVolume!==0 && <Music volume={musicVolume} />}

      {(!isGameOpen && !isCreditsOpen) && <motion.div
        className = "app"  
        variants={{
          settingsClosed: {
            rowGap: "5vh",
            transition:{type:'spring', duration:1, bounce:0}
          },
          settingsOpenPortrait: {
            rowGap:"2vh",
            transition:{type:'spring', duration:1.5, bounce:0}
          },
          settingsOpenLandscape: {
            flexWrap: "wrap",
            rowGap:"5vh",
            transition:{type: 'spring', duration:0.5 , bounce:0}
          }
        }}
        animate={determineAnimation}
      >
      <AnimatePresence>
        <motion.img 
          src="/hangmangame/img/logo.svg" 
          alt="" 
          className="logo"
          key="logo"
          variants={{
            settingsClosed:{
              opacity:1,
              transition:{type:'spring', duration:1.5, bounce:0}
            },
            settingsOpenPortrait:{
              opacity:1,
              height: "20vh",
              width: "auto",
              transition: {type:'spring', duration:0.7, bounce:0}
            },
            settingsOpenLandscape:{
              opacity:1,
              height: "20vw",
              width: "auto",
              transition: {type:'spring', duration:0.7, bounce:0}
            }
          }}
          initial={{opacity:0}}
          animate= {determineAnimation}
          exit={{opacity:0, transition:{type:'spring', bounce:0, duration:1.5}}}
          whileHover={{
            rotate:[0,1.5,0,-1.5,0],
            scale:[1,1.05,1,0.95,1],
            transition:{duration:1.5, repeat:Infinity}
          }}
          layout
        />
        <PlayBtn 
          isSettingsOpen={isSettingsOpen} 
          setIsSettingsOpen={setIsSettingsOpen}
          setIsGameOpen={setIsGameOpen} 
          key={"playBtn"}
          updateWord={updateWord}
          soundEffectFunctions={soundEffectFunctions}
        />
        <SettingsBtn 
          isSettingsOpen={isSettingsOpen} 
          setIsSettingsOpen={setIsSettingsOpen}
          windowDimentions={windowDimentions}
          deviceOrientation={deviceOrientation}
          setMusicVolume={setMusicVolume}
          setEffectsVolume={setEffectsVolume}
          setGameDifficulty={setGameDifficulty}
          gameDifficulty={gameDifficulty}
          musicVolume={musicVolume}
          effectsVolume={effectsVolume}
          key={"settingsBtn"}
          soundEffectFunctions={soundEffectFunctions}
        />
        <motion.button 
          className='credits-btn' 
          onClick={()=>openCredits()}
          variants={{
            settingsClosed: {
              opacity: 1,
              transition:{type:'spring', duration:1, bounce:0}
            },
            settingsOpenPortrait: {
              opacity:0,
              scale:0,
              transition:{type:'spring', duration:1.5, bounce:0}
            },
            settingsOpenLandscape: {
              opacity:1,
              transition:{type: 'spring', duration:0.5 , bounce:0}
            }
          }}
          animate={determineAnimation}
        >Credits</motion.button>
      </AnimatePresence>  
      </motion.div>}  
      {isGameOpen && <Game
        setEffectsVolume={setEffectsVolume}
        setMusicVolume={setMusicVolume}
        gameDifficulty={gameDifficulty}
        musicVolume={musicVolume}
        effectsVolume={effectsVolume}
        word={word}
        setWord={setWord}
        updateWord={updateWord}
        endGame={endGame}
        soundEffectFunctions={soundEffectFunctions}
      />}

      {isCreditsOpen && <Credits closeCredits={closeCredits} soundEffectFunctions={soundEffectFunctions}/>}
    </motion.div>
  )
}

export default App
