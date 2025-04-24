import React, { useEffect, useReducer } from 'react'
// import { checkBasicWinner, checkAdvancedWinner } from '../utils/rps';
import ScoreHeader from '../components/ScoreHeader';
import Footer from '../components/Footer';
import GameIcon from '../components/GameIcon';
import { motion } from 'framer-motion'
import BasicSection from '../components/BasicSection'
import AdvancedSection from '../components/AdvancedSection'
import { stateContext } from '../components/useContext';
import { State } from '../utils/type';


export interface Context {
  state: State
  dispatch: React.ActionDispatch<[action: any]>
}
const Home = () => {

  const initialState = {
    playersChoice: '',
    computersChoice: '',
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
          computersChoice: action.payload.cChoice
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



  return (
    <stateContext.Provider value={{state, dispatch}}>
      <div className='absolute inset-0 m-auto md:h-[100%] md:rounded-md h-[100%] md:w-[500px] w-[500px] p-3 bg-[#141539]'>
        <ScoreHeader type='basic' score={0} />


        {
          state.playersChoice === '' ? (
            <div>
              {
                state.level === 'basic' ? (
                  <BasicSection />
                ) : (
                  <AdvancedSection />
                )
              }
            </div>
          ) : (
            <div>
            {
              state.playersChoice?.length ? (
                <div className=' cursor-not-allowed flex justify-center items-center gap-20 mt-70'>
                  <div className='relative flex flex-col items-center justify-center'>
                    <motion.div
                      className='absolute bottom-11'
                      initial={{opacity: 0, bottom: -80, rotate: '-180deg'}}
                      animate={{opacity: 1, bottom: 44, rotate: '0deg'}}
                      transition={{duration: .5, ease: 'easeInOut'}}
                    >
                      <GameIcon name={state.playersChoice} />
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
                      <GameIcon name={state.computersChoice} />
                    </motion.div>
                    <p className='text-[#f2f2f2] text-xl font-semibold'>THE HOUSE PICKED</p>
                  </div>
                </div>
              ) : ''
            }
          </div>
          )
        }


        <Footer />
      </div>
    </stateContext.Provider>
  )
}

export default Home
