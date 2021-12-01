import React, {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import ErrorModal from '../UI/ErrorModal';
import UserList from './UserList';

export const AddUser = (props) => {
  // console.log(props.user)

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmpId, setEnteredEmpId] = useState("");
  const [enteredDepartment, setEnteredDepartment] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredEmpId.trim().length === 0 || enteredDepartment.trim().length === 0){
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name, age and department (non-empty values)."
        });
        return;
    }
    if(+enteredEmpId < 1){ // + --> ensure that it is a number
        setError({
            title: "Invalid Input",
            message: "Please enter a valid EmpId (> 0)."
        });
        return;
    }
    // console.log(enteredUsername, enteredAge, enteredDepartment);
    props.onAddUser(enteredUsername, enteredEmpId, enteredDepartment);
    setEnteredUsername("");
    setEnteredEmpId("");
    setEnteredDepartment("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const empIdChangeHandler = (event) => {
    setEnteredEmpId(event.target.value);
  };

  const departmentChangeHandler = (event) => {
    setEnteredDepartment(event.target.value);
  };

  // const [usersList, setUsersList] = useState([]);

  // const addUserHandlerData = (uname, uAge, udep) => {
  //   setUsersList((prevUserList) => {
  //     return [...prevUserList, {name: uname, age: uAge, dep: udep, id: Math.random().toString()}];
  //   })
  // }

  const errorHandler = () => {
    setError(null);
}

  
  
  return (
      <>
      {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
         <Card className={classes.input}> 
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
         {/* <App onChangeHandler={addUserHandlerData}/> */}
         <UserList users={props.users}/>  
        </>
    )
}
