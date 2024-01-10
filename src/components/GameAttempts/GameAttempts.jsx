import React, {useEffect} from 'react'
import "./GameAttempts.css"

function GameAttempts({currentAttempt, finishGame}) {
    
    useEffect(() => {
      if (currentAttempt===0) {finishGame("lost")}
    }, [currentAttempt])
    
    const formatNumber = (attemptNumber)=>{
      return attemptNumber < 10? `0${attemptNumber}` : attemptNumber
    }
    
  return (
    <h2>{formatNumber(currentAttempt)}</h2>
  )
}

export default GameAttempts