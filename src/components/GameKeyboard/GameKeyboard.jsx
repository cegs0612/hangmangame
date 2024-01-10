import React, {useState, useEffect, useRef} from 'react'
import './gameKeyboard.css'
import { motion } from "framer-motion";

function GameKeyboard({wordArray, updateWordArray, isGameOn, soundEffectFunctions}) {
    const [keys, setKeys] = useState([])
    
    const handleClick = (currentLetter)=>{
        const wordArrayHelp = wordArray.map(element=>element.letter)
        const classString = wordArrayHelp.includes(currentLetter)? 'correct' : 'incorrect'
        wordArrayHelp.includes(currentLetter)? playCorrect() : playIncorrect();
        setKeys((prevData) =>
            prevData.map((item) =>
                item.letter === currentLetter
                ? { ...item, letterStatus: classString }
                : item
            )
        );
        updateWordArray(currentLetter)
    }  

    //initial state of keys
    useEffect(() => {
        const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index).toLowerCase());
        const keys = alphabet.map(element=>({
            letter: element,
            letterStatus: 'unchosen'
        }))
        setKeys(keys)
    }, [isGameOn])
    
    //handles audio events

    const playCorrect = () => soundEffectFunctions.playCorrect();
    const playIncorrect = () => soundEffectFunctions.playIncorrect();
    const playHover = () => soundEffectFunctions.playHover();
    
    //handles keyboard events

    const handleKeyDown = (e) =>{
        const key = e.key.toLowerCase();
        const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index).toLowerCase());
        if (alphabet.includes(key) && keys.find(element=>element.letter===key).letterStatus==='unchosen') handleClick(key)
    }

    useEffect(() => {
      window.addEventListener('keydown',handleKeyDown)
      return () => {
        window.removeEventListener('keydown',handleKeyDown)
      }
    }, [handleKeyDown])
    
  return (
    <div className='keyboard'>
        <div className="key-container">
            {keys.map(element=>{
                return(
                    <React.Fragment key={`rf-${element.letter}`}>
                        <motion.button
                            key={`key-${element.letter}`}
                            disabled={element.letterStatus!=='unchosen' && true}
                            className={`${element.letterStatus==='unchosen'&&'keyboard-letter'} ${element.letterStatus==='correct'&& 'correct'} ${element.letterStatus==='incorrect'&& 'incorrect'}`}
                            initial={{scale:0}}
                            animate={{scale:1}}
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.9}}
                            onClick={()=>handleClick(element.letter)}
                            onHoverStart={()=>{element.letterStatus==='unchosen' && playHover()}}
                        >
                            {element.letter}
                        </motion.button>
                    </React.Fragment>
                )
            })}
        </div> 
    </div>
  )
}

export default GameKeyboard