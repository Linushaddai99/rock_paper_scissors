// import React from 'react'
import triangle from '../assets/bg-triangle.svg'
import {motion, MotionConfig} from 'framer-motion'
import GameIcon from './GameIcon'
import useIsMdUp from '../utils/useIsMdUp'



const BasicSection = () => {
  const isMdUp = useIsMdUp();
  
  return (
    <div className=' min-h-[100%] flex flex-col justify-center items-center'>
        <div className='relative my-auto w-full'>
            <MotionConfig
            transition={{
                duration: .5,
                ease: 'easeInOut'
            }}
            >
                <motion.div 
                    className='absolute -top-15 md:-top-20 -left-16 md:-left-25 z-50'
                    initial={{opacity: 0, top: 200,  rotate: '-180deg'}}
                    animate={{opacity: 1, top: isMdUp ? -96 : -60,  rotate: "0deg"}}
                    >
                    <GameIcon name='paper'/>
                </motion.div>

                <motion.div 
                    className='absolute -top-10 md:-top-20 -right-16 md:-right-25 z-50'
                    initial={{opacity: 0, top: 200,  rotate: '-180deg'}}
                    animate={{opacity: 1, top: isMdUp ? -96 : -60,  rotate: "0deg"}}
                    >
                    <GameIcon name='scissors' />
                </motion.div>
                
                <motion.div 
                    className='absolute left-10 md:left-7 z-50'
                    initial={{opacity: 0, bottom: -200, rotate: '-180deg'}}
                    animate={{opacity: 1, bottom: isMdUp ? -96 : -60, rotate: "0deg"}}
                    >
                    <GameIcon name='rock' />
                </motion.div>
            </MotionConfig>

            <motion.div 
                className='inset-0 top-60 m-auto w-[200px]'
                initial={{opacity: 0, top: -30}}
                animate={{opacity: 1, top: 240}}
                > 
                <img src={triangle} className='w-full' alt="" />
            </motion.div>

        </div>
    </div>
  )
}

export default BasicSection
