import React, { useEffect, useState } from 'react';

const CounterAnimation = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const targetCount = 2600;
        const duration = 3000;
        const step = (targetCount / duration) * 10;

        const interval = setInterval(() => {
            if (count < targetCount) {
                setCount(count + step);
            } else {
                setCount(targetCount);
                clearInterval(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            <div className='text-center mt-5'>
                <p className='text-3xl font-bold'>Over <span className='text-[#fe3e01]'>{Math.floor(count)}+</span> Wedding Events Managed</p>
            </div>
        </div>
    );
};

export default CounterAnimation;
