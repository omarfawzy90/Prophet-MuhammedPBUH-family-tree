import React, { useState } from "react";
import familyLine from "./data/familyline";
import BubbleView from "./components/BubbleView";
import useBubbleNav from "./hooks/useBubbleNav";
import "./styles/BubbleView.css";
import "./App.css";
import InfoModal from "./components/InfoModal";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChild, setCurrentChild] = useState(null);

  const length = familyLine.length;
  const [showModal, setShowModal] = useState(false);
  const [modalPerson, setModalPerson] = useState(null);

  useBubbleNav({
    currentIndex,
    setCurrentIndex,
    length,
    currentChild,
    setCurrentChild,
  });

  const current =
    currentChild !== null ? currentChild : familyLine[currentIndex];

  const parent =
    currentChild !== null
      ? familyLine.find((p) => p.id === 24) // Prophet is parent
      : currentIndex > 0
      ? familyLine[currentIndex - 1]
      : null;

  const child =
    currentChild !== null
      ? null
      : currentIndex < length - 1
      ? familyLine[currentIndex + 1]
      : null;

  const openModalForCurrent = () => {
    setModalPerson(current);
    setShowModal(true);
  };

  const openModalForWife = (wifeName) => {
    let wifeInfo = {
      name_ar: wifeName,
      name_en: "",
      description_ar: "",
      description_en: "",
    };
    if (current.wives_info) {
      const found = current.wives_info.find((w) => w.name_ar === wifeName);
      if (found) wifeInfo = found;
    }
    setModalPerson(wifeInfo);
    setShowModal(true);
  };

  const handleChildSelect = (childObj) => {
    setCurrentChild(childObj);
  };

  const goBackToProphet = () => {
    setCurrentChild(null);
    setCurrentIndex(familyLine.findIndex((p) => p.id === 24));
  };

  const handleUpClick = () => {
    if (currentChild) {
      goBackToProphet();
    } else if (parent) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleDownClick = () => {
    if (!currentChild) {
      if (child) {
        setCurrentIndex((i) => i + 1);
      } else if (current.id === 24 && current.children) {
        setCurrentChild(current.children[0]);
      }
    }
  };

  return (
    <div className="App">
      <header className="site-header">
        <a href="/">
          {" "}
          <h1 className="title-arabic">شجرة عائلة النبي محمد ﷺ</h1>
        </a>
        <h2 className="title-english">Prophet Muhammad Family Tree</h2>
      </header>

      <main className="bubble-area">
        <BubbleView
          current={current}
          parent={parent}
          child={child}
          wives={
            current.wives_info
              ? current.wives_info
              : current.wives
              ? current.wives.map((w) => ({ name_ar: w, name_en: "" }))
              : []
          }
          onParentClick={
            currentChild
              ? goBackToProphet
              : parent
              ? () => setCurrentIndex((i) => i - 1)
              : null
          }
          onChildClick={child ? () => setCurrentIndex((i) => i + 1) : null}
          onWifeClick={openModalForWife}
          onCurrentClick={openModalForCurrent}
          onChildSelect={handleChildSelect}
          handleUp={handleUpClick}
          handleDown={handleDownClick}
        />

        <button
          className="arrow up"
          onClick={() => {
            if (currentChild) {
              goBackToProphet();
            } else if (parent) {
              setCurrentIndex((i) => i - 1);
            }
          }}
        >
          ↑
        </button>

        <button
          className="arrow down"
          onClick={() => {
            if (currentChild) {
            } else if (child) {
              setCurrentIndex((i) => i + 1);
            } else if (current.id === 24 && current.children) {
              setCurrentChild(current.children[0]);
            }
          }}
        >
          ↓
        </button>
      </main>

      <InfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        person={modalPerson}
      />

      <footer className="site-footer">
        <p>
          Made by{" "}
          <a
            href="https://github.com/omarfawzy90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Omar Fawzy 2025
          </a>
          <br />
          <a href="https://www.youtube.com/watch?v=0nCBMsZvxdw&t=4s">
            شرح شجرة النسب النبوي
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
