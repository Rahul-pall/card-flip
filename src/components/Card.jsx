import React, { useState } from 'react'
import {motion} from 'framer-motion'
import img3 from '../assets/img01.webp';
import img4 from '../assets/img02.webp';

const Card = () => {
  const [imgflip,setimgflip]=useState(false);
  const [imganim,setimganim]=useState(false);

  const handleflip=()=>{
              if(!imganim){
                            setimgflip(!imgflip);
                            setimganim(true)
              }
  }
  return (
    <>
      <div className="flex items-center justify-center cursor-pointer bg-gray-700 w-[100%] h-[100vh]">
              <div className="flip-card w-[600px] h-[360px]" onClick={handleflip}>
              <motion.div 
              className='flip-card-inner w-[100%] h-[100%]'
              // initial={false}
              animate={{rotateY:imgflip?180:360}}
              transition={{duration:0.6,animationDirection:"normal"}}
              onAnimationComplete={()=>setimganim(false)}
              >
              <div className="flip-card-front w-[100%] h-[100%] bg-cover text-white rounded-lg p-4" style={{backgroundImage:`url(${img3})`}}>
                   <h1 className='text-center text-3xl'>Mountain</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit?</p>
              </div>
              <div className="flip-card-back w-[100%] h-[100%] bg-cover text-white rounded-lg" style={{backgroundImage:`url(${img4})`}}>

              </div>

              </motion.div>
              </div>
      </div>
    </>
  )
}

export default Card
