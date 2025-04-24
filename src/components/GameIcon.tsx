import React from 'react'
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import lizard from '../assets/icon-lizard.svg'
import spock from '../assets/icon-spock.svg'
import {motion} from 'framer-motion'
import { useStateContext } from './useContext'
import { getComputerChoice } from '../utils/rps'
import { Choice } from '../utils/type'



type GameIconProps = {
    name: Choice | '';
}
const GameIcon: React.FC<GameIconProps> = ({name}) => {

  const contextData = useStateContext()
  const dispatch = contextData.dispatch;
  const state = contextData.state

  const style = {
    border: `20px solid ${name === 'rock' ? '#dd405d' : name === 'paper' ? '#5671f5' : name === 'scissors' ? '#eca922' : name === 'lizard' ? '#8c5de5' : '#52bed1'}`,
    background: '#f2f2f2',
    padding: '12px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
  }

  const icon = name === 'rock' ? rock : name === 'paper' ? paper : name === 'scissors' ? scissors : name === 'lizard' ? lizard : spock

  const action = { type: "play", payload: { pChoice: name, cChoice: getComputerChoice(state.level) } }

  return (
    <div>
      <motion.div 
        className={`${state.playersChoice.length ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-full flex justify-center items-center w-[150px] h-[150px]`} 
        style={style}
        onClick={()=>{state.playersChoice.length === 0 && dispatch(action) }}
        whileHover={{scale: 1.15}}
        whileTap={{scale: 0.15}}
      >
        <img src={icon} alt="" />
        </motion.div>
    </div>
  )
}

export default GameIcon
