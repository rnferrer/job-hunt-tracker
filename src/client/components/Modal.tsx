import React from "react";

const Modal = (props: {handleClick: any, children?: any}) => {
  const { handleClick, children } = props;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;