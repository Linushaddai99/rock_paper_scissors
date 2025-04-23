import React from 'react'
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import lizard from '../assets/icon-lizard.svg'
import spock from '../assets/icon-spock.svg'
import {motion} from 'framer-motion'

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

type GameIconProps = {
    name: Choice | '';
    playersChoice: string
    setPlayersChoice: React.Dispatch<React.SetStateAction<"" | Choice>>
}


const GameIcon: React.FC<GameIconProps> = ({name, playersChoice, setPlayersChoice}) => {
    const style = {
        border: `20px solid ${name === 'rock' ? '#dd405d' : name === 'paper' ? '#5671f5' : name === 'scissors' ? '#eca922' : name === 'lizard' ? '#8c5de5' : '#52bed1'}`,
        background: '#f2f2f2',
        padding: '12px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'

    }

    const icon = name === 'rock' ? rock : name === 'paper' ? paper : name === 'scissors' ? scissors : name === 'lizard' ? lizard : spock
  
    return (
    <div>
      <motion.div 
      className={`${playersChoice.length ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-full flex justify-center items-center w-[150px] h-[150px]`} 
      style={style}
      onClick={()=>{playersChoice.length === 0 && setPlayersChoice(name) }}
      whileHover={{scale: 1.15}}
      whileTap={{scale: 0.15}}
      >
        <img src={icon} alt="" />
      </motion.div>
    </div>
  )
}

export default GameIcon
