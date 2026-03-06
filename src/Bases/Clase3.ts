import { PokemonInterface } from "./Clase1";


export class PokemonTrainer2{

    // readonly id: string;
    // readonly name: string;
    // constructor(id: string, name: string){
    //     this.id = id;
    //     this.name = name
    // }

    private pokemons: Array<PokemonInterface> = []; 
    constructor(
        readonly id: number,
        readonly name: string
    ){}

    setPokemon(pokemon: PokemonInterface){
            this.pokemons.push(pokemon);
    }
    
    getPokemons(): PokemonInterface[]{
        return this.pokemons
    }

    
}