// ============================================
// MINI-APP: LISTA DE NOTAS CON DOM Y LOCAL STORAGE
// Manipulación del DOM, agregar/eliminar elementos
// y persistencia de datos usando localStorage
// ============================================

// ============================================
// TASK 2: Selección e inspección de elementos
// ============================================

// Seleccionar elementos del DOM usando getElementById
const inputNota = document.getElementById('inputNota');
const btnAgregar = document.getElementById('btnAgregar');
const listaNotas = document.getElementById('listaNotas');

// Loguear en consola para confirmar que existen
console.log("=== REFERENCIAS DEL DOM ===");
console.log("✓ Input de nota:", inputNota);
console.log("✓ Botón Agregar:", btnAgregar);
console.log("✓ Lista de notas (ul):", listaNotas);

// ============================================
// TASK 5: Arreglo en memoria para las notas
// ============================================

// Arreglo que mantiene un registro de las notas en memoria
let notas = [];

// ============================================
// TASK 5: Cargar notas desde Local Storage al iniciar
// ============================================

// Función para cargar notas guardadas en localStorage
const cargarNotasDelStorage = () => {
    console.log("\n=== CARGANDO NOTAS DEL STORAGE ===");
    
    // Obtener datos del localStorage
    const notasGuardadas = localStorage.getItem('notas');
    
    if (notasGuardadas) {
        // Si existen notas guardadas, recuperarlas y parseearlas
        try {
            notas = JSON.parse(notasGuardadas);
            console.log(`✓ Se cargaron ${notas.length} notas del localStorage`);
            
            // Renderizar las notas en el DOM
            renderizarNotas();
        } catch (error) {
            console.error("Error al parsear las notas guardadas:", error);
            notas = [];
        }
    } else {
        console.log("ℹ No hay notas guardadas en localStorage");
        notas = [];
    }
};

// ============================================
// Función para guardar notas en Local Storage
// ============================================

// Guarda el arreglo de notas actuales en localStorage
const guardarNotasEnStorage = () => {
    localStorage.setItem('notas', JSON.stringify(notas));
    console.log(`💾 Notas guardadas en localStorage. Total: ${notas.length}`);
};

// ============================================
// Función para renderizar todas las notas
// ============================================

// Limpia la lista y redibuja todos los elementos
const renderizarNotas = () => {
    // Limpiar la lista actual
    listaNotas.innerHTML = '';
    
    if (notas.length === 0) {
        // Si no hay notas, mostrar mensaje
        listaNotas.innerHTML = '<div class="lista-vacia">No hay notas aún. ¡Agrega una!</div>';
        return;
    }
    
    // Recorrer el arreglo y crear un <li> para cada nota
    notas.forEach((nota, indice) => {
        crearElementoNota(nota, indice);
    });
};

// ============================================
// TASK 3: Crear elemento de nota en el DOM
// ============================================

// Crea un elemento <li> con la nota y botón de eliminar
const crearElementoNota = (textoNota, indice) => {
    // Crear elemento <li>
    const li = document.createElement('li');
    
    // Crear elemento para mostrar el texto
    const textoSpan = document.createElement('span');
    textoSpan.textContent = textoNota;
    textoSpan.className = 'texto-nota';
    
    // Crear botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'btn-eliminar';
    
    // Agregar evento click al botón eliminar
    btnEliminar.addEventListener('click', (e) => {
        e.stopPropagation();
        eliminarNota(indice);
    });
    
    // Agregar elementos al <li> usando appendChild
    li.appendChild(textoSpan);
    li.appendChild(btnEliminar);
    
    // Insertar el <li> en la <ul> usando appendChild
    listaNotas.appendChild(li);
};

// ============================================
// TASK 3: Función para agregar una nueva nota
// ============================================

// Agrega una nota cuando el usuario hace clic en "Agregar"
const agregarNota = () => {
    // Obtener el valor del input
    const textoNota = inputNota.value.trim();
    
    // Validar que el input no esté vacío
    if (textoNota === '') {
        console.warn("⚠ Intento de agregar nota vacía");
        alert('Por favor, escribe una nota antes de agregar.');
        return;
    }
    
    // Agregar la nota al arreglo
    notas.push(textoNota);
    console.log(`✅ Nota agregada: "${textoNota}"`);
    console.log(`📊 Total de notas: ${notas.length}`);
    
    // Guardar en localStorage
    guardarNotasEnStorage();
    
    // Renderizar las notas (mostrar la nueva)
    renderizarNotas();
    
    // Limpiar el input
    inputNota.value = '';
    
    // Enfocar de nuevo en el input
    inputNota.focus();
};

// ============================================
// TASK 4: Función para eliminar una nota
// ============================================

// Elimina una nota del arreglo y del DOM
const eliminarNota = (indice) => {
    if (indice < 0 || indice >= notas.length) {
        console.error("Índice inválido");
        return;
    }
    
    // Obtener el texto de la nota a eliminar (para logging)
    const notaEliminada = notas[indice];
    
    // Eliminar del arreglo
    notas.splice(indice, 1);
    console.log(`🗑 Nota eliminada: "${notaEliminada}"`);
    console.log(`📊 Total de notas restantes: ${notas.length}`);
    
    // Guardar cambios en localStorage
    guardarNotasEnStorage();
    
    // Renderizar nuevamente (sin el elemento eliminado)
    renderizarNotas();
};

// ============================================
// TASK 3: Eventos de interacción
// ============================================

// Evento click en el botón Agregar
btnAgregar.addEventListener('click', agregarNota);

// Evento Enter en el input para agregar nota
inputNota.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        agregarNota();
    }
});

// ============================================
// TASK 5: Inicialización - Cargar datos al abrir
// ============================================

console.log("=== INICIALIZANDO APLICACIÓN ===");
console.log("⏱ Cargando notas guardadas...");
cargarNotasDelStorage();
console.log("✓ Aplicación lista\n");
