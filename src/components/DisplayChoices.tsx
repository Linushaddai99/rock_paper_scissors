import React from 'react'
import GameIcon from './GameIcon'
import { motion } from 'framer-motion'
import { useStateContext } from '../utils/useContext'
import BasicSection from './BasicSection'
import AdvancedSection from './AdvancedSection'
import useIsMdUp from '../utils/useIsMdUp'
import ResultCard from './ResultCard'


const DisplayChoices= () => {
    const contextData = useStateContext();
    const { state } = contextData;

      const isMdUp = useIsMdUp();

      const style = {
        // borderRadius: '100px',
        // boxShadow: 'hsl(214, 47%, 24%) 0px 0px 0px 30px, hsl(214, 47%, 23%) 0px 0px 0px 60px, hsl(214, 47%, 22%) 0px 0px 0px 90px'
      }

    return (
        <div>
            {
                state.playersChoice.length === 0 ? (
                    <div className='flex justify-center items-center'>
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
                            <div className='relative'>
                                <div className='cursor-not-allowed md:-mt-50 flex items-center justify-around'>
                                    <div className={`${isMdUp ? 'flex-col' : 'flex-col-reverse'} relative flex items-center justify-around gap-8`}>
                                        <p className='text-[#f2f2f2] md:text-xl text-sm font-semibold tracking-widest'>YOU PICKED</p>
                                        <motion.div
                                            className='absolute'
                                            initial={{opacity: 0, bottom: isMdUp ? -350 : -150, rotate: '-180deg'}}
                                            animate={{opacity: 1, bottom: isMdUp ? -200 : 50, rotate: '0deg'}}
                                            transition={{duration: .5, ease: 'easeInOut'}}
                                            >
                                            <GameIcon name={state.playersChoice} />
                                        </motion.div>
                                    </div>

                                    <div className={`${isMdUp ? 'flex-col' : 'flex-col-reverse'} relative flex flex-col items-center justify-between gap-8`}>
                                        <p className='text-[#f2f2f2] md:text-xl text-sm font-semibold tracking-widest'>THE HOUSE PICKED</p>
                                        <motion.div
                                            className='absolute z-50'
                                            initial={{opacity: 0, right: -100, bottom: isMdUp ? -200 : 50, rotate: '-180deg'}}
                                            animate={{opacity: 1, right: 10, bottom: isMdUp ? -200 : 50, rotate: '0deg'}}
                                            transition={{duration: .5, ease: 'easeInOut', delay: .4}}
                                            >
                                            <GameIcon name={state.computersChoice} />
                                        </motion.div>
                                        <motion.div
                                            className='absolute opacity-80'
                                            style={style}
                                            initial={{opacity: 0, right: 10, bottom: isMdUp ? -200 : 50, rotate: '0deg'}}
                                            animate={{opacity: 1, right: 10, bottom: isMdUp ? -200 : 50, rotate: '0deg'}}
                                            >
                                            <GameIcon name='empty' />
                                        </motion.div>
                                    </div>
                                </div>

                                <ResultCard />
                            </div>
                            ) : ''
                        }
                    </div>
                )
            }
        </div>
    )
}

export default DisplayChoices
