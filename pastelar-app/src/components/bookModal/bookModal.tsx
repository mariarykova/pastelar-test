"use client";

import React, { useState } from "react";
import ModalWrapper from "../modalWrapper/modalWrapper";
import AddRecipe from "../addRecipe/addRecipe";
import Button from "../button/button";

import classes from "./bookModal.module.css";

interface BookModalProps {
  isOpen: boolean;
  toggleBookModal: () => void;
  isFlipped: boolean;
  flipPage: () => void;
}

const BookModal = ({
  isOpen,
  toggleBookModal,
  isFlipped,
  flipPage,
}: BookModalProps) => {
  const [isAddedRecipe, setIsAddedRecipe] = useState(false);

  const addRecipe = () => {
    setIsAddedRecipe(true);
  };

  return (
    <div
      className={`${classes.container} ${isOpen ? classes.open : classes.close}
      ${isAddedRecipe ? classes.colored : classes.light}
      `}
    >
      <div
        className={`${classes.modal} ${
          isOpen && !isAddedRecipe ? classes.visible : classes.invisible
        }`}
      >
        <div>
          <div
            className={`${classes.page} ${isFlipped ? classes.flipped : ""}`}
          >
            <div className={classes.front}>
              <ModalWrapper position="left">
                <div className={classes.page_inner}>
                  <h3>Title</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <Button onClick={toggleBookModal}>Annuler</Button>

                  <div
                    className={`${classes.arrow_container} ${classes.arrow_container_right}`}
                  >
                    <span
                      className={classes.right_arrow}
                      onClick={flipPage}
                    ></span>
                  </div>
                </div>
              </ModalWrapper>
            </div>
            <div className={classes.back}>
              <ModalWrapper position="right">
                <div className={classes.page_inner}>
                  <h3>Ingredients</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div
                    className={`${classes.arrow_container} ${classes.arrow_container_left}`}
                  >
                    <span
                      className={classes.left_arrow}
                      onClick={flipPage}
                    ></span>
                  </div>
                </div>
              </ModalWrapper>
            </div>
          </div>
          <div>
            <ModalWrapper position="left">
              <div>
                <h3>Pâte à choux</h3>
                <p>Procede</p>
              </div>
              <div className={classes.btns}>
                <Button onClick={toggleBookModal}>Annuler</Button>
                <Button onClick={addRecipe}>Ajouter</Button>
              </div>
            </ModalWrapper>
          </div>
        </div>
      </div>
      {isAddedRecipe && <AddRecipe />}
    </div>
  );
};

export default BookModal;
