// Define lista de productos con datos de ejemplo
const rawProductos = [
    { id: 1, nombre: "Laptop", precio: 900000 },
    { id: 2, nombre: "Mouse", precio: 50000 },
    { id: 3, nombre: "Teclado", precio: 120000 },
    { id: 4, nombre: "Monitor", precio: "gratis" } 
];


// Valida que el producto tenga datos correctos (id número, nombre texto, precio número positivo)
function validarProducto(producto) {
    if (typeof producto.id !== 'number') return false;
    if (typeof producto.nombre !== 'string' || producto.nombre.trim() === "") return false;
    if (typeof producto.precio !== 'number' || producto.precio <= 0) return false;
    return true;
}

// Filtra solo los productos válidos usando la función validar
const productos = rawProductos.filter(validarProducto);

// Muestra los productos válidos en consola
console.log("--- TASK 1 & 5: Lista de Productos Válidos (Array de Objetos) ---");
console.log(productos);

console.log("\n--- TASK 2: Uso de Set ---");

// Crea una lista de números con valores duplicados
const listaNumeros = [10, 20, 30, 30, 40, 10, 50];

// Convierte el array a un Set (elimina duplicados automáticamente)
const setNumeros = new Set(listaNumeros);

// Imprime el Set sin duplicados
console.log("Set inicial (sin duplicados):", setNumeros);

// Agrega un nuevo número al Set
setNumeros.add(60);
console.log("Después de add(60):", setNumeros);

// Verifica si el número 20 existe en el Set
console.log("¿Existe el 20?:", setNumeros.has(20));


// Elimina el número 40 del Set
setNumeros.delete(40);
console.log("Después de delete(40):", setNumeros);


console.log("Recorrido del Set con for...of:");
// Recorre cada número del Set e imprime su valor
for (const num of setNumeros) {
    console.log(`Número: ${num}`); [cite_start]
}


console.log("\n--- TASK 3: Creación de un Map ---");

// Crea un Map para asociar categorías con productos
const categoriaMap = new Map();


// Agrega pares de categoría-producto al Map
categoriaMap.set("Computación", "Laptop");
categoriaMap.set("Periféricos Entrada", "Mouse");
categoriaMap.set("Periféricos Salida", "Monitor"); 

// Imprime el Map con todas las categorías y productos
console.log("Map creado (Categoría -> Producto):", categoriaMap); [cite_start]

console.log("\n--- TASK 4: Iteraciones Avanzadas ---");

// Obtiene el primer producto de la lista validada
const productoEjemplo = productos[0];

// Recorre todas las propiedades del objeto e imprime cada clave y valor
console.log(">> Propiedades del objeto (for...in):");
for (const key in productoEjemplo) {
    console.log(`${key}: ${productoEjemplo[key]}`);
}

// Extrae y muestra las claves, valores y pares clave-valor del objeto
console.log(">> Métodos de Objetos:");
console.log("Keys:", Object.keys(productoEjemplo));      [cite_start]
console.log("Values:", Object.values(productoEjemplo));
console.log("Entries:", Object.entries(productoEjemplo));


// Recorre el Map y imprime cada categoría con su producto correspondiente
console.log(">> Recorrido del Map (forEach):");
categoriaMap.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} | Producto: ${valor}`);
});