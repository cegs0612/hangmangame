import React from 'react'
import { motion } from "framer-motion";


function DrawingLeftLeg({svgWidth,svgHeight}) {
    const xInitial = svgWidth*0.47
    const yInital = svgHeight*0.595
    const drawing = (x,y)=>{
        return `M ${x} ${y} 
                l ${-svgWidth*0.04} ${svgHeight*0.08}
                l ${svgWidth*0.01} ${svgHeight*0.12}
                l ${-svgWidth*0.012} ${svgHeight*0.012}`
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

export default DrawingLeftLeg