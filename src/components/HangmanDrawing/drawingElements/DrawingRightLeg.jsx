import React from 'react'
import { motion } from "framer-motion";


function DrawingRightLeg({svgWidth,svgHeight}) {
    const xInitial = svgWidth*0.48
    const yInital = svgHeight*0.595
    const drawing = (x,y)=>{
        return `M ${x} ${y} 
                l ${svgWidth*0.035} ${svgHeight*0.075}
                l ${-svgWidth*0.012} ${svgHeight*0.14}
                l ${svgWidth*0.012} ${svgHeight*0.012}`
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

export default DrawingRightLeg