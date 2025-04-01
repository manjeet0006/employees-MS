import React, { useEffect, useState } from "react";
// import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (props.data) {
      setUserName(props.data.firstName);
    } else {
      setUserName("admin");
    }
  }, [userName]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");

    // window.location.reload()
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-3xl  font-medium">
        Hello{" "}
        <span className="text-3xl  text-highlight font-bold">
          {userName} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-input shadow-lg 
                     transition-transform transform hover:scale-105 duration-100 text-lg font-medium hover:bg-red-700 text-gray-300 px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
