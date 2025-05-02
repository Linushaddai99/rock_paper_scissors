// import React from 'react'
import { motion } from 'framer-motion';
import { useStateContext } from '../utils/useContext'

const ResultCard = () => {
  const contextData = useStateContext();
  const { dispatch, state } = contextData;

  const resetAction = { type: "reset" };

  return (
    <motion.div 
    className='absolute md:-bottom-100 -bottom-60 left-0 py-3 w-full text-center text-[#f2f2f2]'
    initial={{opacity: 0 }}
    animate={{opacity: [0, 1, 0, 1, 0, 1] }}
    transition={{duration: 0.7, ease: 'easeInOut', delay: .8}}
    >
      <h2 className='text-3xl mb-4'>{state.result.tag === 'draw' ? '' : state.result.tag}</h2>
      <p className='text-4xl font-semibold mb-4'>{state.result.winner === 'player' ? 'YOU WIN' : state.result.winner === 'computer' ? 'YOU LOSE' : 'DRAW'}</p>
      <button onClick={() => dispatch(resetAction)} className='cursor-pointer bg-[#f2f2f2] text-[#141539] text-sm py-2 w-[150px] rounded-lg'>PLAY AGAIN</button>
    </motion.div>
  )
}

export default ResultCard
