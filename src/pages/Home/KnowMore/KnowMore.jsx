import React from 'react';
import { Link } from 'react-router-dom';

const KnowMore = () => {
    return (
        <div>
            <div data-aos="fade-down" className="flex justify-center items-center py-2">
                <hr className="h-[4px] border-l-4" style={{ borderColor: '#fe3e01', height: '50px' }} />
            </div>
            <h2 className='text-2xl font-semibold text-center mb-5'>To know more about us <Link className='text-[#fe3e01]' to="/aboutUs">Click here</Link></h2>
        </div>
    );
};

export default KnowMore;