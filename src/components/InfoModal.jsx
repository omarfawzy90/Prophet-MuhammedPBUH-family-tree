// src/components/InfoModal.jsx
import React from "react";
import "../styles/InfoModal.css";

const InfoModal = ({ isOpen, onClose, person }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">🌙</div>

        <h2 className="modal-arabic-name">{person.name_ar}</h2>
        <h3 className="modal-english-name">{person.name_en}</h3>

        <div className="modal-description">
          <h4 className="label-ar">الوصف</h4>
          <p className="text-ar">{person.description_ar}</p>

          <h4 className="label-en">Description</h4>
          <p className="text-en">{person.description_en}</p>
        </div>

        <button className="close-btn" onClick={onClose}>
          إغلاق – Close
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
