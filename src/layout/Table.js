import React from "react";

function Table(props) {
  return (
    <>
      <div className="container">
        <table className="table table-dark" id="our-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {props.filterData.map((data) => {
              return (
                <tr key={data.rank}>
                  <td>{data.rank}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
