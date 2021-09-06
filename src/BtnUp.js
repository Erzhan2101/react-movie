import React from 'react';

const BtnUp = () => {

    const btnUp = () => {
        window.scroll(0, 0)
    }

    return (
        <div>
           <button className="btn-up" onClick={btnUp}><i className='bx bxs-up-arrow'/></button>
        </div>
    );
};

export default BtnUp;