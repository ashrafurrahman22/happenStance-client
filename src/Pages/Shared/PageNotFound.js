import React from 'react';
import gifhy from '../../assets/blogs.gif'

const PageNotFound = () => {
    return (
        <div className='min-h-screen'>
        <h2 className="text-2xl text-amber-400 font-semibold my-5 lg:ml-32 uppercase">Coming Soon...</h2>
        <div className='flex justify-center
        items-center'>
            <img src={gifhy} alt="" />
        </div>
    </div>
    );
};

export default PageNotFound;