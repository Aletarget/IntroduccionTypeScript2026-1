//Programación Asincrona

export function ObtenerDatos(data: string, time:number, callback: Function) {
    setTimeout(()=>{
        callback(data);
    },time);
}

export function Repository(user: string, callback: Function){
    setTimeout(()=>{
        console.log(user)
        callback("Trayendo informacion de la BD");
    },2000)
}

export function ObtenerDatosMediantePromesas(user:string): Promise<string>{
    return new Promise((resolve, reject)=>{
        const exito: boolean = true;
        //Logica en la base de datos o llamado de una funcion que requiera de tiempo
        setTimeout(()=>{
            console.log(exito)
            if(exito){
                resolve(`Datos del usuario ${user} recibidos correctamente`);    
            }else{
                reject("Datos erroneos, intente nuevamente")
            }
        },2000)
    })
}

export function ValidarData(): Promise<boolean|string>{
    return new Promise((resolver, rechazar)=>{
        const exito: boolean = true;
        setTimeout(()=>{
            if(exito){
                resolver(true);
            }else{
                rechazar("Ocurrio un error al validar la data");
            }
        },1500)
    })
}


export async function ObtenerDatosAsyncAwait(){
    try {
        await ObtenerDatosMediantePromesas("user123");
        const data = await ValidarData();

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function ConsultarApi(url:string){
    const response = await fetch(url);
    return response.json();
}
