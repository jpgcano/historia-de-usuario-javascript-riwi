// =========================================================================
// GESTOR DE TAREAS - APLICACIÓN INTEGRAL
// DOM + Local Storage + Fetch API
// Módulo 3: JavaScript Moderno (ES6+)
// =========================================================================

// =========================================================================
// TASK 2: Selección de elementos del DOM
// =========================================================================
console.log("=== INICIALIZANDO APLICACIÓN ===\n");

// Selectores del formulario
const inputNombre = document.getElementById('inputNombre');
const inputDescripcion = document.getElementById('inputDescripcion');
const btnAgregar = document.getElementById('btnAgregar');
const btnSincronizar = document.getElementById('btnSincronizar');

// Selectores de la lista y mensajes
const listaTareas = document.getElementById('listaTareas');
const mensajeEstado = document.getElementById('mensajeEstado');
const indicadorCarga = document.getElementById('indicadorCarga');

// Loguear referencias para confirmar que existen
console.log("✓ Input nombre:", inputNombre);
console.log("✓ Input descripción:", inputDescripcion);
console.log("✓ Botón agregar:", btnAgregar);
console.log("✓ Botón sincronizar:", btnSincronizar);
console.log("✓ Lista de tareas:", listaTareas);

// =========================================================================
// TASK 4: Configuración de Local Storage
// =========================================================================
console.log("\n=== CONFIGURACIÓN DE PERSISTENCIA ===");

// Identificador único para el localStorage
const STORAGE_KEY = 'tareas_gestor';

// Arreglo global que almacena las tareas en memoria
let tareas = [];

// =========================================================================
// TASK 5: Configuración de API (Fetch)
// =========================================================================
console.log("\n=== CONFIGURACIÓN DE API ===");

// URL de la API pública para demostración (JSONPlaceholder)
// Usamos /todos para simular tareas
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

console.log("API Endpoint:", API_URL);

// =========================================================================
// TASK 2: Función de validación de entrada
// =========================================================================

/**
 * Valida que los campos del formulario no estén vacíos
 * @returns {boolean} true si son válidos, false si no
 */
const validarEntrada = () => {
    const nombre = inputNombre.value.trim();
    
    if (nombre === '') {
        mostrarMensaje('Por favor, escribe el nombre de la tarea', 'error');
        console.warn("⚠ Intento de agregar tarea vacía");
        return false;
    }
    
    if (nombre.length < 3) {
        mostrarMensaje('El nombre debe tener al menos 3 caracteres', 'error');
        console.warn("⚠ Nombre muy corto");
        return false;
    }
    
    return true;
};

// =========================================================================
// Función para mostrar mensajes dinámicos
// =========================================================================

/**
 * Muestra un mensaje de éxito o error en el DOM
 * @param {string} texto - El mensaje a mostrar
 * @param {string} tipo - 'exito' o 'error'
 */
const mostrarMensaje = (texto, tipo = 'exito') => {
    mensajeEstado.textContent = texto;
    mensajeEstado.classList.remove('mensaje-exito', 'mensaje-error');
    mensajeEstado.classList.add(`mensaje-${tipo}`);
    
    console.log(`${tipo === 'exito' ? '✓' : '✗'} ${texto}`);
    
    // Limpiar mensaje después de 4 segundos
    setTimeout(() => {
        mensajeEstado.classList.remove('mensaje-exito', 'mensaje-error');
    }, 4000);
};

// =========================================================================
// Función para mostrar/ocultar indicador de carga
// =========================================================================

/**
 * Muestra o oculta el spinner de carga
 * @param {boolean} mostrar - true para mostrar, false para ocultar
 */
const mostrarCarga = (mostrar = true) => {
    if (mostrar) {
        indicadorCarga.classList.add('activo');
    } else {
        indicadorCarga.classList.remove('activo');
    }
};

// =========================================================================
// TASK 4: Función para cargar tareas desde Local Storage
// =========================================================================

/**
 * Carga las tareas almacenadas en localStorage al iniciar la app
 */
const cargarTareasDelStorage = () => {
    console.log("\n=== CARGANDO TAREAS DEL STORAGE ===");
    
    try {
        const tareasGuardadas = localStorage.getItem(STORAGE_KEY);
        
        if (tareasGuardadas) {
            tareas = JSON.parse(tareasGuardadas);
            console.log(`✓ Se cargaron ${tareas.length} tareas del localStorage`);
            renderizarTareas();
        } else {
            console.log("ℹ No hay tareas guardadas en localStorage");
            tareas = [];
        }
    } catch (error) {
        console.error("✗ Error al cargar tareas del storage:", error);
        tareas = [];
    }
};

// =========================================================================
// TASK 4 & 5: Función para guardar tareas en Local Storage
// =========================================================================

/**
 * Guarda las tareas actuales en localStorage
 */
const guardarTareasEnStorage = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
        console.log(`💾 Tareas guardadas en localStorage. Total: ${tareas.length}`);
    } catch (error) {
        console.error("✗ Error al guardar en localStorage:", error);
        mostrarMensaje('Error al guardar las tareas', 'error');
    }
};

// =========================================================================
// TASK 3 & 4: Función para renderizar tareas en el DOM
// =========================================================================

/**
 * Borra la lista actual y redibuja todos los elementos del DOM
 */
const renderizarTareas = () => {
    // Limpiar lista
    listaTareas.innerHTML = '';
    
    // Si no hay tareas, mostrar mensaje
    if (tareas.length === 0) {
        listaTareas.innerHTML = '<div class="lista-vacia">📭 No hay tareas aún. ¡Agrega una!</div>';
        return;
    }
    
    // Crear elemento <li> para cada tarea
    tareas.forEach((tarea, indice) => {
        crearElementoTarea(tarea, indice);
    });
};

// =========================================================================
// TASK 3: Función para crear un elemento <li> en el DOM
// =========================================================================

/**
 * Crea dinámicamente un elemento <li> con la tarea y botones de acción
 * @param {Object} tarea - Objeto con propiedades de la tarea
 * @param {number} indice - Índice en el arreglo de tareas
 */
const crearElementoTarea = (tarea, indice) => {
    // Crear elemento <li>
    const li = document.createElement('li');
    
    // Crear contenedor del contenido
    const contenidoDiv = document.createElement('div');
    contenidoDiv.className = 'contenido-tarea';
    
    // Crear elemento para el nombre
    const nombreSpan = document.createElement('div');
    nombreSpan.className = 'nombre-tarea';
    nombreSpan.textContent = tarea.nombre || `Tarea ${indice + 1}`;
    
    // Crear elemento para la descripción
    const descripcionSpan = document.createElement('div');
    descripcionSpan.className = 'descripcion-tarea';
    descripcionSpan.textContent = tarea.descripcion || 'Sin descripción';
    
    // Crear elemento para el ID
    const idSpan = document.createElement('div');
    idSpan.className = 'id-tarea';
    idSpan.textContent = `ID: ${tarea.id || 'local'}`;
    
    // Agregar elementos al contenedor
    contenidoDiv.appendChild(nombreSpan);
    contenidoDiv.appendChild(descripcionSpan);
    contenidoDiv.appendChild(idSpan);
    
    // Crear contenedor de botones
    const botonesDiv = document.createElement('div');
    botonesDiv.className = 'botones-acciones';
    
    // Crear botón Editar
    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn-pequeño btn-editar';
    btnEditar.textContent = '✎ Editar';
    btnEditar.addEventListener('click', () => editarTarea(indice));
    
    // Crear botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-pequeño btn-eliminar';
    btnEliminar.textContent = '🗑 Eliminar';
    btnEliminar.addEventListener('click', () => eliminarTarea(indice));
    
    // Agregar botones al contenedor
    botonesDiv.appendChild(btnEditar);
    botonesDiv.appendChild(btnEliminar);
    
    // Agregar todo al <li> usando appendChild
    li.appendChild(contenidoDiv);
    li.appendChild(botonesDiv);
    
    // Insertar el <li> en la <ul> usando appendChild
    listaTareas.appendChild(li);
};

// =========================================================================
// TASK 3: Función para editar una tarea
// =========================================================================

/**
 * Permite editar una tarea existente
 * @param {number} indice - Índice de la tarea a editar
 */
const editarTarea = (indice) => {
    if (indice < 0 || indice >= tareas.length) {
        console.error("✗ Índice inválido para editar");
        return;
    }
    
    const tarea = tareas[indice];
    
    // Solicitar nuevo nombre
    const nuevoNombre = prompt(
        'Edita el nombre de la tarea:',
        tarea.nombre
    );
    
    if (nuevoNombre === null) {
        console.log("ℹ Edición cancelada");
        return;
    }
    
    if (nuevoNombre.trim() === '') {
        mostrarMensaje('El nombre no puede estar vacío', 'error');
        return;
    }
    
    // Actualizar tarea
    tareas[indice].nombre = nuevoNombre.trim();
    console.log(`✏ Tarea ${indice + 1} editada: "${nuevoNombre}"`);
    
    // Guardar y renderizar
    guardarTareasEnStorage();
    renderizarTareas();
    mostrarMensaje(`Tarea actualizada: ${nuevoNombre}`, 'exito');
};

// =========================================================================
// TASK 3 & 4: Función para eliminar una tarea
// =========================================================================

/**
 * Elimina una tarea del arreglo y del DOM
 * @param {number} indice - Índice de la tarea a eliminar
 */
const eliminarTarea = (indice) => {
    if (indice < 0 || indice >= tareas.length) {
        console.error("✗ Índice inválido para eliminar");
        return;
    }
    
    // Obtener datos de la tarea a eliminar
    const tareaEliminada = tareas[indice];
    
    // Eliminar del arreglo
    tareas.splice(indice, 1);
    console.log(`🗑 Tarea eliminada: "${tareaEliminada.nombre}"`);
    console.log(`📊 Total de tareas restantes: ${tareas.length}`);
    
    // Guardar y renderizar
    guardarTareasEnStorage();
    renderizarTareas();
    mostrarMensaje(`Tarea eliminada: ${tareaEliminada.nombre}`, 'exito');
};

// =========================================================================
// TASK 3: Función para agregar una nueva tarea localmente
// =========================================================================

/**
 * Agrega una tarea cuando el usuario hace clic en "Agregar"
 */
const agregarTarea = () => {
    // Validar entrada
    if (!validarEntrada()) {
        return;
    }
    
    // Obtener valores del formulario
    const nombre = inputNombre.value.trim();
    const descripcion = inputDescripcion.value.trim();
    
    // Crear objeto tarea
    const nuevaTarea = {
        id: Date.now(), // ID único basado en timestamp
        nombre: nombre,
        descripcion: descripcion || 'Sin descripción',
        completada: false,
        fechaCreacion: new Date().toLocaleString('es-ES')
    };
    
    // Agregar a arreglo
    tareas.push(nuevaTarea);
    console.log(`✅ Tarea agregada localmente: "${nombre}"`);
    console.log(`📊 Total de tareas: ${tareas.length}`);
    
    // Guardar en localStorage
    guardarTareasEnStorage();
    
    // Renderizar
    renderizarTareas();
    mostrarMensaje(`Tarea agregada: ${nombre}`, 'exito');
    
    // Limpiar formulario
    inputNombre.value = '';
    inputDescripcion.value = '';
    inputNombre.focus();
};

// =========================================================================
// TASK 5: Funciones de Fetch API - Comunicación con servidor
// =========================================================================

/**
 * FETCH GET: Obtiene las tareas del servidor
 */
const obtenerTareasDelServidor = async () => {
    console.log("\n=== FETCH GET: Obteniendo tareas del servidor ===");
    mostrarCarga(true);
    
    try {
        const respuesta = await fetch(API_URL);
        
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        
        const datos = await respuesta.json();
        console.log(`✓ Se obtuvieron ${datos.length} tareas del servidor`);
        console.log("Respuesta del servidor:", datos.slice(0, 3)); // Mostrar primeras 3
        
        return datos;
    } catch (error) {
        console.error("✗ Error al obtener tareas:", error);
        mostrarMensaje(`Error al obtener datos del servidor: ${error.message}`, 'error');
        return [];
    } finally {
        mostrarCarga(false);
    }
};

/**
 * FETCH POST: Crea una nueva tarea en el servidor
 * @param {Object} tarea - Objeto con los datos de la tarea
 */
const crearTareaEnServidor = async (tarea) => {
    console.log(`\n=== FETCH POST: Creando tarea "${tarea.nombre}" en servidor ===`);
    mostrarCarga(true);
    
    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: tarea.nombre,
                description: tarea.descripcion,
                completed: tarea.completada
            })
        });
        
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        
        const datosCreados = await respuesta.json();
        console.log("✓ Tarea creada en servidor:", datosCreados);
        console.log(`Respuesta del servidor: ID ${datosCreados.id}`);
        
        return datosCreados;
    } catch (error) {
        console.error("✗ Error al crear tarea:", error);
        mostrarMensaje(`Error al crear en servidor: ${error.message}`, 'error');
        return null;
    } finally {
        mostrarCarga(false);
    }
};

/**
 * FETCH PUT: Actualiza una tarea en el servidor
 * @param {Object} tarea - Objeto con los datos actualizados
 */
const actualizarTareaEnServidor = async (tarea) => {
    console.log(`\n=== FETCH PUT: Actualizando tarea ID ${tarea.id} en servidor ===`);
    mostrarCarga(true);
    
    try {
        const respuesta = await fetch(`${API_URL}/${tarea.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: tarea.nombre,
                description: tarea.descripcion,
                completed: tarea.completada
            })
        });
        
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        
        const datosActualizados = await respuesta.json();
        console.log("✓ Tarea actualizada en servidor:", datosActualizados);
        
        return datosActualizados;
    } catch (error) {
        console.error("✗ Error al actualizar tarea:", error);
        mostrarMensaje(`Error al actualizar en servidor: ${error.message}`, 'error');
        return null;
    } finally {
        mostrarCarga(false);
    }
};

/**
 * FETCH DELETE: Elimina una tarea del servidor
 * @param {number} id - ID de la tarea a eliminar
 */
const eliminarTareaDelServidor = async (id) => {
    console.log(`\n=== FETCH DELETE: Eliminando tarea ID ${id} del servidor ===`);
    mostrarCarga(true);
    
    try {
        const respuesta = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
        }
        
        console.log(`✓ Tarea ID ${id} eliminada del servidor`);
        
        return true;
    } catch (error) {
        console.error("✗ Error al eliminar tarea:", error);
        mostrarMensaje(`Error al eliminar del servidor: ${error.message}`, 'error');
        return false;
    } finally {
        mostrarCarga(false);
    }
};

/**
 * TASK 5: Sincroniza los datos locales con el servidor
 */
const sincronizarConAPI = async () => {
    console.log("\n=== SINCRONIZACIÓN CON API ===");
    
    if (tareas.length === 0) {
        mostrarMensaje('No hay tareas para sincronizar', 'error');
        return;
    }
    
    // Obtener tareas del servidor
    const tareasServidor = await obtenerTareasDelServidor();
    
    if (tareasServidor.length === 0) {
        mostrarMensaje('No se pudo conectar con el servidor', 'error');
        return;
    }
    
    // Crear la primera tarea local en el servidor (demostración POST)
    if (tareas.length > 0) {
        const primeraLocal = tareas[0];
        const tareaCreada = await crearTareaEnServidor(primeraLocal);
        
        if (tareaCreada) {
            console.log("\n✓ Sincronización completada exitosamente");
            mostrarMensaje(`Sincronizado: ${tareasServidor.length} tareas del servidor`, 'exito');
        }
    }
};

// =========================================================================
// Eventos de interacción del usuario
// =========================================================================

// Evento: Agregar tarea
btnAgregar.addEventListener('click', () => {
    console.log("\n>>> Botón AGREGAR clickeado");
    agregarTarea();
});

// Evento: Agregar tarea con Enter
inputNombre.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        console.log("\n>>> Enter presionado en input");
        agregarTarea();
    }
});

// Evento: Sincronizar con API
btnSincronizar.addEventListener('click', () => {
    console.log("\n>>> Botón SINCRONIZAR clickeado");
    sincronizarConAPI();
});

// =========================================================================
// Inicialización de la aplicación
// =========================================================================

console.log("\n=== STARTUP DE APLICACIÓN ===");
console.log("⏱ Cargando tareas almacenadas...");

// Cargar tareas del storage al iniciar
cargarTareasDelStorage();

console.log("✓ Aplicación lista para usar\n");
console.log("💡 Instrucciones:");
console.log("  1. Agrega tareas localmente (se guardan en localStorage)");
console.log("  2. Haz clic en 'Sincronizar API' para conectar con el servidor");
console.log("  3. Abre DevTools Console (F12) para ver todos los logs\n");
