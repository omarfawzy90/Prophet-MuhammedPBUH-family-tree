// src/hooks/useBubbleNav.js
import { useEffect } from "react";
import familyLine from "../data/familyline";

const useBubbleNav = ({
  currentIndex,
  setCurrentIndex,
  length,
  currentChild,
  setCurrentChild,
}) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (currentChild) {
        if (e.key === "ArrowUp") {
          setCurrentChild(null);
          const i = familyLine.findIndex((p) => p.id === 24);
          setCurrentIndex(i);
        }

        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          const prophet = familyLine.find((p) => p.id === 24);
          if (!prophet || !prophet.children) return;

          const siblings = prophet.children;
          const currentIdx = siblings.findIndex(
            (c) => c.id === currentChild.id
          );

          if (currentIdx !== -1) {
            let newIdx = currentIdx;
            if (e.key === "ArrowLeft" && currentIdx > 0) {
              newIdx = currentIdx - 1;
            } else if (
              e.key === "ArrowRight" &&
              currentIdx < siblings.length - 1
            ) {
              newIdx = currentIdx + 1;
            }
            setCurrentChild(siblings[newIdx]);
          }
        }
        return;
      }

      if (e.key === "ArrowUp") {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
      if (e.key === "ArrowDown") {
        if (currentIndex < length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, currentChild, setCurrentChild, length, setCurrentIndex]);
};

export default useBubbleNav;
