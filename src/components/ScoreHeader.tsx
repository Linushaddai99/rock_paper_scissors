import React from 'react'

type ScoreHeaderProps = {
  type: string;
  score: number;
}

const ScoreHeader: React.FC<ScoreHeaderProps> = ({type, score}) => {
  return (
    <div className='border-2 rounded-xl border-[#606e85] p-3 flex justify-between items-center'>
        <div className='flex flex-col text-[#f2f2f2] text-xl font-bold'>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
            {type === 'advanced' && <h2>LIZARD</h2>}
            {type === 'advanced' && <h2>SPROCK</h2>}
        </div>
        <div className='flex flex-col items-center w-[130px] bg-[#f2f2f2] rounded-xl p-2'>
            <h1 className='text-[#2a46c0] text-xl font-semibold'>SCORE</h1>
            <h1 className='text-gray-800 text-6xl font-bold'>{score}</h1>
        </div>
    </div>
  )
}

export default ScoreHeader
