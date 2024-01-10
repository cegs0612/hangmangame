import React from 'react'
import { motion } from "framer-motion";

function DrawingRightArm({svgWidth,svgHeight}) {
    const xInitial = svgWidth*0.5
    const yInital = svgHeight*0.4
    const drawing = (x,y)=>{
        return `M ${x} ${y} 
                l ${svgWidth*0.02} ${svgHeight*0.07}
                l ${svgWidth*0.01} ${ svgHeight*0.15}`
    }
  
  return (
    <motion.path
        d={drawing(xInitial,yInital)}
        fill={'transparent'}
        stroke={"#FF6347"}
        strokeWidth={4}
        initial={{pathLength:0}}
        animate={{pathLength:1}}
        transition={{duration:1}}
    />
  )
}

export default DrawingRightArm