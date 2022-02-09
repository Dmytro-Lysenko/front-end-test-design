import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={()=> props.onClose()}>
      <div className={classes["error-modal"]}>
        <h1>An error occured!</h1>
        <p>{props.children}</p>
        {/* <p>{props.error.message}</p> */}
        <button onClick={()=> props.onClose()} >Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
