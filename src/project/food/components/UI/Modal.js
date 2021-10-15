import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import  './Modal.css';

const Backdrop = (props) => {
  return <div 
  onClick={props.onClick}
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: '20',
    backgroundColor: '',
  }} />;
};

const ModalOverlay = (props) => {
  return (
    <div  className="moal" style={{
        position: 'fixed',
        top: "20vh",
        left: "30%",
        width: "40%",
        backgroundColor: 'lightGray',
        padding: "1rem",
        borderRadius: "14px",
        boxShadow: "0 2px 8px lightgray" ,
        zIndex: 30,
        // animation: slide-down 300ms easeOut forwards,
        

    }}>
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onclick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;