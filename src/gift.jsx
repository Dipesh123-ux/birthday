import React, { useState } from "react";

const Gift = ({party,setParty}) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
    setParty(!party)
  };

  return (
    <div onClick={handleClick} className="gift">
      <div className="gift_wrap">
        <div className={isOpen ? "gift_cover open" : "gift_cover close"}>
          <div className="gift_ribbon" />
        </div>
        <div className="gift_box">
          <div
            className={
              isOpen
                ? "gift_box__shadow shadow_animation__hide"
                : "gift_box__shadow shadow_animation__shake"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Gift;
