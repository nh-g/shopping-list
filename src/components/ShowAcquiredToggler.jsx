import closeEye from "../assets/images/close-eye.svg";
import openEye from "../assets/images/open-eye.svg";

export default function ShowAcquiredToggler({ showCompleted, toggleShow }) {
  
  const eyeIcon = showCompleted ? closeEye : openEye;

  return (
    <button type="button" onClick={toggleShow} className="show-toggler">
      <img src={eyeIcon} alt="" className="eye icon to open and close" />
      <span>{showCompleted ? "Hide" : "View"} acquired items</span>
    </button>
  );
}
