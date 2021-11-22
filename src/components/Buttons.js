import React from "react";

const Buttons = (props) =>{
    return (
        <ul className="pagination">
        <li className="page-item first">
          <button className="page-link" id="first" onClick={props.firstBtn}>First</button>
        </li>
        <li className="page-item prev">
          <button class="page-link" href="#" id="prev" onClick={props.prevBtn}>&laquo;</button>
        </li>
        <input type="text" disabled value={props.pageViewBtn} style={{width: "30px", textAlign: "center", height: "40px", border:"1px solid black"}}/>
        <li class="page-item next">
          <button class="page-link" href="#" id="next" onClick={props.nextBtn}>&raquo;</button>
        </li>
        <li class="page-item last">
          <button class="page-link" href="#" id="last" onClick={props.lastBtn}>Last</button>
        </li>
      </ul>
    )
}

export default Buttons;