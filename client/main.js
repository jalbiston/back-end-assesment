const pokeContainer = document.querySelector('#pokemon-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/houses`

const pokeCallback = ({ data: pokemon }) => display(pokemon)
const errCallback = err => console.log(err.response.data)


const getPokemon = () => axios.get(baseURL).then(pokeCallback).catch(errCallback)
const createPokemon = body => axios.post(baseURL, body).then(pokeCallback).catch(errCallback)
const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(pokeCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let type = document.querySelector('#type')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        type: type.value, 
        imageURL: imageURL.value
    }

    createPokemon(bodyObj)

    name.value = ''
    price.value = ''
    imageURL.value = ''
}

function createPokeCard(pokemon) {
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('pokemon-card')

    houseCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="name">${pokemon.name}</p>
    <p class="type">${pokemon.type}</p>
    <button onclick="deletePokemon(${pokemon.id})">delete</button>
    `


    pokeContainer.appendChild(houseCard)
}



function displayPokemon(arr) {
    pokeContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPokeCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getPokemon()