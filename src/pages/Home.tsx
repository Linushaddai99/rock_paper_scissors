import React from 'react'
// import rpsChoices from '../utils/rps';
import { checkBasicWinner, getRandomNumber1to3 } from '../utils/rps';
import ScoreHeader from '../components/ScoreHeader';
import Footer from '../components/Footer';

const Home = () => {
    const [player, setPlayer] = React.useState(0);
    const [computer, setComputer] = React.useState(0);
    const [winner, setWinner] = React.useState('');

    const [rpsChoices, setRpsChoices] = React.useState([
        { name: 'rock', id: 1 },
        { name: 'paper', id: 2 },
        { name: 'scissors', id: 3 },
    ]); 

    const handlePlayerChoice = (choice: number) => {
        setPlayer(choice);
        const computerChoice = getRandomNumber1to3();
        setComputer(computerChoice);
        const winner = checkBasicWinner(choice, computerChoice);
        setWinner(winner);
    }


    const playerChoice = rpsChoices.find(choice => choice?.id === player)?.name;
    const computerChoice = rpsChoices.find(choice => choice.id === computer)?.name;

  return (
    <div className='absolute inset-0 m-auto lg:h-[700px] h-[100%] lg:w-[500px] w-[100%] p-3 bg-[#141539]'>
      <ScoreHeader type='basic' score={0} />
      <Footer />
    </div>
  )
}

export default Home
