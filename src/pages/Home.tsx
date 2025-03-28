import React, { useEffect, useState } from 'react'
// import rpsChoices from '../utils/rps';
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import lizard from '../assets/icon-lizard.svg'
import spock from '../assets/icon-spock.svg'
import pentagon from '../assets/bg-pentagon.svg'
import triangle from '../assets/bg-triangle.svg'
import { checkBasicWinner, checkAdvancedWinner, getRandomRPSChoice, getRandomRPSLSChoice } from '../utils/rps';
import ScoreHeader from '../components/ScoreHeader';
import Footer from '../components/Footer';
import GameIcon from '../components/GameIcon';
import { motion, MotionConfig} from 'framer-motion'
import BasicSection from '../components/BasicSection'
import AdvancedSection from '../components/AdvancedSection'
import { div } from 'framer-motion/client'


const Home = () => {

    const [level, setLevel] = useState('basic')
    const [playersChoice, setPlayersChoice] = useState('')

    const [basicComputersChoice, setbasicComputersChoice] = useState(getRandomRPSChoice());
    const [advancedComputersChoice, setadvancedComputersChoice] = useState(getRandomRPSLSChoice());

    const reset =() => {
      setPlayersChoice('');
      setadvancedComputersChoice('')
      setbasicComputersChoice('')
    }


    useEffect(()=>{

    }, [])



  return (
    <div className='absolute inset-0 m-auto md:h-[100%] md:rounded-md h-[100%] md:w-[500px] w-[500px] p-3 bg-[#141539]'>
      <ScoreHeader type='basic' score={0} />

        {
          playersChoice === '' && (
            level === 'basic' ? (
              <BasicSection setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
            ) : (
              <AdvancedSection setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
            )
          )
        }

        <div>
          {
            playersChoice?.length ? (
              <div className=' cursor-not-allowed flex justify-center items-center gap-10 mt-45'>
                <div className='relative flex flex-col items-center justify-center'>
                  <motion.div
                    className='absolute bottom-6'
                    initial={{opacity: 0, bottom: -80, rotate: '-180deg'}}
                    animate={{opacity: 1, bottom: 27, rotate: '0deg'}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                  >
                    <GameIcon name={playersChoice} setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
                  </motion.div>
                  <p className='text-[#f2f2f2] text-xl font-semibold'>YOU PICKED</p>
                </div>

                <div className='relative flex flex-col items-center justify-center'>
                  <motion.div
                  className='absolute right-5 -top-25'
                  initial={{opacity: 0, right: -60, rotate: '-180deg'}}
                  animate={{opacity: 1, right: 20, rotate: '0deg'}}
                  transition={{duration: 1, ease: 'easeInOut'}}
                  >
                    <GameIcon name={level === 'basic' ? basicComputersChoice : advancedComputersChoice}  setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
                  </motion.div>
                  <p className='text-[#f2f2f2] text-xl font-semibold'>THE HOUSE PICKED</p>
                </div>
              </div>
            ) : ''
          }
        </div>

      <Footer level={level} setLevel={setLevel} reset={reset} />
    </div>
  )
}

export default Home
