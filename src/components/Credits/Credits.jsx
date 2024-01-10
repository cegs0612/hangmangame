import React from 'react'
import { motion } from "framer-motion";
import './credits.css'

function Credits({closeCredits, soundEffectFunctions}) {

    const playHover = () => soundEffectFunctions.playHover()

  return (
    <motion.div
        className='credits-div'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5, type:'spring', bounce:0}}
    >
        <div className='credits-container'>
            <motion.h1>CREDITS</motion.h1>
            <motion.h2>Game Development:</motion.h2>
            <motion.p>Developed by <span><a href="http://www.linkedin.com/in/carlos-eduardo-gutiérrez-sánchez-6028a97b" target='_blank'>Carlos Eduardo Gutiérrez Sánchez</a></span></motion.p>
            <motion.h2>Music Composition:</motion.h2>
            <motion.p>Music composed by Miguel Andrés Gutiérrez Sánchez</motion.p>
            <ul>
                <motion.li>Track 1: Ciudad de Cristal</motion.li>
                <motion.li>Track 2: Flujo</motion.li>
                <motion.li>Track 3: Paisajes de Noruega</motion.li>
            </ul>
            <motion.h2>Sound Effects:</motion.h2>
            <motion.p>Sound effects provided by <span><a href="http://www.zapsplat.com" target='_blank'>Zapsplat.com</a></span></motion.p>
        </div>
        
        <motion.button onClick={()=>closeCredits()} onHoverStart={()=>playHover()}>BACK</motion.button>

    </motion.div>
  )
}

export default Credits

