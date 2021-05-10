import './pokemons-list.css'
import React from 'react'
import PokemonCard from '../../commons/PokemonCard'

const PokemonsList = ({ list }) => {
    return (
        <ul className="pokemons-list">
            {
                (list.length > 0) ? (
                    list.map((pokemon) => {
                        let pokemonId = (pokemon.url).slice(34).replace("/", "")
                        return <PokemonCard key={ pokemonId } id={ pokemonId } name={ pokemon.name } img={ pokemon.img } />
                    })
                )
                    : (
                        <h4>There is not favorites pokemons</h4>
                    )
            }
        </ul>
    )
}

export default PokemonsList
