import React from "react";
import "../styles/BubbleView.css";

const Bubble = ({
  textAr,
  textEn,
  onClick,
  isMain,
  isProphet,
  wife,
  childGender,
}) => {
  let classNames = `bubble ${isMain ? "main-bubble" : ""} ${
    isProphet ? "prophet" : ""
  }`;

  if (wife) {
    classNames += " wife-bubble";
  }
  if (childGender === "male") {
    classNames += " boy-bubble";
  }
  if (childGender === "female") {
    classNames += " girl-bubble";
  }

  return (
    <div className={classNames} onClick={onClick}>
      <div className="arabic">{textAr}</div>
      {textEn && <div className="english">{textEn}</div>}
    </div>
  );
};

const BubbleView = ({
  current,
  parent,
  child,
  wives,
  onParentClick,
  onChildClick,
  onWifeClick,
  onCurrentClick,
  onChildSelect,
  handleUp,
  handleDown,
}) => {
  const hasChildren = current.children && current.children.length > 0;
  const isChildOfProphet = current.id >= 101 && current.id <= 107;

  return (
    <div className="bubble-container">
      <div className="arrow up" onClick={handleUp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
      <div className="arrow down" onClick={handleDown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {isChildOfProphet && (
        <Bubble
          textAr="محمد ﷺ"
          textEn="Prophet Muhammad"
          isProphet={true}
          onClick={onParentClick}
        />
      )}

      <Bubble
        textAr={current.name_ar}
        textEn={current.name_en}
        isMain={true}
        isProphet={current.id === 24}
        onClick={onCurrentClick}
      />

      {!isChildOfProphet && !hasChildren && child && (
        <Bubble
          textAr={child.name_ar}
          textEn={child.name_en}
          onClick={onChildClick}
        />
      )}

      {hasChildren && (
        <div className="children-row">
          {current.children.map((c) => (
            <Bubble
              key={c.id}
              textAr={c.name_ar}
              textEn={c.name_en}
              childGender={c.gender}
              onClick={() => onChildSelect(c)}
            />
          ))}
        </div>
      )}

      {wives && wives.length > 0 && (
        <div className="wives-group">
          {wives.map((wife, idx) => (
            <Bubble
              key={idx}
              textAr={wife.name_ar}
              textEn={wife.name_en}
              wife={true}
              onClick={() => onWifeClick(wife.name_ar)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BubbleView;
