import React from "react";

const DropDown = (props) =>{

return (

<div className="btn-group" style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0"}}>
                <select name="" id="" className="page-link" onChange={props.dropDown}>
                    <option selected value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
        </select>
      </div>
)
}

export default DropDown;