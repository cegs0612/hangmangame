import React, {useState} from 'react'
import './gameLostModal.css'
import { motion } from "framer-motion";

function GameLostModal({endGame, prepareNewGame, word, soundEffectFunctions}) {
    const [isWordShowing, setIsWordShowing] = useState(false)

    const handleNewGame = () => prepareNewGame('new')
    const handleRetry = () => prepareNewGame('retry')
    const handleEndGame = () => endGame()

    //handles audio events
    const playHover = () => soundEffectFunctions.playHover()
    
  return (
    <motion.div className='lost-modal'>
        <motion.div>
            <motion.h1 className='first'>YOU</motion.h1>
            <motion.h1 className='second'>LOST</motion.h1>
            {isWordShowing?
                <motion.h2>{word}</motion.h2>  
                :<motion.button
                    onClick={()=>{setIsWordShowing(true)}}
                    onHoverStart={()=>playHover()}
                >SEE ANSWER</motion.button>
            }
            {isWordShowing?
                <motion.button
                    onClick={()=>handleNewGame()}
                    onHoverStart={()=>playHover()}
                >NEW GAME</motion.button>
                :<motion.button
                    onClick={()=>handleRetry()}
                    onHoverStart={()=>playHover()}
                >RETRY</motion.button>
            }
            <motion.button
                onClick={()=>handleEndGame()}
                onHoverStart={()=>playHover()}
            >END GAME</motion.button> 
        </motion.div>  
    </motion.div>
  )
}

export default GameLostModal