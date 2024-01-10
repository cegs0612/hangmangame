import React from 'react'
import './gameWinModal.css'
import { motion } from "framer-motion";

function GameWinModal({endGame, prepareNewGame, soundEffectFunctions, word}) {

  //handles audio events
  const playHover = ()=> soundEffectFunctions.playHover()

  return (
    <motion.div className='win-modal'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, type:'spring'}} 
    >
      <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:1, type:'spring', bounce:0.5, delay:0.5}}
      >
        <motion.h1 className='first'>YOU</motion.h1>
        <motion.h1 className='second'>WON</motion.h1>
        <motion.h2>Correct answer: {word}</motion.h2>
        <motion.button
            onClick={()=>prepareNewGame('new')}
            onHoverStart={()=>playHover()}
        >PLAY AGAIN</motion.button>
        <motion.button
            onClick={()=>endGame()}
            onHoverStart={()=>playHover()}
        >END GAME</motion.button>
      </motion.div>
    </motion.div>
  )
}

export default GameWinModal