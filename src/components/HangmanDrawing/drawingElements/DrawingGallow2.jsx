import React from 'react'
import { motion } from "framer-motion";


function DrawingGallow2({svgWidth}) {
    const rectHeight = svgWidth*0.075
    const rectWidth = svgWidth*0.45
    const xInitial = svgWidth*0.15
    const yInital = 0
  return (
    <motion.rect 
      height={rectHeight}
      width={rectWidth}
      fill={'#FF6347'}
      initial={{scaleX:0, opacity:0}}
      animate={{scaleX:1, opacity:1, transition:{scaleX:{duration:0.8,delay:0.2}, opacity:{duration:0.8}}}}
      x={xInitial}
      y={yInital}
    />
  )
}

export default DrawingGallow2