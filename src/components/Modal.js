import React, { useState } from "react";

const Modal = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openHandle = () => {
    setModalOpen(true);
  }

  const closeHandle = () => {
    if(isModalOpen === true) return setModalOpen(false);
  }

  return (
    <div className="modal">
      <button type="button" className="modal-btn open" onClick={openHandle}>모달 열기</button>
      {isModalOpen ? 
      <div className="modal-content">
        <div className="inner">
          <button type="button" className="modal-btn close" onClick={closeHandle}>모달 닫기</button>
          <p className="txt">Hello Modal!</p>
        </div>
        <div className="dimmer"></div>
      </div> : null}
    </div>
  )
}

export default Modal;