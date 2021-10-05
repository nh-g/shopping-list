// import closeEye from "../assets/images/close-eye.svg";
import openEye from "../assets/images/open-eye.svg";

export default function ShowAcquiredToggler({ showCompleted, toggleShow }) {
  
  // const eyeIcon = showCompleted ? closeEye : openEye;

  return (
    <button
      className={`button-toggler ${showCompleted ? "active" : ""} show-toggler`}
      type="button"
      onClick={toggleShow}
    >
      <img src={openEye} alt="" className="eye icon to open and close" />
      <span>{showCompleted ? "Pending" : "Done"} </span>
    </button>
  );
}
