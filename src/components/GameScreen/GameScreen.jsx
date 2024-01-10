import React from 'react'
import "./gameScreen.css"
import { motion } from "framer-motion";
import GameTimer from "../GameTimer/GameTimer";
import GameAttempts from "../GameAttempts/GameAttempts";
import HangmanDrawing from "../HangmanDrawing/HangmanDrawing";


function GameScreen({initialTime, currentAttempt, finishGame, isGameOn}) {
  
  return (
    <motion.div className='game-screen'>
      <motion.div className='parameters-div'>
        <motion.div className='timer-div'>
          <GameTimer isGameOn={isGameOn} initialTime={initialTime} finishGame={finishGame}/>
        </motion.div >
        <motion.div className='attempts-div'>
          <GameAttempts finishGame={finishGame} currentAttempt={currentAttempt} />
        </motion.div>
      </motion.div>
      <React.Fragment>
        <HangmanDrawing currentAttempt={currentAttempt}/>
      </React.Fragment>
    </motion.div>
  )
}

export default GameScreen