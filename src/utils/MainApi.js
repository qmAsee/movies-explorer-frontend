import { mainApiConfig } from "./utils";

class MainApi {
    constructor(config) {
        this.url = config.baseUrl;
        this.headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(new Error(`Произошла ошибка: ${res.status}`))
    }

    signup(name, email, password) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ name, email, password })
        })
        .then(res => this._checkResponse(res));
    }

    signin(email, password) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ email, password })
        })
        .then(res => this._checkResponse(res));
    }

    getData(token) {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => this._checkResponse(res))
    }

    getUserData() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => this._checkResponse(res));
    }

    setUserData(data) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        })
        .then(res => this._checkResponse(res))
    }

    addCard(card) {
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: card.country,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: 'https://api.nomoreparties.co' + card.image.url,
                trailerLink: card.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + card.image.formats.thumbnail.url,
                movieId: card.id,
                nameRU: card.nameRU,
                nameEN: card.nameEN,
            }),
        })
        .then(res => this._checkResponse(res));
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => this._checkResponse(res));
    }

    getCards() {
        return fetch(`${this.url}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => this._checkResponse(res))
    }

}

export const mainApi = new MainApi(mainApiConfig);
