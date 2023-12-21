import Image from "next/image";
import { useRef, useEffect } from "react";
import FocusTrap from "focus-trap-react";

interface PopupProps {
  linkToMyList: () => void;
  confirmData: () => void;
  toggleData: boolean;
  setToggleData: (toggleData: boolean) => void;
  goodLuck: boolean;
  toggleGoodLuck: () => void;
  taskData: any;
}

const Popup: React.FC<PopupProps> = ({
  linkToMyList,
  confirmData,
  toggleData,
  setToggleData,
  toggleGoodLuck,
  taskData,
}) => {
  //a seperate function to handle multiple function calls in the yes button click
  const handleYesButtonClick = () => {
    linkToMyList();
    setToggleData(false);
    toggleGoodLuck();
  };

  return (
    // returns a popup with a message based on the users choices and two buttons
    <FocusTrap focusTrapOptions={{ initialFocus: "#yesbttn" }}>
      <div
        className={"popup ready-popup"}
        style={{ display: toggleData ? "flex" : "none" }}
      >
        <h3>Ready to commit?</h3>
        <p>You&apos;re committing to {taskData.length} habits for 10 days.</p>
        <div tabIndex={0} className={"popupBtnContainer"}>
          <button
            className={"midBtn"}
            id="yesbttn"
            onClick={handleYesButtonClick}
            tabIndex={1}
          >
            Yes
          </button>
          <button className={"midBtn"} onClick={confirmData} tabIndex={2}>
            No
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default Popup;
