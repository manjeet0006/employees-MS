import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: elem.taskNumbers.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));

    setTitle('');
    setAsignTo('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="p-6 bg-input mt-3 shadow-lg rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4 text-gray-200">Create New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-wrap items-start justify-between">
        <div className="w-1/2 space-y-4">
          {/** Task Title */}
          <div>
            <label className="text-gray-400 text-sm">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212]  border border-gray-600 text-gray-300 rounded-md outline-none  focus:border-highlight  transition"
              type="text"
              placeholder="e.g. Design a UI"
            />
          </div>

          {/** Task Date */}
          <div>
            <label className="text-gray-400 text-sm">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212] border border-gray-600 text-gray-300 rounded-md outline-none  focus:border-highlight transition"
              type="date"
            />
          </div>

          {/** Assign To */}
          <div>
            <label className="text-gray-400 text-sm">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212] border border-gray-600 text-gray-300 rounded-md outline-none  focus:border-highlight transition"
              type="text"
              placeholder="Employee name"
            />
          </div>

          {/** Category */}
          <div>
            <label className="text-gray-400 text-sm">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212] border border-gray-600 text-gray-300 rounded-md outline-none  focus:border-highlight transition"
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        {/** Description & Submit Button */}
        <div className="w-2/5 flex flex-col space-y-4">
          <label className="text-gray-400 text-sm">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-36 px-3 py-2 bg-[#121212] border border-gray-600 text-gray-300 rounded-md outline-none  focus:border-highlight transition"
            rows="5"
            placeholder="Task details..."
          ></textarea>
          
          <button className="w-full py-2 bg-button text-[#1e1e1e] hover:bg-buttonHover hover:text-white rounded-md text-xl transition">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
