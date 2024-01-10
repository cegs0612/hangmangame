import React from 'react'
import './spinner.css'
import { motion } from "framer-motion";
import StartBtn from "../StartBtn/StartBtn";


function Spinner({word, startGame, soundEffectFunctions}) {
  
  return (
    <motion.div className='spinner-modal'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{type:'spring', duration:0.5}}
    >
        <motion.div
            className={`container-div ${word===undefined&&'undefined'}`}
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:1, type:'spring', bounce:0.5, delay:0.5}}
        >
            {word===undefined? 
                <React.Fragment>
                    <motion.div className='red-square'
                        animate={{
                            rotate:[0, 45, 90, 135, 180],
                            transition:{
                                type:'spring', 
                                repeat:Infinity, 
                                repeatDelay:0.01, 
                                duration:5,
                            }
                        }}
                    ></motion.div>
                    <motion.div className='black-square'
                        animate={{
                            rotate:[0, -45, -90, -135, -180],
                            transition:{
                                type:'spring', 
                                repeat:Infinity,
                                duration:3,
                                repeatDelay:0.02,
                            }
                        }}
                    ></motion.div>    
                </React.Fragment> 
                :
                <StartBtn startGame={startGame} soundEffectFunctions={soundEffectFunctions}/>
            }
        </motion.div>  
    </motion.div>
  )
}

export default Spinner