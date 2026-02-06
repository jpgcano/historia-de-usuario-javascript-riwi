// ========================================================
// GESTIÓN DE DATOS CON OBJETOS, SETS Y MAPS EN JAVASCRIPT
// Historia de Usuario: Consolidar estructuras de datos avanzadas
// ========================================================

// ========================================================
// TASK 1: Creación del objeto de productos
// ========================================================
// Datos brutos de productos con propiedades: id, nombre, precio
const productosData = [
    { id: 1, nombre: "Laptop", precio: 900000, categoria: "Computación" },
    { id: 2, nombre: "Mouse", precio: 50000, categoria: "Periféricos" },
    { id: 3, nombre: "Teclado", precio: 120000, categoria: "Periféricos" },
    { id: 4, nombre: "Monitor", precio: 350000, categoria: "Computación" },
    { id: 5, nombre: "Headphones", precio: 200000, categoria: "Audio" }
];

// ========================================================
// TASK 5: Función de validación - Datos correctos
// ========================================================
// Valida que cada producto tenga id, nombre y precio válidos
const esProductoValido = (producto) => {
    return typeof producto.id === 'number' && 
           typeof producto.nombre === 'string' && 
           typeof producto.precio === 'number' && 
           producto.precio > 0 && 
           typeof producto.categoria === 'string';
};

// ========================================================
// TASK 2: Uso de Set en JavaScript - Números únicos
// ========================================================
console.log(">>> SISTEMA DE GESTIÓN DE DATOS <<<\n");

// Crear un Set con números que incluyen duplicados
const numerosConDuplicados = [10, 20, 30, 30, 40, 10, 50, 20, 60];
console.log("--- TASK 2: Conjuntos (Sets) ---");
console.log("Números originales (con duplicados):", numerosConDuplicados);

// Crear Set que automáticamente elimina duplicados
const setNumeros = new Set(numerosConDuplicados);
console.log("Números en el Set (únicos):", Array.from(setNumeros));

// Agregar un nuevo número al Set usando .add()
setNumeros.add(70);
console.log("Después de agregar 70:", Array.from(setNumeros));

// Verificar si un número existe dentro del Set usando .has()
const existe20 = setNumeros.has(20);
const existe100 = setNumeros.has(100);
console.log(`¿Existe el número 20? ${existe20}`);
console.log(`¿Existe el número 100? ${existe100}`);

// Eliminar un número del Set con .delete()
setNumeros.delete(30);
console.log("Después de eliminar 30:", Array.from(setNumeros));

// Recorrer el Set usando for...of
console.log("Recorriendo Set con for...of:");
for (const numero of setNumeros) {
    console.log(`  • ${numero}`);
}

// ========================================================
// TASK 1 & 5: Validación de productos
// ========================================================
console.log("\n--- TASK 1 & 5: Objetos de Productos (Validados) ---");

// Filtrar solo los productos válidos
const productos = productosData.filter(esProductoValido);

// Mostrar productos en tabla
console.log("Productos válidos:");
console.table(productos);

// ========================================================
// TASK 4: Iteración de Objetos - for...in
// ========================================================
console.log("\n--- TASK 4: Iteración con for...in ---");
console.log("Propiedades del primer producto:");
const primerProducto = productos[0];

for (const propiedad in primerProducto) {
    console.log(`  ${propiedad}: ${primerProducto[propiedad]}`);
}

// ========================================================
// TASK 4: Métodos de Object - keys, values, entries
// ========================================================
console.log("\nMétodos de Object (primer producto):");
console.log("Object.keys():", Object.keys(primerProducto));
console.log("Object.values():", Object.values(primerProducto));
console.log("Object.entries():");
Object.entries(primerProducto).forEach(([clave, valor]) => {
    console.log(`  ${clave}: ${valor}`);
});

// ========================================================
// TASK 3: Creación de un Map - Categoría → Productos
// ========================================================
console.log("\n--- TASK 3: Maps (Categoría → Nombres de Productos) ---");

// Crear un Map que relaciona categoría con nombres de productos
const mapCategorias = new Map();

// Agregar categorías y productos al Map
productos.forEach(producto => {
    if (!mapCategorias.has(producto.categoria)) {
        mapCategorias.set(producto.categoria, []);
    }
    mapCategorias.get(producto.categoria).push(producto.nombre);
});

// Mostrar el contenido del Map
console.log("Contenido del Map (categoría → productos):");
mapCategorias.forEach((nombres, categoria) => {
    console.log(`  ${categoria}: ${nombres.join(", ")}`);
});

// ========================================================
// TASK 4: Recorrido de Sets con for...of
// ========================================================
console.log("\n--- TASK 4: Recorrido de Set con for...of ---");
console.log("Números únicos en el Set (for...of):");
for (const numero of setNumeros) {
    console.log(`  • ${numero}`);
}

// ========================================================
// TASK 4: Recorrido de Maps con forEach()
// ========================================================
console.log("\n--- TASK 4: Recorrido de Map con forEach() ---");
console.log("Iteración descriptiva del Map:");
mapCategorias.forEach((productos, categoria) => {
    console.log(`  Categoría "${categoria}" contiene: ${productos.join(", ")}`);
});

// ========================================================
// RESUMEN FINAL - TASK 5: Pruebas Completas
// ========================================================
console.log("\n>>> RESUMEN FINAL DE PRUEBAS <<<");

console.log("\n1. Lista completa de productos (Objeto):");
console.log(`   Total de productos válidos: ${productos.length}`);
productos.forEach(producto => {
    console.log(`   - ID ${producto.id}: ${producto.nombre} ($${producto.precio})`);
});

console.log("\n2. Lista de números únicos (Set):");
console.log(`   Total de números únicos: ${setNumeros.size}`);
console.log(`   Números: ${Array.from(setNumeros).sort((a, b) => a - b).join(", ")}`);

console.log("\n3. Categorías y productos (Map):");
console.log(`   Total de categorías: ${mapCategorias.size}`);
mapCategorias.forEach((productosLista, categoria) => {
    console.log(`   ${categoria}: ${productosLista.join(", ")}`);
});

console.log("\n>>> FIN DEL PROGRAMA <<<");