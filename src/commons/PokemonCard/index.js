import './PokemonCard.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite'
import { getPokemon } from '../../services/Api'
import useFavorites from '../../hooks/useFavorites'

const PokemonCard = ({ id, name, imageUrl }) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites(name)

    const [img, setImg] = useState('')
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        let mounted = true
        getPokemon(name)
            .then(({ data }) => {
                if (mounted) {
                    setImg(data.sprites.other['official-artwork'].front_default)
                }
            })
            .catch(error => console.error(error))

        return () => mounted = false
    }, [name, id])

    useEffect(() => {
        if (isFavorite(name)) {
            setFavorite(true)
        }
    }, [name, isFavorite, favorite])

    const handleFavorite = () => {
        if (favorite) {
            removeFavorite(name)
            setFavorite(false)
        } else {
            addFavorite({ name, url: img })
            setFavorite(true)
        }
    }

    return (
        <li className="pokemon-card">
            {/* <Link className="link-to-details" to={ `${url}/details/${name}` }> */ }
            <Link className="link-to-details" to={ `/dashboard/details/${name}` }>
                <h2 className="pokemon-card-name">{ name }</h2>

                <img src={ img } className="pokemon-img" alt={ name } />
            </Link>

            <div className="actions-container">
                <Link className="learn-more-link" to={ `/dashboard/details/${name}` } >
                    LEARN MORE
                </Link>

                <IconButton
                    className={ (favorite) ? 'favorite' : '' }
                    aria-label="Add to favorites"
                    onClick={ handleFavorite }
                >
                    <Favorite />
                </IconButton>
            </div>
        </li>
    )
}

export default PokemonCard
