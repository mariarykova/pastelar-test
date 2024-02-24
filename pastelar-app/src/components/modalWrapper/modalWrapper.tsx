import React from "react";
import classes from "./modalWrapper.module.css";

type ModalWrapperProps = {
  position: "left" | "right";
  children: React.ReactNode;
};

const ModalWrapper = ({ position, children }: ModalWrapperProps) => {
  const positionClass =
    position === "left" ? classes.modal_left : classes.modal_right;
  return <div className={`${classes.modal} ${positionClass}`}>{children}</div>;
};

export default ModalWrapper;
