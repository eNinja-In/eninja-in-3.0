import { useState, useEffect } from "react";

export default function useTypingEffect(text, speed = 100, deleteSpeed = 60, delay = 1000) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      }

      if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [text, index, isDeleting, speed, deleteSpeed, delay]);

  return displayText;
}
