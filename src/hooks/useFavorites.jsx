import { useEffect, useState } from 'react'

function useFavorites(name) {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')))
        }
    }, [])

    const saveToLocalStorage = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    const isFavorite = (name) => {
        return favorites.some(pokemon => pokemon.name === name)
    }

    function addFavorite(pokemon) {
        let withNew = [...favorites, pokemon]
        console.log("New favorites", withNew)
        // setFavorites(withNew)
        setFavorites(favorites => ([...favorites, pokemon]))
        console.log('favorites', favorites)
        saveToLocalStorage(withNew)
    }

    function removeFavorite(pokemonName) {
        const withoutRemoved = favorites.filter(pokemon => pokemon.name !== pokemonName)
        setFavorites(favorites => ([...favorites, ...withoutRemoved]))
        saveToLocalStorage()
    }

    return {
        favorites,
        isFavorite,
        addFavorite,
        removeFavorite,
    }
}

export default useFavorites