import React from 'react';

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-12 justify-between gap-5 screen">
      <div className="rounded-xl border-2 border-transparent hover:border-2 hover:border-highlight  w-[23%] py-6 px-9 bg-input text-white shadow-lg">
        <h2 className="text-3xl flex justify-center  font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl flex justify-center font-medium text-gray-400">New Task</h3>
      </div>
      <div className="rounded-xl border-2 border-transparent hover:border-2 hover:border-highlight w-[23%] py-6 px-9 bg-input text-white shadow-lg">
        <h2 className="text-3xl flex justify-center font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl flex justify-center font-medium text-gray-400">Completed Task</h3>
      </div>
      <div className="rounded-xl border-2 border-transparent hover:border-2 hover:border-highlight w-[23%] py-6 px-9 bg-input text-white shadow-lg">
        <h2 className="text-3xl flex justify-center font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl flex justify-center font-medium text-gray-400">Accepted Task</h3>
      </div>
      <div className="rounded-xl border-2 border-transparent hover:border-2 hover:border-highlight w-[23%] py-6 px-9 bg-input text-white shadow-lg">
        <h2 className="text-3xl flex justify-center font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl flex justify-center font-medium text-gray-400">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;