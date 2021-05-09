import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router-dom'
import PokemonsList from '../../commons/PokemonsList'

const POKEMONSLIST = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
]

const Favorites = () => {
    const history = useHistory()

    const handleRedirect = () => {
        history.push('/dashboard/home')
    }

    return (
        <>
            <header className="details-header">
                <IconButton
                    aria-label="Back to previous page"
                    onClick={ handleRedirect }
                >
                    <ArrowBack />
                </IconButton>
            </header>

            <main className="home-main">
                <section>
                    <PokemonsList list={ POKEMONSLIST } />
                </section>
            </main>
        </>
    )
}

export default Favorites
