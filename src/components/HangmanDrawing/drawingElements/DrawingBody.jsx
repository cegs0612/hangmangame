import React from 'react'
import { motion } from "framer-motion";


function DrawingBody({svgWidth,svgHeight}) {
    const xInitial = svgWidth*0.5
    const yInital = svgHeight*0.345

    const drawing = (x,y)=>{
        return `M ${x} ${y} l ${-svgWidth*0.025} ${svgHeight*0.25}`
    }
  return (
    <motion.path
        d={drawing(xInitial,yInital)}
        fill={'transparent'}
        stroke={"#FF6347"}
        strokeWidth={6}
        initial={{pathLength:0}}
        animate={{pathLength:1}}
        transition={{duration:1}}
    />
  )
}

export default DrawingBody