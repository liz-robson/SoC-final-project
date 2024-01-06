import Image from "next/image";
import { PopupProps } from "../../types/types";
import Link from "next/link";

const Popup: React.FC<PopupProps> = ({
  linkToMyList,
  confirmData,
  toggleData,
  setToggleData,
  toggleGoodLuck,
  taskData,
  tenDaysPassed,
  toggleTenDaysPassed,
}) => {
  //a seperate function to handle multiple function calls in the yes button click
  const handleYesButtonClick = async () => {
    await linkToMyList();
    await setToggleData(false);
    await toggleGoodLuck();

    tenDaysPassed ? await toggleTenDaysPassed() : null;
  };

  return (
    // returns a popup with a message based on the users choices and two buttons
    <div
      className={"popup"}
      style={{ display: toggleData ? "flex" : "none" }}
    >
      <h3>Ready to commit?</h3>
      <p>You&apos;re committing to {taskData.length === 1 ? `${taskData.length} habit` : `${taskData.length} habits`} for 10 days.</p> 
      <div className={"popupBtnContainer"}>
        <Link href="/">
        <div className={"midBtn"} onClick={handleYesButtonClick}>
          Yes
        </div>
        </Link>
        <div className={"midBtn"} onClick={confirmData}>
          No
        </div>
      </div>
    </div>
  );
};

export default Popup;
