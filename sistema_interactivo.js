// ============================================
// SISTEMA INTERACTIVO DE MENSAJES
// Programa que solicita datos del usuario y 
// muestra mensajes personalizados según validaciones
// ============================================

// TASK 1: Configuración inicial del proyecto
// Este archivo debe ejecutarse en el navegador (usa prompt() y alert())
console.log("Sistema interactivo iniciado...\n");

// ============================================
// TASK 2: Entrada de datos del usuario
// ============================================

// Solicitar nombre del usuario usando prompt()
const nombreUsuario = prompt("¿Cuál es tu nombre?");

// Solicitar edad del usuario usando prompt()
const edadIngresada = prompt("¿Cuántos años tienes?");

console.log(`Datos ingresados - Nombre: ${nombreUsuario}, Edad: ${edadIngresada}`);

// ============================================
// TASK 3: Validación de la edad
// ============================================

// Convertir el valor ingresado a número
const edad = Number(edadIngresada);

// Verificar si la edad es un número válido (usando isNaN y validación adicional)
const esNumeroValido = !isNaN(edad) && edad > 0 && Number.isInteger(edad);

// Si la entrada no es válida, mostrar error usando console.error()
if (!esNumeroValido) {
  console.error("Error: Por favor, ingresa una edad válida en números.");
} else {
  // ============================================
  // TASK 4: Condicionales y mensajes dinámicos
  // ============================================
  
  // Evaluar si es menor o mayor de edad
  if (edad < 18) {
    // Mensaje para menores de edad
    const mensajeMenor = `Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    alert(mensajeMenor);
    console.log(mensajeMenor);
  } else if (edad >= 18) {
    // Mensaje para mayores de edad
    const mensajeMayor = `Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    alert(mensajeMayor);
    console.log(mensajeMayor);
  }
}

console.log("\nPrograma finalizado.");
