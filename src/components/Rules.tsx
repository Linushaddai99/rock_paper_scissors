import React from 'react'
import basicRules from '../assets/image-rules.svg'
import advancedRules from '../assets/image-rules-bonus.svg'

type RulesProp = {
    level: string;
    setShowRules: React.Dispatch<React.SetStateAction<boolean>>
}


const Rules: React.FC<RulesProp> = ({level, setShowRules}) => {    

    function onClose() {
        setShowRules(false)
    }

    const handleClose = (e: any) => {
        if(e.target.id === 'container') onClose();
      }

  return (
    <div id='container' onClick={handleClose} className='fixed inset-0 bg-black/40   z-50
        flex justify-center items-center' >
        <div className='bg-white p-5 rounded-md w-[390px]'>
            <img src={level == 'basic' ? basicRules : advancedRules} alt="" />
        </div>
    </div>
  )
}

export default Rules
