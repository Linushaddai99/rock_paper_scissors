// import React from 'react'
import {motion, MotionConfig} from 'framer-motion'
import pentagon from '../assets/bg-pentagon.svg'
import GameIcon from './GameIcon'
import useIsMdUp from '../utils/useIsMdUp'


const AdvancedSection = () => {
  const isMdUp = useIsMdUp();

  return (
    <div className='min-h-[100%] flex flex-col justify-center items-center'>
      <div className='relative my-auto w-full'>
        <MotionConfig
          transition={{
            duration: .5,
            ease: 'easeInOut'
          }}
        >

          <motion.div 
          className='absolute right-10 md:right-6 z-50'
          initial={{opacity: 0, top: 300, rotate: '-180deg'}}
          animate={{opacity: 1, top: isMdUp ? -120 : -110, rotate: "0deg"}}
            >
            <GameIcon name='scissors' />
          </motion.div>

          <motion.div 
            className='absolute -right-20 md:-right-35 top-0 z-50'
            initial={{opacity: 0, top: 300, rotate: '-180deg'}}
            animate={{opacity: 1, top: isMdUp ? -5 : 0, rotate: "0deg"}}
            >
            <GameIcon name='paper' />
          </motion.div>

          <motion.div 
            className='absolute -left-20 md:-left-35 top-0 z-50'
            initial={{opacity: 0, top: 400, rotate: '-180deg'}}
            animate={{opacity: 1, top: isMdUp ? -5 : 0, rotate: "0deg"}}
            >
            <GameIcon name='spock' />
          </motion.div>
          
          <motion.div
              className='absolute -right-10 md:-right-[70px] top-40 z-50'
              initial={{opacity: 0, top: 400, rotate: '-180deg'}}
              animate={{opacity: 1, top: 160, rotate: "0deg"}}
            >
            <GameIcon name='rock' />
          </motion.div>

          <motion.div 
            className='absolute -left-10 md:-left-[70px] top-40 z-50'
            initial={{opacity: 0, top: 400, rotate: '-180deg'}}
            animate={{opacity: 1, top: 160, rotate: "0deg"}}
            >
            <GameIcon name='lizard' />
          </motion.div>
        </MotionConfig>

        <motion.div 
          className='inset-0 top-60 m-auto w-[200px]'
          initial={{opacity: 0, top: -30}}
          animate={{opacity: 1, top: 240}}
          transition={{duration: .7, ease: 'easeInOut'}}
          > 
          <img src={pentagon} className='w-full' alt="" />
        </motion.div>
      </div>
  </div>
  )
}

export default AdvancedSection
