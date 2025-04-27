import { useState, useEffect } from 'react';

export default function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMdUp(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return isMdUp;
}