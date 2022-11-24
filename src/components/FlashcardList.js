import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashcards}) {

    //looping through the flascards to return the flashcard component
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
      
    </div>
  )
}