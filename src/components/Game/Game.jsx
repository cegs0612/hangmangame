import "./game.css";
import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import GameNavbar from "../GameNavbar/GameNavbar";
import Spinner from "../Spinner/Spinner";
import GameScreen from "../GameScreen/GameScreen";
import GameWordDisplay from "../GameWordDisplay/GameWordDisplay";
import GameKeyboard from "../GameKeyboard/GameKeyboard";
import GameWinModal from "../GameWinModal/GameWinModal";
import GameLostModal from "../GameLostModal/GameLostModal";


const difficultyParameters = {
  easy: {
    timeLimit: 240,  // time in seconds, 4 min
    maxAttempts: 10,
  },
  medium: {
    timeLimit: 180,  // Tiempo en segundos, 3 min
    maxAttempts: 8,
  },
  hard: {
    timeLimit: 120, // 2 min
    maxAttempts: 6,
  },
}

function Game({setEffectsVolume, setMusicVolume, gameDifficulty, musicVolume, effectsVolume, word, updateWord, setWord, endGame, soundEffectFunctions}) {
  const [isGameOn, setisGameOn ] = useState(false)
  const [wordArray, setWordArray] = useState([])
  const [currentAttempt, setCurrentAttempt] = useState(undefined)
  const [isWinModalOpen, setIsWinModalOpen] = useState(false)
  const [isLostModalOpen, setIsLostModalOpen] = useState(false)
  const [isSpinnerOpen, setIsSpinnerOpen] = useState(true)
  

  const startGame = ()=>{
    playClick();
    setIsSpinnerOpen(false);
    setisGameOn(true);
  }

  const finishGame = (status)=>{
    setisGameOn(false)
    if (status==="win") {
      playWon();
      setIsWinModalOpen(true);
    }
    if (status==="lost") {
      playLost();
      setIsLostModalOpen(true)
    }
  }
  
  const prepareNewGame = (gameStatus) =>{
    playClick();
    if (gameStatus==='retry'){
      const wordBackUp = word;
      setWord(undefined);
      definesFirstArray(wordBackUp);
      setWord(wordBackUp);
    }
    if (gameStatus==='new'){
      setWord(undefined);
      updateWord();
    }
    setCurrentAttempt(difficultyParameters[gameDifficulty].maxAttempts)
    setisGameOn(false);
    setIsLostModalOpen(false);
    setIsWinModalOpen(false)
    setIsSpinnerOpen(true);
  }


  const definesFirstArray = (word) =>{
    const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index).toLowerCase());
      const helpArray = word.split("").map(element => ({
        letter: element === " " ? '-' : element,
        discovered: alphabet.includes(element)? false : true
       }));
      setWordArray(helpArray)
  }

  
  const updateWordArray = (letter) =>{
    //handle error scenario
    let wrongLetter = false;
    wordArray.forEach(element => {
      if (element.letter===letter) {
        wrongLetter = true 
        return
      }
    });
    wrongLetter===false && setCurrentAttempt((prevData)=>prevData-1)
    setWordArray((prevData)=>{
      return prevData.map((item)=>(item.letter===letter? {...item, discovered:true} : item))
    })
  }

  //handle sound events
  const playWon = () => soundEffectFunctions.playWonGame()
  const playLost = () => soundEffectFunctions.playLostGame()
  const playClick = () => soundEffectFunctions.playClick()

  //sets the initial value of the wordArray
  useEffect(() => {
    word!==undefined ? definesFirstArray(word) : setWordArray([])
  }, [word])

  //sets the initial value of currentAttemps
  useEffect(() => {
    setCurrentAttempt(difficultyParameters[gameDifficulty].maxAttempts)
  }, [word])
  
  //controls the wordArray to handle fire the winning scenario
  useEffect(() => {
    if(wordArray.length!==0){
      const winScenario = wordArray.every(element => element.discovered);
      if (winScenario) {
        finishGame("win");
      }
    }
  }, [wordArray])

  return (
    <motion.div
        className="game"
    >

      <GameNavbar 
          setEffectsVolume={setEffectsVolume}
          setMusicVolume={setMusicVolume}
          musicVolume={musicVolume}
          effectsVolume={effectsVolume}
          endGame={endGame}
          soundEffectFunctions={soundEffectFunctions}
      />
      
      <GameScreen initialTime = {difficultyParameters[gameDifficulty].timeLimit} currentAttempt={currentAttempt} finishGame={finishGame} isGameOn={isGameOn}/>

      {word!==undefined && <GameWordDisplay  wordArray={wordArray}/>}

      <GameKeyboard wordArray={wordArray} updateWordArray={updateWordArray} isGameOn={isGameOn} soundEffectFunctions={soundEffectFunctions}/>

      {isSpinnerOpen && <Spinner word={word} startGame={startGame} soundEffectFunctions={soundEffectFunctions}/>}

      {isWinModalOpen && <GameWinModal word={word} endGame={endGame} prepareNewGame={prepareNewGame} soundEffectFunctions={soundEffectFunctions}/> }

      {isLostModalOpen && <GameLostModal word={word} endGame={endGame} prepareNewGame={prepareNewGame} soundEffectFunctions={soundEffectFunctions} />}
    </motion.div>
  )
}

export default Game