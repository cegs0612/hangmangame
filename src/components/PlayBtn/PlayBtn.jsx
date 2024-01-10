import "./playBtn.css";
import React from 'react'
import { motion } from "framer-motion";


function PlayBtn({isSettingsOpen, setIsGameOpen, setIsSettingsOpen, updateWord, soundEffectFunctions}) {
  

  //handles audio events
  const playHover = () => soundEffectFunctions.playHover()

  return (
    <motion.div 
      className="playBtn"
      key="playBtn"
      variants= {{
        settingsClosed:{
          opacity:1,
          scale:1,
          transition:{type:'spring', duration:1.5, bounce:0}
        },
        settingsOpen:{
          opacity:1,
          scale:0.8,
          transition: {type:'spring', duration:0.7, bounce:0}
        },
      }}
      initial={{opacity:0}}
      animate={isSettingsOpen? "settingsOpen":"settingsClosed"}
      exit={{opacity:0, transition:{type:'spring', bounce:0, duration:1}}}
      onClick={()=>{
        setIsGameOpen(true)
        setIsSettingsOpen(false)
        updateWord()
      }}
      onHoverStart={()=>playHover()}
    >
      <motion.h1
        variants={{
          open:{
            opacity:1,
            transition:{type:'spring',duration:0.5},
          },
          close:{
              opacity:0,
              transition:{type:'spring', duration:0.6}
          }
        }}
        initial={{opacity:0}}
        animate={"open"}
        exit={"close"}
      >PLAY</motion.h1>
    </motion.div>
  )
}

export default PlayBtn