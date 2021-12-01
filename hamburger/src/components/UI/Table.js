import React from "react";
import Card from "./Card";
import classes from "../Users/UsersList.module.css";

export const Table = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>

          <tbody>
            {props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.dep}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};
