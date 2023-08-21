import { moviesApiConfig } from "./utils";

class MoviesApi {
    constructor(config) {
        this.url = config.baseUrl;
        this.headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(new Error(`Произошла ошибка ${res.status}`))
    }

    getInitialMovies() {
        return fetch(this.url, {
            method: 'GET',
            headers: this.headers,
        })
        .then(res => this._checkResponse(res))
    }
}

export const moviesApi = new MoviesApi(moviesApiConfig);
