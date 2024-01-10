import React from 'react'
import { motion } from "framer-motion";

function DrawingHead({svgWidth,svgHeight}) {
    const xInitial = svgWidth*0.51
    const yInital = svgHeight*0.35
    const majorAxis = svgWidth*0.075
    const minorAxis = majorAxis*0.75
    
    const drawingElipse = (x,y,a,b)=>{
      const rotation = -45; // rotation angle
      return `M ${x} ${y} A ${a} ${b} ${rotation} 1 1 ${x+0.1} ${y+0.1}`;
    }

  return (
    <React.Fragment>
      <motion.path
        d={drawingElipse(xInitial,yInital,majorAxis,minorAxis)}
        fill={'transparent'}
        stroke={"#FF6347"}
        strokeWidth={4}
        initial={{pathLength:0}}
        animate={{pathLength:1}}
        transition={{duration:1}}
      />      
    </React.Fragment>
    
  )
}

export default DrawingHead


/*

const drawing = (x, y) => {
  const rotation = 60; // Ángulo de rotación en grados
  const a = x * 0.5; // Semieje mayor
  const b = y * 0.3; // Semieje menor

  // Coordenadas iniciales de la elipse
  const startX = x + a * Math.cos((rotation * Math.PI) / 180);
  const startY = y - b * Math.sin((rotation * Math.PI) / 180);

  return `M ${startX} ${startY} 
          A ${a} ${b} ${rotation} 0 1 ${x - a} ${y}`;
};

// Ejemplo de uso
const pathData = drawing(100, 100);
console.log(pathData);
*/