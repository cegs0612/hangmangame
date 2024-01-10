import React from 'react'
import './startBtn.css'
import { motion } from "framer-motion";

function StartBtn({startGame,soundEffectFunctions}) {

  //handles audio events
  const playHover = ()=> soundEffectFunctions.playHover()
   
  return (
    <motion.div 
      className="startBtn"
      key="startBtn"
      initial={{opacity:0, scale:0}}
      animate={{
          opacity:1,
          scale:1,
          transition:{type:'spring', duration:1, bounce:0}
      }}
      whileHover={{scale:1.1}}
      onClick={startGame}
      onHoverStart={()=>playHover()}
    > 
      <motion.h1
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{type:'spring',duration:0.5}, 
        }}
      >START</motion.h1>
    </motion.div>
  )
}

export default StartBtn