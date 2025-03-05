import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);
  return (
    <div className='z-50 fixed inset-0 flex flex-col justify-center items-center bg-black text-gray-100'>

      <div className='mb-4 font-mono font-bold text-4xl'>{text}</div>

      <div className='relative bg-gray-800 rounded w-[200px] h-[2px] overflow-hidden'>
        <div className='bg-blue-500 shadow-[0_0_15px_#3b82f6] w-[40%] h-full animate-loading-bar'></div>
      </div>

    </div>
  )
}

export default LoadingScreen