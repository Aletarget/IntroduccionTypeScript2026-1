// ======================================================
// EJERCICIO 1: Procesamiento de productos
// ======================================================

interface Producto {
  nombre: string;
  precio: number;
}

const productos: Producto[] = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
  { nombre: "Monitor", precio: 300 }
];


// Parte 1: Usar forEach para mostar el producto y su precio correspondiente pero duplicado


// Parte 2: Usar map (aplicar 10% de descuento)


// Parte 3: Función que recibe un callback 
// El objetivo de este ejercicio es pasarle como argumento un callback que meustre solo los productos que cuesten más de 100.
function procesarProductos(productos: Producto[], callback: (p: Producto) => void) {
  productos.forEach((producto) => {
    callback(producto);
  });
}

// procesarProductos(productos, ??)


// ======================================================
// EJERCICIO 2: Lista de tareas
// ======================================================

interface Tarea {
  descripcion: string;
  completada: boolean;
}

const tareas: Tarea[] = [
  { descripcion: "Estudiar TypeScript", completada: true },
  { descripcion: "Hacer ejercicio", completada: false },
  { descripcion: "Leer un libro", completada: true },
  { descripcion: "Comprar comida", completada: false }
];

// Parte 1: Usar forEach para mostrar en consola las tareas y su estado de completado 
// Ejemplo: Tarea 1 - Completada: True


// Parte 2: Usar map (obtener solo descripciones) 
// Mostrar las en consola


// Parte 3: Función con callback 
// El objetivo de este ejercicio es invertir los estados de completado es decir si esta en true cambiarlo a false y viceversa
function procesarTareas(tareas: Tarea[], callback: (t: Tarea) => void) {
  tareas.forEach((tarea) => {
    callback(tarea);
  });
}

// procesarTareas(tareas, ??);

