import './style.css'
import { PokemonInterface, PokemonTrainer } from './Bases/Clase1.ts'
import { MostrarData, ObtenerDatosAsyncAwait, ObtenerDatosCallback, ObtenerDatosMediantePromesas, ObtenerPokemones, ValidarData } from './Bases/Clase2.ts';

const div = document.getElementById('app')

const Alejandro: PokemonTrainer = new PokemonTrainer(1,"Alejandro");

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
}).join("")}
</span>`

// console.log("Antes del callback");
// ObtenerDatosCallback(()=>{
//   MostrarData(console.log)}); //Callback hell
// console.log("Despues del callback");


// console.log("Antes del callback");
// ObtenerDatosMediantePromesas()
// .then((data)=>{
//   console.log(data);
//   return ValidarData(data);
// })
// .then(()=>{
//   console.log("Informacion validada")
// })
// .catch((error)=>{
//   console.log(error);
// })
// ;
// console.log("Despues del callback");


console.log("Antes del Async Await");
ObtenerDatosAsyncAwait()
console.log("Despues del Async Await");

console.log(await ObtenerPokemones('https://pokeapi.co/api/v2/pokemon'));


