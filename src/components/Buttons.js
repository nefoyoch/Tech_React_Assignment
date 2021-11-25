import React from "react";

const Buttons = (props) => {
  return (
    <ul className="pagination">
      <li className="page-item first">
        <button className="page-link" onClick={props.btnState}>
          {props.text}
        </button>
      </li>
    </ul>
  );
};

export default Buttons;
