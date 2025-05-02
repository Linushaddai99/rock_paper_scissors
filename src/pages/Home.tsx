import React, { useReducer, useState } from 'react'
import ScoreHeader from '../components/ScoreHeader';
import Footer from '../components/Footer';
import { stateContext } from '../utils/useContext';
import { State } from '../utils/type';
import DisplayChoices from '../components/DisplayChoices';
import Rules from '../components/Rules';


export interface Context {
  state: State
  dispatch: React.ActionDispatch<[action: any]>
}
const Home = () => {

  const initialState = {
    playersChoice: '',
    computersChoice: '',
    level: 'basic',
    score: 0,
    result: {}
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [showRules, setShowRules] = useState(false)

  function reducer(state: State, action: any) {
    switch (action.type) {

      case 'play':
        return { 
          ...state,
          playersChoice: action.payload.pChoice,
          computersChoice: action.payload.cChoice,
          score: action.payload.result.winner === 'player' ? state.score + 1 : state.score,
          result: action.payload.result
        };

      case 'reset':
        return { 
          ...state,
          playersChoice: '',
          computersChoice: '',
          result: {winner: '', tag: ''}
        };

      case 'setLevel':
        return {
          ...state,
          level: action.payload.level,
          score: 0,
          result: {winner: '', tag: ''}
        };
      default:
        return state;
    }
  }


  return (
    <stateContext.Provider value={{state, dispatch}}>
      <div className='h-dvh w-dvh  flex flex-col justify-between p-6'>
        <ScoreHeader />


        <DisplayChoices  />

        {showRules && <Rules level={state.level} setShowRules={setShowRules} />}


        <Footer setShowRules={setShowRules} />
      </div>
    </stateContext.Provider>
  )
}

export default Home
