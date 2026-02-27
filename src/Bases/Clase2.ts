//Programacion Asincrona

//1. Callbacks

export function ObtenerDatosCallback(callback: Function){
    setTimeout(()=>{
        console.log("Accediendo a la bd");
        callback()
    },2000)
}

export function MostrarData(callback: Function){
    setTimeout(
        ()=>{
            callback("Validando Data")
        }
    )
    console.log("Mostrando data correctamente");
}

//Mediante Promesas


export function ObtenerDatosMediantePromesas(): Promise<string>{
    return new Promise((res,rej)=>{
        const exito: boolean = Math.random() > 0.3;
        setTimeout(()=>{
            if(true){
                res("Datos obtenidos de manera correcta");
            }else{
                rej("Error al obtener la informacion");
            }
        },2000)
    })
}


export function ValidarData(data:string): Promise<boolean|string>{
    return new Promise((resolve, reject)=>{
        const exito: boolean = Math.random() > 0.5;
        setTimeout(()=>{
            if(exito){
                resolve(true);
            }else{
                reject("Error al validar la informacion");
            }
        },1500)
    })
}


//Async Await


export async function ObtenerDatosAsyncAwait(): Promise<void>{
    try {
        const data = await ObtenerDatosMediantePromesas();
        await ValidarData(data);
        console.log("Validacion con Async Await")
    }
    catch (error) {
        console.log(error)
    }
}

export async function ObtenerPokemones(url:string){
    try {
        const pokemones = await fetch(url);
        return await pokemones.json();
    } catch (error) {
        return "Error al obtener los pokemones";
    }
}

