import React from 'react'
import './gameWordDisplay.css'
import {motion} from "framer-motion"



function GameWordDisplay({wordArray}) {
  return (
    <motion.div
        className='game-word-display'
    >
        {wordArray.map((element,index)=>{
            return (
                <motion.div className='letter-div'
                    key={`letterdiv-${index}`}
                    initial={{scale:0}}
                    animate={{scale:1}}
                    transition={{duration:0.8, type:'spring', bounce:0}}
                >
                    <motion.h2
                        initial={{opacity:0}}
                        animate={element.discovered? {opacity:1} : ''}
                    >
                        {element.letter}
                    </motion.h2>
                </motion.div>
            )
        })}
    </motion.div>
  )
}

export default GameWordDisplay