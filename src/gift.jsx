import React, { useState } from "react";

const Gift = ({party,setParty,open,setOpen}) => {


  const handleClick = () => {
    setOpen(!open);
    setParty(!party)
  };

  return (
    <div onClick={handleClick} className="gift">
      <div className="gift_wrap">
        <div className={open ? "gift_cover open" : "gift_cover close"}>
          <div className="gift_ribbon" />
        </div>
        <div className="gift_box">
          <div
            className={
              open
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
