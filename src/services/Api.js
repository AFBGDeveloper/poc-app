import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

const Axios = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
})

const getPokemonsList = ({ url = undefined, offset = undefined }) => {
    let urlRequest = `${API_URL}/pokemon`

    if (url) {
        urlRequest = url
    }
    if (offset) {
        urlRequest += `?offset=${offset}&limit=20`
    }
    return Axios.get(urlRequest)
}

const getPokemon = (name) => {
    return Axios.get(`${API_URL}/pokemon/${name}`)
}

const getPokemonColor = (id) => {
    return Axios.get(`${API_URL}/pokemon-color/${id}/`)
}

export {
    getPokemonsList,
    getPokemon,
    getPokemonColor
}