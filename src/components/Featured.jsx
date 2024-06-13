import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'> 
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'> Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <div onMouseEnter={() => setIsHovering1(true)} onMouseLeave={() => setIsHovering1(false)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter'>
                            {"FYDE".split('').map((item, index) =>
                                <motion.span key={index} className='inline-block' initial={{ y: "100%" }} animate={isHovering1 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}>
                                    {item}
                                </motion.span>
                            )}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span key={index} className='inline-block' initial={{ y: "100%" }} animate={isHovering2 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}>
                                    {item}
                                </motion.span>
                            )}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
