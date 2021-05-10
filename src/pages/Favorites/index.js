import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router-dom'
import PokemonsList from '../../commons/PokemonsList'
import useFavorites from '../../hooks/useFavorites'

const Favorites = () => {
    const history = useHistory()
    const { favorites } = useFavorites()

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
                    <PokemonsList list={ favorites } />
                </section>
            </main>
        </>
    )
}

export default Favorites
