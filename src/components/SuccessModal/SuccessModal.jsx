// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Link } from "react-router-dom";
import "./successModal.css";

export default function SuccessModal() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Employee successfully created !</h2>
            <Link to={"/employee-list"} onClick={toggleModal}>Go to Current Employees page</Link>
            <button className="close-modal" onClick={toggleModal}>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
