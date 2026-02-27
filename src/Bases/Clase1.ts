
//Javascript

// let numero: any = 1;
// var numero = 1;
// const numero2 = 2;

//Funciones



export function mostrarNombres(nombre: string): string{
    return "Hola "+nombre; 
}
export const mostrarNombreFuncionFlecha = (nombre: string):string => {
    return "Hola"+nombre
}

//Interfaces y Clases

export interface PokemonInterface{
    id: number, //2, 3,14 30423423
    name: string,
    age?: number
}

// const Pikachu: PokemonInterface = {
//     id: 1,
//     name: "Pikachu",
//     age: 12
// }

export class PokemonTrainer{

    readonly id: number;
    readonly name: string;
    private pokemons: Array<PokemonInterface> = [];
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }


    setPokemon(pokemon: PokemonInterface){
        this.pokemons.push(pokemon);
    }

    getPokemons(): PokemonInterface[]{
        return this.pokemons
    }
}



