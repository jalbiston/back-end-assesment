const e = require('express');
const pokemon = require('./db.json');
let id = 4



module.exports ={
    getPokemon: (req, res) =>{
        res.status(200).send(pokemon)
    },
    createPokemon: (req, res) => {
        let {name, type, imageURL}= req.body
        let poke = {
            id: id,
            name,
            type,
            imageURL
        }
        id++
        pokemon.push(poke)
        res.status(200).send(pokemon)
    },
    deletePokemon: (req, res) => {
        let {id}= req.params
        let index = pokemon.findIndex(elem => elem.id === +id)
    pokemon.splice(index, 1)
    res.status(200).send(pokemon)
    }
}