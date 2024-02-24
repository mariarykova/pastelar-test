"use client";

import { useState } from "react";

import BookModal from "@/components/bookModal/bookModal";
import Button from "@/components/button/button";

import classes from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleBookModal() {
    setIsOpen(!isOpen);
    setIsFlipped(false);
  }

  const flipPage = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={classes.main}>
      <Button onClick={toggleBookModal}> Open Book Modal</Button>

      <BookModal
        isOpen={isOpen}
        toggleBookModal={toggleBookModal}
        isFlipped={isFlipped}
        flipPage={flipPage}
      />
    </div>
  );
}
