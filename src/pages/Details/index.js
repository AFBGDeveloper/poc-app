import './details.css'
import React, { useEffect, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Favorite from '@material-ui/icons/Favorite'
import { useParams } from 'react-router-dom'
import { Tab, Tabs } from '@material-ui/core'
import TabPanel from './components/TabPanel'
import { useHistory } from 'react-router-dom'
import { getPokemon } from '../../services/Api'

const Details = () => {
    const { name } = useParams()
    const [tabValue, setTabValue] = useState(0)
    const [pokemonData, setPokemonData] = useState({})
    const history = useHistory()

    useEffect(() => {
        getPokemon(name)
            .then(({ data }) => {
                console.log(data)
                setPokemonData(data)
            })
            .catch(error => console.error(error))
    }, [name])

    const handleTabsChange = (event, newValue) => {
        setTabValue(newValue)
    }

    const handleClick = () => {
        history.push('/dashboard/home')
    }

    return (
        <>
            <header className="details-header">
                <IconButton
                    className="white-icon"
                    aria-label="Back to previous page"
                    onClick={ handleClick }
                >
                    <ArrowBack />
                </IconButton>

                <IconButton aria-label="Add to favorites">
                    <Favorite />
                </IconButton>
            </header>

            <main className="details-main" style={ { backgroundColor: '#48d0b0' } }>
                <section className="top">
                    <h1 className="pokemon-name capitalize">{ name }</h1>

                    <img src={ pokemonData.sprites ? pokemonData.sprites.other['official-artwork'].front_default : '' } alt="Bulbasaur" />
                </section>

                <section className="description-container">
                    <Tabs
                        value={ tabValue }
                        onChange={ handleTabsChange }
                        aria-label="Attributes tabs"
                    >
                        <Tab label="About" />
                        <Tab label="Stats" />
                    </Tabs>

                    <TabPanel value={ tabValue } index={ 0 }>
                        <div className="sizes-container">
                            <div>
                                <h4>Height</h4>
                                <p>{ pokemonData.height }cm</p>
                            </div>

                            <div>
                                <h4>Weight</h4>
                                <p>{ pokemonData.weight }kg</p>
                            </div>
                        </div>

                        <h3>Types</h3>
                        <ul className="stats-list">
                            {
                                !pokemonData.types
                                    ? ''
                                    : pokemonData.types.map((pokemonType, index) => {
                                        return (<li key={ index }>
                                            <h5 className="capitalize">{ pokemonType.type.name }</h5>
                                        </li>)
                                    })
                            }
                        </ul>
                    </TabPanel>

                    <TabPanel value={ tabValue } index={ 1 }>
                        <div className="stats-container">
                            <ul className="stats-list">
                                {
                                    !pokemonData.stats
                                        ? ''
                                        : pokemonData.stats.map((pokemonStat, index) => {
                                            return (<li key={ index }>
                                                <h5 className="capitalize">{ pokemonStat.stat.name.replace('-', ' ') }:</h5>
                                                <p>{ pokemonStat.base_stat }</p>
                                            </li>)
                                        })
                                }
                            </ul>
                        </div>
                    </TabPanel>
                </section>
            </main>
        </>
    )
}

export default Details
