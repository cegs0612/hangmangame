import { useState, useEffect } from "react";

function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) return "portrait"
    if (window.matchMedia("(orientation: landscape)").matches) return "landscape"
}

function useDeviceOrientation() {
    const [orientation, setorientation] = useState(checkOrientation)
    useEffect(() => {
      function handleOrientationChange() {
        setorientation(checkOrientation)
      } 
      
      window.addEventListener('orientationchange',handleOrientationChange)
      return () => {
        window.removeEventListener('orientationchange',handleOrientationChange)
      }
    }, [])

    return orientation
}

export default useDeviceOrientation;