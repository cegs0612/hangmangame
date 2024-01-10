import React from 'react'
import { motion } from "framer-motion";

function DrawingBase({svgWidth,svgHeight}) {
    
    const rectHeight = svgHeight*0.05 
    const rectWidth = svgWidth*0.8/5
    const xInitial = svgWidth*0.1 
    const array = [1,2,3,4,5]
    const variants = {
        initial: {
            opacity:0
        },
        inView: {
            opacity:1
        }
    }
  return (
    <React.Fragment>
        {
            array.map((_,index)=>{
                let fill1=""
                let fill2=""
                if (index===1 || index===3) {
                    fill1="#FF6347"
                    fill2="#333333"
                } else {
                    fill1= "#333333"
                    fill2="#FF6347"
                }
                let delay1 = 0.1*index;
                let delay2 = 0.125*index;
                let transition1 = {duration:0.5, delay:delay1}
                let transition2 = {duration:0.5, delay:delay2}
                return (
                    <React.Fragment
                        key={index}
                    >
                        <motion.rect 
                            key={`up${index}`}  
                            variants={variants}
                            initial='initial'
                            animate='inView'
                            transition={transition1}
                            height={rectHeight}
                            width={rectWidth}
                            x={xInitial + index*rectWidth}
                            y={svgHeight*0.90}
                            fill={fill1}
                        />
                        <motion.rect 
                            key={`down${index}`}  
                            variants={variants}
                            initial="initial"
                            animate="inView"
                            transition={transition2}
                            height={rectHeight}
                            width={rectWidth}
                            x={xInitial+ index*rectWidth}
                            y={svgHeight*0.90+rectHeight}
                            fill={fill2}
                        /> 
                    </React.Fragment>
                        
                )
            })
        }
    </React.Fragment>
  )
}

export default DrawingBase