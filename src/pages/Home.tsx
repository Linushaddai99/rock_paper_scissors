import React, { useEffect, useState, useReducer } from 'react'
// import { checkBasicWinner, checkAdvancedWinner } from '../utils/rps';
import getComputerChoice from '../utils/rps'
import ScoreHeader from '../components/ScoreHeader';
import Footer from '../components/Footer';
import GameIcon from '../components/GameIcon';
import { motion, MotionConfig} from 'framer-motion'
import BasicSection from '../components/BasicSection'
import AdvancedSection from '../components/AdvancedSection'

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

type State = {
  playersChoice: string
  computersChoic: string
  level: string
  score: number
}

const Home = () => {

    const [level, setLevel] = useState('basic')
    const [playersChoice, setPlayersChoice] = useState<Choice | ''>('')
    const [computersChoice, setComputersChoice] = useState<Choice | ''>('')

    const initialState = {
      playersChoice: '',
      computersChoic: '',
      level: 'basic',
      score: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state: State, action: any) {
      switch (action.type) {
        case 'play':
          return { 
            ...state,
            playersChoice: action.payload.pChoice,
            computersChoice: getComputerChoice(state.level)
          };
        case 'reset':
          return { 
            ...state,
            playersChoice: '',
            computersChoice: ''
          };
        case 'setLevel':
          return {
            ...state,
            level: action.payload.level
          };
        default:
          return state;
      }
    }



    const reset =() => {
      setPlayersChoice('');
      setComputersChoice('')
    }



    useEffect(()=>{
      // if (playersChoice && computersChoice) {
      //   // console.log(getRPSLSResult(playersChoice, computersChoice));
      //   console.log(playersChoice, computersChoice);
      // }

      console.log(playersChoice, computersChoice);

    })



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
              <div className=' cursor-not-allowed flex justify-center items-center gap-20 mt-70'>
                <div className='relative flex flex-col items-center justify-center'>
                  <motion.div
                    className='absolute bottom-11'
                    initial={{opacity: 0, bottom: -80, rotate: '-180deg'}}
                    animate={{opacity: 1, bottom: 44, rotate: '0deg'}}
                    transition={{duration: .5, ease: 'easeInOut'}}
                  >
                    <GameIcon name={playersChoice} setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
                  </motion.div>
                  <p className='text-[#f2f2f2] text-xl font-semibold'>YOU PICKED</p>
                </div>

                <div className='relative flex flex-col items-center justify-center'>
                  <motion.div
                  className='absolute right-2 -top-42'
                  initial={{opacity: 0, right: -60, rotate: '-180deg'}}
                  animate={{opacity: 1, right: 8, rotate: '0deg'}}
                  transition={{duration: .5, ease: 'easeInOut'}}
                  >
                    <GameIcon name={computersChoice}  setPlayersChoice={setPlayersChoice} playersChoice={playersChoice} />
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
