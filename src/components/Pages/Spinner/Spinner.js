import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center min-h-screen text-center'>
            <div>
                <progress className="progress w-56 flex items-center jusitfy-center"></progress>
            </div>
        </div>
    );
};

export default Spinner;