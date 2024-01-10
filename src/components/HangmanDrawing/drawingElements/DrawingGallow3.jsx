import React from 'react'
import { motion } from "framer-motion";


function DrawingGallow3({svgWidth,svgHeight}) {
    const xInitial = svgWidth/2
    const yInital = svgWidth*0.075/2
    
    const drawing = (x,y) => {
        return(`M ${x} ${y} s ${x/25} ${svgHeight*0.15} ${0} ${svgHeight*0.15} s ${-x/25} ${svgHeight*0.1} ${0} ${svgHeight*0.15}`)
    }
  
  return (
    <motion.path 
        d={drawing(xInitial,yInital)}
        stroke={"#333333"}
        strokeWidth={4}
        fill={"none"}
        initial={{pathLength:0}}
        animate={{pathLength:1}}
        transition={{duration:1}}
    />
  )
}

export default DrawingGallow3