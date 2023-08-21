import React from 'react';

import Header from '../Header/Header';
import SearchArea from '../SearchArea/SearchArea';
import MoviesList from '../MoviesList/MoviesList';
import Footer from '../Footer/Footer';

import { filterMoviesQuery, filterMovieDuration } from '../../utils/utils';

export default function SavedMovies({ isLoggedIn, savedCards,  onDeleteCard}) {

    const [filteredMovies, setFilteredMovies] = React.useState(savedCards);
    const [isMovieShort, setIsMovieShort] = React.useState(false);
    const [isNotFound, setIsNotFound] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('')

    React.useEffect(() => {
        const moviesList = filterMoviesQuery(savedCards, searchQuery);
        setFilteredMovies(isMovieShort ? filterMovieDuration(moviesList) : moviesList);
    }, [savedCards, searchQuery, isMovieShort])

    React.useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFound(true)
        } else {
            setIsNotFound(false)
        }
    }, [filteredMovies]);

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
                cards={filteredMovies}
                isSavedCard={true}
                isNotFound={isNotFound}
                onDeleteCard={onDeleteCard}
                savedCards={savedCards}
            />
            <Footer />
        </section>
    )
}