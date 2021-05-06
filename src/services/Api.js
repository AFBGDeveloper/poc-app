import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

const Axios = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
})

const getPokemonsList = () => {
    return Axios.get(`${API_URL}/pokemon?limit=20`)
}

export {
    getPokemonsList,
}