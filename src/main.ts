import './style.css'
import { PokemonInterface, PokemonTrainer } from './Bases/Clase1.ts'
import { Repository, ObtenerDatos, ObtenerDatosMediantePromesas, ValidarData, ObtenerDatosAsyncAwait, ConsultarApi } from './Bases/Clase2.ts';

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
}).join('')}
</span>`


// const usuario = "User23"
// console.log("Antes del callback");
// ObtenerDatos("Paso 1", 2000,(data:string)=>{
//   console.log(data)
//   Repository(usuario,(data:String)=>{
//     console.log(data)
//   })
// });
// console.log("Despues del callback");

// console.log("Antes de la promesa");
// ObtenerDatosMediantePromesas("USER123")
// .then((mensajeDelResolve)=>{
//   console.log(mensajeDelResolve)
//   return ValidarData()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((error)=>{
//   console.log(error)
// })
// console.log("Despues de la promesa");

console.log("Antes de la promesa");
ObtenerDatosAsyncAwait();
console.log("Despues de la promesa");


const results = await ConsultarApi('https://pokeapi.co/api/v2/pokemon');
console.log(results)