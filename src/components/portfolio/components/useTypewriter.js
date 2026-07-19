import { useState, useEffect } from 'react';

export default function useTypewriter(fullText, speed = 28) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    let timer;
    const tick = () => {
      setText(fullText.slice(0, i));
      i++;
      if (i <= fullText.length) timer = setTimeout(tick, speed);
    };
    tick();
    return () => clearTimeout(timer);
  }, [fullText, speed]);
  return text;
}