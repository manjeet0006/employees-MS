import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import EmpoyeeDashboard from "./components/Dashboard/EmpoyeeDashboard";
import TaskList from "./components/TaskList/TaskList";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [ userData ] = useContext(AuthContext);

  useEffect(() => {
    
    if(userData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }
  } ,[userData]);
  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (userData) {
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data : employee}))
      }
      
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    // <>
    //   {!user ? <Login handleLogin={handleLogin} /> : ""}

    //   {user == 'admin' ? <AdminDashboard/>  : <EmpoyeeDashboard/> }
    // </>
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard data = {loggedInUserData} changeUser = {setUser} />
      ) : (
        <EmpoyeeDashboard data ={loggedInUserData} changeUser = {setUser} />
      )}
    </>
  );
}

export default App;

