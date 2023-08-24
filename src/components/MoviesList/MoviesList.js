import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

export default function MoviesList({ cards, onSaveCard, onDeleteCard, savedCards, reqError, isSavedCard, isLoading, isNotFound, showMoreCards, cardsAmount }) {

    function getSavedCard(savedCards, card) {
        
        return savedCards.find((savedCard) => savedCard.movieId === card.id);
    }

    return (
        <section className='movies'>
            {isLoading && <Preloader />}
            {!isLoading && isNotFound && <p className="movies__error">Ничего не найдено</p>}
            {!isNotFound && !isLoading && !reqError && (
                <>
                    <ul className='movies__list'>
                        {cards.map((card) => (
                            <MoviesCard 
                                cards={cards}
                                card={card}
                                onSaveCard={onSaveCard}
                                onDeleteCard={onDeleteCard}
                                isSavedCard={isSavedCard}
                                savedCards={savedCards}
                                saved={getSavedCard(savedCards, card)}
                                key={isSavedCard ? card._id : card.id}
                            />
                        ))}
                    </ul>

                    {cards.length < cardsAmount ? (
                        <button type='button' className='movies__more' onClick={showMoreCards}>
                            Ещё
                        </button>
                    ) : (null)
                    }    
                </> 
            )}
        </section>
    )
}