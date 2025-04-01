
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="alltask" className="bg-[#121212] p-5 mt-5 rounded-lg shadow-lg">
      {/* Table Header */}
      <div className="bg-[#222222] text-gray-300 py-3 px-4 flex justify-between rounded-md border-b border-gray-700">
        <h2 className="text-sm font-medium w-1/5">Employee Name</h2>
        <h3 className="text-sm font-medium w-1/5">New Task</h3>
        <h5 className="text-sm font-medium w-1/5">Active Task</h5>
        <h5 className="text-sm font-medium w-1/5">Completed</h5>
        <h5 className="text-sm font-medium w-1/5">Failed</h5>
      </div>

      {/* Table Body */}
      <div className='mt-3'>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-black text-gray-300  py-3 px-4 flex justify-between rounded-md border border-gray-700">
            <h2 className="text-sm font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="text-sm px-5 font-medium w-1/5 text-blue-400">
              {elem.taskNumbers.newTask}
            </h3>
            <h5 className="text-sm px-7 font-medium w-1/5 text-yellow-400">
              {elem.taskNumbers.active}
            </h5>
            <h5 className="text-sm px-7 font-medium w-1/5 text-green-400">
              {elem.taskNumbers.completed}
            </h5>
            <h5 className="text-sm px-5 font-medium w-1/5 text-red-400">
              {elem.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
