import React,{useState, useEffect} from 'react'
import closeEye from "../assets/images/close-eye.svg";
import openEye from "../assets/images/open-eye.svg";
import ShoppingList from './ShoppingList';

export default function CompletedList({ showCompleted, toggleShow }) {
  //   const [showCompleted, setShowCompleted] = useState(showCompletedList);

  //   useEffect(() => {
  //     console.log("showCompleted", { showCompleted });
  //     setShowCompleted(showCompleted);
  //   }, [showCompleted]);

  // Functions
  //   const toggleBoughtList = () => setShowCompleted(!showCompleted);

  const promptShowCompleted = showCompleted
    ? "Hide acquired items"
    : "View acquired items";

  const eyeIcon = showCompleted ? closeEye : openEye;

  return (
    <section className="CompletedListControls">
      <button type="button" onClick={toggleShow} className="button-subtle">
        <img src={eyeIcon} alt="" className="icon" />
        {promptShowCompleted}
      </button>
    </section>
  );
}
