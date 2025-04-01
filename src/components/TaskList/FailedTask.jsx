import React from "react";

const FailedTask = ({ data }) => {
    return (
        <>
            <div className='flex flex-col h-full w-[350px] p-5 bg-input rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-auto flex'>
                <button className='w-full bg-[#1c1c1c] rounded text-highlight font-medium py-2 px-5 text-xs'>Completed</button>

            </div>
        </div>
        </>
    );
};

export default FailedTask;
