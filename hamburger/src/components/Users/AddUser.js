import React from 'react'
import Card from '../UI/Card'

export const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmpId, setEnteredEmpId] = useState("");
  const [enteredDepartment, setEnteredDepartment] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const empIdChangeHandler = (event) => {
    setEnteredEmpId(event.target.value);
  };

  const departmentChangeHandler = (event) => {
    setEnteredDepartment(event.target.value);
  };

    return (
        <>
         <Card>
         <form onSubmit={addUserHandler}>
        <label htmlFor="empId">Emp. Id</label>
        <input
          type="number"
          id="empId"
          value={enteredEmpId}
          onChange={empIdChangeHandler}
        />
        <label htmlFor="username" type="text">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="department" type="text">
          Department
        </label>
        <input
          type="text"
          id="department"
          value={enteredDepartment}
          onChange={departmentChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>

         </Card>   
        </>
    )
}
