
import { motion } from "framer-motion"
import React from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 gap-5'>
                    <motion.img
                        src={banner1}
                        animate={{y:[100,150,100]}}
                        transition={{duration:10,repeat:Infinity}}
                        className="max-w-sm  w-64 rounded-br-[40px] rounded-t-[40px] border-l- border-b-4 shadow-xl border-blue-500 " 
                    />
                    <motion.img
                        src={banner2}
                        animate={{x:[100,150,100]}}
                        transition={{duration:10,repeat:Infinity,delay:5}}
                        className="max-w-sm  w-64 rounded-br-[40px] rounded-t-[40px] border-l- border-b-4 shadow-xl border-blue-500 " 
                    />
                </div>

                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50, color: ['green'] }}
                        transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#b63f25 ','#244566','#b6258c'] }}
                            transition={{duration: 1.5, repeat: Infinity, delay:1}}>jobs
                        </motion.span> For You!
                    </motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;