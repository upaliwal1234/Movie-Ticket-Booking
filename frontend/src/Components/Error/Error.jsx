import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center  m-52">
            <h1 className='font-mono font-bold text-2xl m-4 text-gray-950'>Oops! Something went wrong</h1>
            <p className='font-mono font-bold text-xl m-4 text-gray-950'>We're sorry, but an error has occurred. Please try again later.</p>
        </div>
    );
};

export default ErrorPage;
