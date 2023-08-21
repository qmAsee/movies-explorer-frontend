import React from 'react';

import Header from '../Header/Header';
import SearchArea from '../SearchArea/SearchArea';
import MoviesList from '../MoviesList/MoviesList';
import Footer from '../Footer/Footer';

import { filterMoviesQuery, filterMovieDuration } from '../../utils/utils';

export default function SavedMovies({ isLoggedIn, savedCards,  onDeleteCard}) {

    const [filteredCards, setFilteredCards] = React.useState(savedCards);
    const [isMovieShort, setIsMovieShort] = React.useState(false);
    const [isNotFound, setIsNotFound] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('')

    React.useEffect(() => {
        const moviesList = filterMoviesQuery(savedCards, searchQuery);
        setFilteredCards(isMovieShort ? filterMovieDuration(moviesList) : moviesList);
    }, [savedCards, searchQuery, isMovieShort])

    React.useEffect(() => {
        if (filteredCards.length === 0) {
            setIsNotFound(true)
        } else {
            setIsNotFound(false)
        }
    }, [filteredCards]);

    function handleShortMovies() {
        setIsMovieShort(!isMovieShort)
    }

    function onSearch(query) {
        setSearchQuery(query)
    }

    return (
        <section className='movies'>
            <Header isLoggedIn={isLoggedIn} />
            <SearchArea onSearch={onSearch} onFilter={handleShortMovies}/>
            <MoviesList
                cards={filteredCards}
                isSavedCard={true}
                isNotFound={isNotFound}
                onDeleteCard={onDeleteCard}
                savedCards={savedCards}
            />
            <Footer />
        </section>
    )
}