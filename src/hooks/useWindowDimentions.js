import {useState,useEffect} from 'react'

function useWindowDimentions() {
  const [windowDimentions, setwindowDimentions] = useState({height: window.innerHeight,width: window.innerWidth})
  
  useEffect(() => {
    function handleResize() {
      setwindowDimentions({height: window.innerHeight,width: window.innerWidth});
    };
    
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  }, [])
  
  return windowDimentions;
}

export default useWindowDimentions;