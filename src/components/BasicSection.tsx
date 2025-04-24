import React from 'react'
import triangle from '../assets/bg-triangle.svg'
import {motion, MotionConfig} from 'framer-motion'
import GameIcon from './GameIcon'



const BasicSection = () => {
  return (
    <div className=' min-h-[70%] flex flex-col justify-center items-center border border-amber-300'>
        <div className='relative my-auto w-full'>
            <MotionConfig
            transition={{
                duration: .5,
                ease: 'easeInOut'
            }}
            >
                <motion.div 
                    className='absolute -top-10 left-15 z-50'
                    initial={{opacity: 0, top: 200,  rotate: '-180deg'}}
                    animate={{opacity: 1, top: -40,  rotate: "0deg"}}
                    >
                    <GameIcon name='paper'/>
                </motion.div>

                <motion.div 
                    className='absolute right-15 -top-10 z-50'
                    initial={{opacity: 0, top: 200,  rotate: '-180deg'}}
                    animate={{opacity: 1, top: -40,  rotate: "0deg"}}
                    >
                    <GameIcon name='scissors' />
                </motion.div>
                
                <motion.div 
                    className='absolute -bottom-10 left-40 z-50'
                    initial={{opacity: 0, bottom: -200, rotate: '-180deg'}}
                    animate={{opacity: 1, bottom: -40, rotate: "0deg"}}
                    >
                    <GameIcon name='rock' />
                </motion.div>
            </MotionConfig>

            <motion.div 
                className='inset-0 top-60 m-auto w-[250px]'
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
