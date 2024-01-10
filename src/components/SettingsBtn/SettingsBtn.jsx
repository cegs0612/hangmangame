import "./settingsBtn.css";
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
 
function SettingsBtn( {isSettingsOpen, setIsSettingsOpen, deviceOrientation, setMusicVolume, setEffectsVolume, setGameDifficulty, gameDifficulty, musicVolume, effectsVolume, soundEffectFunctions}) {
   
    const openSettings = ()=> {
        !isSettingsOpen&&setIsSettingsOpen(true);
    };
    const closeSettings = ()=> {
        setIsSettingsOpen(false)
    };
    
    const variantsListItems = {
        open:{
            opacity:1,
            transition:{type:'spring',duration:0.5},
        },
        close:{
            opacity:0,
            transition:{type:'spring', duration:0.6}
        }
    } 
    
    const determineAnimation = ()=>{
        let animationString = ""
        if (isSettingsOpen) {
          deviceOrientation == "portrait"? animationString = "settingsOpenPortrait" : animationString = "settingsOpenLandscape"
        } else {
          animationString = "settingsClosed"
        }
        return animationString
    }
    
    const defineDifficulty = (value)=>{
        switch (value) {
            case "1":
                setGameDifficulty("easy")
                break;
            case "2":
                setGameDifficulty("medium")
                break;
            case "3":
                setGameDifficulty("hard")
                break;
        }
    }
    
    //handles audio events
    const playHover = () => soundEffectFunctions.playHover()
    
  return (
    <React.Fragment> 
        <motion.div
            key= "settingsDiv"   
            className={`settingsDiv ${isSettingsOpen? 'open':'closed'}`}
            variants={{
                settingsClosed:{
                    opacity: 1,
                    transition: {type:'spring', duration: 0.7, bounce:0}
                },
                settingsOpenPortrait:{
                    opacity: 1,
                    width: "80vw",
                    height: "50vh",
                    transition: {type:'spring', duration: 1, bounce:0}
                },
                settingsOpenLandscape:{
                    opacity: 1,
                    height: "75vh",
                    width: "45vw",
                    transition: {type:'spring', duration: 1, bounce:0}
                }
            }}
            initial= {{opacity:0}}
            animate= {determineAnimation}
            whileHover={{transition: {type:'spring', duration:0.5}}}
            exit={{opacity:0, transition:{type:'spring', bounce:0, duration:1}}}
            onClick={()=>openSettings()}
            onHoverStart={()=>{!isSettingsOpen&&playHover()}}
        >
            <motion.ul className={isSettingsOpen? '':'closed'}>   
                <AnimatePresence>
                {!isSettingsOpen && <motion.h1
                    variants={variantsListItems}
                    initial={{opacity:0}}
                    animate={"open"}
                    exit={"close"}
                >SETTINGS</motion.h1>}
                {isSettingsOpen && <>                    
                    <motion.li 
                        key="music1"
                        variants={variantsListItems}
                        initial={{opacity:0}}
                        animate={"open"}
                        exit={"close"}
                    >
                        <label htmlFor="music">Music</label>
                        <input type="range" name="music" id="inputMusic" value={musicVolume} onChange={(e)=>setMusicVolume(e.target.value)} onMouseUp={()=>playHover()}/>
                    </motion.li>
                    <motion.li 
                        key="sound1"
                        variants={variantsListItems}
                        initial={{opacity:0}}
                        animate={"open"}
                        exit={"close"}
                    >
                        <label htmlFor="sound">Sound Effect</label>
                        <input type="range" name="sound" id="inputSound" value={effectsVolume} onChange={(e)=>setEffectsVolume(e.target.value)} onMouseUp={()=>playHover()} />
                    </motion.li>
                    <motion.li 
                        key="diff1"
                        variants={variantsListItems}
                        initial={{opacity:0}}
                        animate={"open"}
                        exit={"close"}
                    >
                        <label htmlFor="difficulty">Difficulty</label>
                        <input
                            type="range"
                            min="1"
                            max="3"
                            step="1"
                            value={gameDifficulty==="easy"?"1":gameDifficulty==="medium"?"2":"3"}
                            onChange={(e)=>defineDifficulty(e.target.value)}
                            onMouseUp={()=>playHover()}
                        />
                        <h2>{gameDifficulty}</h2>
                    </motion.li>
                    <motion.li
                        variants={variantsListItems}
                        initial={{opacity:0}}
                        animate={"open"}
                        exit={"close"}
                        className="closebtn" 
                        onHoverStart={()=>playHover()}
                    >
                        <button 
                            onClick={()=>closeSettings()}
                            onHoverStart={()=>playHover()} 
                        >
                            <svg className="arrow-up" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M0 20 L 20 20 L 10 0 Z" />
                            </svg>
                        </button>
                    </motion.li>
                    </>
                }
                </AnimatePresence>
            </motion.ul> 
        </motion.div>
    </React.Fragment>
  )
}

export default SettingsBtn