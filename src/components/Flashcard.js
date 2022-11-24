import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
    // create a variable for the card flippinf functionality
    const [flip, setFlip] = useState(false)
  return (
    // if flip is true, show answer, otherwise, show question
    <div className={`cardStyle ${flip ? 'flip' : ''}`} // if the flip is true, add this card class, otherwise leave it blank
    onClick={() => setFlip(!flip)}>
        <div className='front'>
            {flashcard.question}
            <div className='flashcard-options'>
                {flashcard.options.map(option => {
                    return <div className='flashcard-option' key={option}> {option} </div>
                })}
            </div>
        </div>
        <div className='back'>{flashcard.answer}</div>
      {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}

