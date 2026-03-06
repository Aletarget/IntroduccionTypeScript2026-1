import './style.css'
import { PokemonInterface, PokemonTrainer } from './Bases/Clase1.ts'

const div = document.getElementById('app')

const Alejandro: PokemonTrainer = new PokemonTrainer(1,"Alejandro");
console.log(Alejandro.id)
Alejandro.setPokemon({
  id: 2,
  name: "Charizard",
  age: 4
})
Alejandro.setPokemon({
  id: 1,
  name: "Pikachu",
  age: 3
})
Alejandro.setPokemon({
  id: 3,
  name: "Bulbasaur",
  age: 5
})

const pokemons: PokemonInterface[] = Alejandro.getPokemons();

//Map vs for each
//Map transforma y devuelve un arreglo con la misma cantidad
//de elementos mientras que foreach unicamente realiza procedimientos por cada elementos de un arreglo pero este no retorna ningun valor


// console.log(pokemons);
div!.innerHTML=`
<span><h2>Mis pokemones son:</h2>
${pokemons.map((pokemon) => {
  return `<p>${pokemon.name}</p>`
}).join('')}
</span>`