import React from 'react'
import './hangmanDrawing.css'
import { motion } from "framer-motion";
import useWindowDimentions from "../../hooks/useWindowDimentions";
import DrawingBase from "./drawingElements/DrawingBase";
import DrawingGallow1 from "./drawingElements/DrawingGallow1";
import DrawingGallow2 from "./drawingElements/DrawingGallow2";
import DrawingGallow3 from "./drawingElements/DrawingGallow3";
import DrawingHead from "./drawingElements/DrawingHead";
import DrawingBody from "./drawingElements/DrawingBody";
import DrawingRightArm from './drawingElements/DrawingRightArm';
import DrawingLeftArm from "./drawingElements/DrawingLeftArm";
import DrawingLeftLeg from "./drawingElements/DrawingLeftLeg";
import DrawingRightLeg from "./drawingElements/DrawingRightLeg";

function HangmanDrawing({currentAttempt}) {
    const windowDimentions = useWindowDimentions()
    const svgHeight = (windowDimentions.height*0.35)
    const svgWidth = windowDimentions.width < windowDimentions.height? (windowDimentions.width*0.8):(windowDimentions.height*0.45)

    
  return (
    <motion.div className='hangman-drawing'>
        <svg >
          {currentAttempt<10 && <DrawingBase svgHeight={svgHeight} svgWidth={svgWidth}/>}
          {currentAttempt<9 &&<DrawingGallow1 svgHeight={svgHeight} svgWidth={svgWidth} />}
          {currentAttempt<8 &&<DrawingGallow2 svgWidth={svgWidth}/>}
          {currentAttempt<7 &&<DrawingGallow3 svgHeight={svgHeight} svgWidth={svgWidth} />}
          {currentAttempt<6 &&<DrawingHead svgHeight={svgHeight} svgWidth={svgWidth} />}
          {currentAttempt<5 &&<DrawingBody svgHeight={svgHeight} svgWidth={svgWidth} />}
          {currentAttempt<4 &&<DrawingRightArm svgHeight={svgHeight} svgWidth={svgWidth}/>}
          {currentAttempt<3 &&<DrawingLeftArm svgHeight={svgHeight} svgWidth={svgWidth}/>}
          {currentAttempt<2 &&<DrawingLeftLeg svgHeight={svgHeight} svgWidth={svgWidth}/>}
          {currentAttempt<1 &&<DrawingRightLeg svgHeight={svgHeight} svgWidth={svgWidth}/>}
        </svg>

    </motion.div>
  )
}


export default HangmanDrawing