import { shortMovieDuration } from "./constanst";

import { MAX_WIDTH_MOVIES_AMOUNT,
    MEDIUM_WIDTH_MOVIES_AMOUNT,
    MIN_WIDTH_MOVIES_AMOUNT,
    MAX_WIDTH,
    MEDIUM_WIDTH,
    PREMEDIUM_WIDTH_MOVIES_AMOUNT,
    MIN_WIDTH,
} from './constanst';

export const moviesApiConfig = {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const mainApiConfig = {
    baseUrl: 'https://api.qmase.movies-explorer.nomoredomains.work',
}

export const EMAIL_PATTERN = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.{1,1}[a-z]{2,}';

export const getMoviesAmount = () => {
    const displayWidth = window.innerWidth;

    if (displayWidth > MAX_WIDTH) {
        return MAX_WIDTH_MOVIES_AMOUNT;
    } else if (displayWidth <= MAX_WIDTH && displayWidth > MEDIUM_WIDTH) {
        return MEDIUM_WIDTH_MOVIES_AMOUNT;
    } else if (displayWidth <= MEDIUM_WIDTH && displayWidth > MIN_WIDTH) {
        return PREMEDIUM_WIDTH_MOVIES_AMOUNT;
    } else if (displayWidth <= MIN_WIDTH) {
        return MIN_WIDTH_MOVIES_AMOUNT;
    }
}

export function filterMovieDuration(movies) {
    return movies.filter((movie) => movie.duration < shortMovieDuration)
}

export function convertDuration(duration) {
    const hour = Math.floor(duration / 60);
    const minute = duration % 60

    return `${hour}ч${minute}мин`
}

export function filterMoviesQuery(movies, query) {
    const moviesQuery = movies.filter((movie) => {
        const movieQuery = query.toLowerCase().trim()
        const movieEn = String(movie.nameEN).toLowerCase().trim();
        const movieRu = String(movie.nameRU).toLowerCase().trim();

        return movieRu.indexOf(movieQuery) !== -1 || movieEn.indexOf(movieQuery) !== -1;
    });

    return moviesQuery;
}

