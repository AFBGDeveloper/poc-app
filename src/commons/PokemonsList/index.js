import './pokemons-list.css'
import React from 'react'
import PokemonCard from '../../commons/PokemonCard'

const PokemonsList = ({ list }) => {
    return (
        <ul className="pokemons-list">
            {
                // (filteredPokemons.length !== 0)
                //     ? filteredPokemons.map((pokemon) => {
                //         let pokemonId = (pokemon.url).slice(34).replace("/", "")
                //         return <PokemonCard key={ pokemonId } id={ pokemonId } name={ pokemon.name } img={ pokemon.img } />
                //     })
                // :
                list &&
                list.map((pokemon) => {
                    let pokemonId = (pokemon.url).slice(34).replace("/", "")
                    return <PokemonCard key={ pokemonId } id={ pokemonId } name={ pokemon.name } img={ pokemon.img } />
                })
            }
        </ul>
    )
}

export default PokemonsList
