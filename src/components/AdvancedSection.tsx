import React from 'react'
import {motion, MotionConfig} from 'framer-motion'
import pentagon from '../assets/bg-pentagon.svg'
import GameIcon from './GameIcon'

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

type AdvancedSectionProps = {
    setPlayersChoice: React.Dispatch<React.SetStateAction<"" | Choice>>
    playersChoice: string
}

const AdvancedSection: React.FC<AdvancedSectionProps> = ({setPlayersChoice, playersChoice}) => {
  return (
    <div className=' min-h-[70%] flex flex-col justify-center items-center'>
      <div className='relative border w-full'>
        <MotionConfig
          transition={{
            duration: .5,
            ease: 'easeInOut'
          }}
        >
          <motion.div 
            className='absolute right-5 top-4 z-50'
            initial={{opacity: 0, top: 300, rotate: '-180deg'}}
            animate={{opacity: 1, top: 16, rotate: "0deg"}}
            >
            <GameIcon name='paper' setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
          </motion.div>

          <motion.div 
          className='absolute -top-30 right-40 z-50'
          initial={{opacity: 0, top: 300, rotate: '-180deg'}}
          animate={{opacity: 1, top: -120, rotate: "0deg"}}
            >
            <GameIcon name='scissors' setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
          </motion.div>
          
          <motion.div
              className='absolute right-15 top-52 z-50'
              initial={{opacity: 0, top: 400, rotate: '-180deg'}}
              animate={{opacity: 1, top: 208, rotate: "0deg"}}
            >
            <GameIcon name='rock' setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
          </motion.div>

          <motion.div 
            className='absolute top-52 left-15 z-50'
            initial={{opacity: 0, top: 400, rotate: '-180deg'}}
            animate={{opacity: 1, top: 208, rotate: "0deg"}}
            >
            <GameIcon name='lizard' setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
          </motion.div>

          <motion.div 
            className='absolute left-5 top-4 z-50'
            initial={{opacity: 0, top: 300, rotate: '-180deg'}}
            animate={{opacity: 1, top: 16, rotate: "0deg"}}
            >
            <GameIcon name='spock' setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
          </motion.div>
        </MotionConfig>

        <motion.div 
          className=' inset-0 top-60 m-auto w-[250px]'
          initial={{opacity: 0, top: -30}}
          animate={{opacity: 1, top: 240}}
          transition={{duration: .7, ease: 'easeInOut'}}
          > 
          <img src={pentagon} alt="" />
        </motion.div>
      </div>
  </div>
  )
}

export default AdvancedSection
