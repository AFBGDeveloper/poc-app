import './home.css'
import React, { useEffect, useState } from 'react'
// import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Pagination from 'react-js-pagination'
import PokemonsList from '../../commons/PokemonsList'

import { getPokemon, getPokemonsList } from '../../services/Api'

const Home = () => {
    const [searching, setSearching] = useState('')
    const [pokemonsList, setPokemonsList] = useState([])
    // const [filteredPokemons, setFilteredPokemons] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [prevLink, setPrevLink] = useState(null)
    const [nextLink, setNextLink] = useState(null)
    const [pokemonsCount, setPokemonsCount] = useState(0)

    useEffect(() => {
        let mounted = true
        if (mounted) {
            getAllPokemonsList({})
        }

        return () => mounted = false
    }, [])

    function getAllPokemonsList({ url = undefined, offset = undefined }) {
        let urlParams = {
            url,
            offset,
        }
        if (url) {
            urlParams.url = url
        }
        if (offset) {
            urlParams.offset = offset
        }
        getPokemonsList(urlParams)
            .then(({ data }) => {
                setPokemonsCount(data.count)
                setPrevLink(data.previous)
                setPokemonsList(data.results)
                setNextLink(data.next)
            })
    }

    function handleChange(e) {
        setSearching(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (searching !== '') {
            getPokemon(searching.toLowerCase())
                .then((data) => {
                    console.log(data.results)
                    let filterdPokemonsArray = []
                    let PokemonFound = {
                        name: data.results[0].name,
                        url: data.results[0].url,
                    }
                    filterdPokemonsArray.push(PokemonFound)
                    // setFilteredPokemons(filterdPokemonsArray)
                })
                .catch(error => console.error(error))

        } else {
            // setFilteredPokemons([])
        }
    }

    function changeCurrentPage(currentPageNumber) {
        console.log("Current page:", currentPageNumber)
        if ((currentPageNumber < (currentPage - 1)) || (currentPageNumber > (currentPage + 1))) {
            let offset = 20 * (currentPageNumber - 1)
            console.log("Offset:", offset)
            getAllPokemonsList({ offset })
        }
        if (currentPageNumber === (currentPage - 1)) {
            getAllPokemonsList({ url: prevLink })
        }
        if (currentPageNumber === (currentPage + 1)) {
            getAllPokemonsList({ url: nextLink })
        }

        setCurrentPage(currentPageNumber)
    }

    return (
        <>
            <header className="home-header">
                <form
                    onSubmit={ handleSubmit }
                >
                    <Paper
                        className="search"
                        elevation={ 5 }
                    >
                        <SearchIcon />
                        <InputBase
                            className="search-input"
                            placeholder="Search a pokemon"
                            value={ searching }
                            onChange={ handleChange }
                        />
                    </Paper>
                </form>
            </header>

            <main className="home-main">
                <section>
                    <PokemonsList list={ pokemonsList } />

                    <div className="paginator-container">
                        <Pagination
                            totalItemsCount={ pokemonsCount }
                            onChange={ changeCurrentPage }
                            activePage={ currentPage }
                            itemsCountPerPage={ 20 }
                            pageRangeDisplayed={ 5 }
                            innerClass="react-pagination"
                            itemClass="page"
                            linkClass="link"
                            hideDisabled={ true }
                            hideFirstLastPages={ true }
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home