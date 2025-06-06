import React from "react"

import './HookCard.css';

const HookCard = ({ hook, onClick }) => {
  return (
    <div className="Hook-Card" onClick={onClick}>
      <h2>{hook.name}</h2>
    </div>

  );
}

export default HookCard;