import React from 'react'
import { motion } from "framer-motion";

function DrawingGallow1({svgWidth,svgHeight}) {
  
  const rectHeight = svgHeight*0.9
  const rectWidth = svgWidth*0.075
  const xInitial = svgWidth*0.15
  const yInital = 0
  
  return (
    <motion.rect
      height={rectHeight}
      width={rectWidth}
      fill={'#333333'}
      initial={{scaleY:0, opacity:0}}
      animate={{scaleY:1, opacity:1, transition:{scaleY:{duration:0.8,delay:0.2}, opacity:{duration:0.8}}}}
      x={xInitial}
      y={yInital}
    />
  )
}

export default DrawingGallow1