import React from 'react'
import { motion } from "framer-motion";

function DrawingLeftArm({svgWidth,svgHeight}) {
    const xInitial = svgWidth*0.49
    const yInital = svgHeight*0.41
    const drawing = (x,y)=>{
        return `M ${x} ${y} 
                l ${-svgWidth*0.045} ${svgHeight*0.075}
                l ${svgWidth*0.01} ${ svgHeight*0.12}`
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

export default DrawingLeftArm