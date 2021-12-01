import { useState } from "react/cjs/react.development"; 
import { Navbar } from "./components/UI/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AddUser } from "./components/Users/AddUser";
// import UserList from "./components/Users/UserList";

import { Home } from "./components/UI/Home";
import CallAPI from "./components/Users/CallAPI";


function App() {

  const [usersList, setUsersList] = useState([]);

const addUserHandler = (uname, uAge, udep) => {
  setUsersList((prevUserList) => {
    return [...prevUserList, {name: uname, age: uAge, dep: udep, id: Math.random().toString()}];
  })
}

  return (
    <Router>
    <div className="App">
    <Navbar/>
      {/* <UserList /> */}
    <Routes>
      <Route exact path = "/" element = {<Home/>}></Route>
      <Route exact path = "/adduser" element = {<AddUser users={usersList} onAddUser={addUserHandler}/>}></Route>
      <Route exact path = "/api" element = {<CallAPI/>}></Route>
      {/* <Route exact path = "/contact" element = {<Contact/>}></Route> */}
      {/* <Route exact path = "/apicall" element = {<CallAPI/>}></Route> */}
      {/* <Route exact path = "/lifecycle" element = {<LifeCycle/>}></Route> */}
      {/* <Route exact path = "/formik" element = {<Signup/>}></Route> */}

    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
