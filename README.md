# 📚 Historias de Usuario - Módulo 3: JavaScript Moderno

Proyecto educativo que implementa 4 historias de usuario integrando conceptos fundamentales de JavaScript ES6+, manipulación del DOM, persistencia de datos y comunicación con APIs.

---

## 📖 Tabla de Contenidos

1. [Historia 1: Sistema Interactivo de Mensajes](#historia-1-sistema-interactivo-de-mensajes)
2. [Historia 2: Gestión de Datos (Objetos, Sets, Maps)](#historia-2-gestión-de-datos)
3. [Historia 3: Mini-App de Notas (DOM y Local Storage)](#historia-3-mini-app-de-notas)
4. [Historia 4: Aplicación Web Integral](#historia-4-aplicación-web-integral)
5. [Temas Cubiertos](#temas-cubiertos)
6. [Cómo Usar](#cómo-usar)

---

## 🎯 Historia 1: Sistema Interactivo de Mensajes

**Archivo**: `sistema_interactivo.js`

### Objetivo
Implementar un programa interactivo que solicite datos al usuario, los valide y muestre mensajes dinámicos según condiciones.

### Temas Cubiertos
- ✅ Declaración de variables con `let` y `const`
- ✅ Tipos de datos en JavaScript
- ✅ Funciones de interacción: `prompt()`, `alert()`
- ✅ Métodos de consola: `console.log()`, `console.error()`
- ✅ Condicionales: `if`, `else if`, `else`
- ✅ Conversión de tipos: `Number()`
- ✅ Validación de entrada: `isNaN()`, `Number.isInteger()`
- ✅ Template literals (backticks)
- ✅ Buenas prácticas: camelCase, nomenclatura descriptiva

### Tareas Implementadas

| TASK | Descripción | Estado |
|------|-------------|--------|
| TASK 1 | Configuración inicial del proyecto con comentarios | ✅ Completa |
| TASK 2 | Entrada de datos con `prompt()` | ✅ Completa |
| TASK 3 | Validación de edad (número válido) | ✅ Completa |
| TASK 4 | Condicionales y mensajes dinámicos | ✅ Completa |

### Criterios de Aceptación
- ✅ Usa `let` y `const` (no `var`)
- ✅ Valida que la edad sea un número válido
- ✅ Muestra mensajes personalizados según edad
- ✅ Usa `console.error()` para errores
- ✅ Código comentado en cada sección

---

## 🎯 Historia 2: Gestión de Datos

**Archivo**: `gestion_datos.js`

### Objetivo
Consolidar el uso de estructuras de datos avanzadas: objetos, Sets y Maps para organizar y manipular información eficientemente.

### Temas Cubiertos
- ✅ Creación y manipulación de objetos literales
- ✅ Arreglos y métodos: `filter()`, `forEach()`, `push()`
- ✅ Sets: creación, `.add()`, `.has()`, `.delete()`, `.size`
- ✅ Maps: creación, `.set()`, `.get()`, `.has()`, `.forEach()`
- ✅ Iteración: `for...in`, `for...of`, `forEach()`
- ✅ Métodos de Object: `Object.keys()`, `Object.values()`, `Object.entries()`
- ✅ Función flecha: `=>`
- ✅ Validaciones de datos
- ✅ Conversión de tipos: `Array.from()`

### Tareas Implementadas

| TASK | Descripción | Estado |
|------|-------------|--------|
| TASK 1 | Crear objeto de productos con propiedades | ✅ Completa |
| TASK 2 | Usar Set para eliminar duplicados | ✅ Completa |
| TASK 3 | Crear Map con categorías y productos | ✅ Completa |
| TASK 4 | Iteración con for...in, for...of, forEach() | ✅ Completa |
| TASK 5 | Validación de datos y pruebas | ✅ Completa |

### Criterios de Aceptación
- ✅ Usa `let` y `const`
- ✅ Implementa objetos, Sets y Maps correctamente
- ✅ Utiliza métodos de iteración y Object
- ✅ Aplica validaciones de entrada
- ✅ Código comentado y organizado

---

## 🎯 Historia 3: Mini-App de Notas

**Archivos**: `manipulacion_dom.html`, `manipulacion_dom.js`

### Objetivo
Crear una aplicación web simple de lista de notas que permita agregar/eliminar elementos en el DOM y persistir datos usando Local Storage.

### Temas Cubiertos
- ✅ Selección de elementos DOM: `getElementById()`, `querySelector()`
- ✅ Creación dinámica de elementos: `createElement()`
- ✅ Manipulación del DOM: `appendChild()`, propiedades de nodos
- ✅ Eventos del DOM: `addEventListener()`, `click`, `keypress`
- ✅ Manejo de contenido: `textContent`, `innerHTML`
- ✅ Local Storage: `setItem()`, `getItem()`
- ✅ Serialización JSON: `JSON.stringify()`, `JSON.parse()`
- ✅ Gestión de estado (arreglo en memoria)
- ✅ Validación de entrada
- ✅ CSS moderno: Flexbox, gradientes, transiciones

### Tareas Implementadas

| TASK | Descripción | Estado |
|------|-------------|--------|
| TASK 1 | Estructura HTML: input, botón, lista | ✅ Completa |
| TASK 2 | Selección e inspección de elementos | ✅ Completa |
| TASK 3 | Agregar notas al DOM con `appendChild()` | ✅ Completa |
| TASK 4 | Eliminar notas del DOM | ✅ Completa |
| TASK 5 | Persistencia con Local Storage | ✅ Completa |
| TASK 6 | Validación y pruebas | ✅ Completa |

### Criterios de Aceptación
- ✅ Usa API del DOM: `appendChild()`, `removeChild()`
- ✅ Mínimo dos métodos de selección
- ✅ Modifica contenido con `textContent`
- ✅ Local Storage persiste tras recargar
- ✅ Código comentado y con `let`/`const`

---

## 🎯 Historia 4: Aplicación Web Integral

**Archivos**: `index.html`, `app.js`

### Objetivo
Desarrollar una aplicación completa que integre DOM, Local Storage y Fetch API con operaciones CRUD completas.

### Temas Cubiertos
- ✅ Manipulación avanzada del DOM
- ✅ Validación robusta de entrada
- ✅ Gestión de estado con arreglos
- ✅ Local Storage para persistencia
- ✅ Fetch API: GET, POST, PUT, DELETE
- ✅ Async/await para operaciones asincrónicas
- ✅ Try...catch para manejo de errores
- ✅ Promesas y respuestas HTTP
- ✅ JSON en peticiones y respuestas
- ✅ Interfaz de usuario responsiva
- ✅ Mensajes dinámicos de estado
- ✅ Indicadores de carga (spinner)
- ✅ Documentación JSDoc

### Tareas Implementadas

| TASK | Descripción | Estado |
|------|-------------|--------|
| TASK 1 | Crear estructura HTML con formulario y lista | ✅ Completa |
| TASK 2 | Captura e interacción con usuario | ✅ Completa |
| TASK 3 | Manipulación dinámica del DOM | ✅ Completa |
| TASK 4 | Persistencia con Local Storage | ✅ Completa |
| TASK 5 | Integración con Fetch API (CRUD) | ✅ Completa |
| TASK 6 | Validaciones y pruebas finales | ✅ Completa |

### Operaciones CRUD Implementadas

```javascript
// GET: Obtener tareas del servidor
await fetch('https://jsonplaceholder.typicode.com/todos')

// POST: Crear nueva tarea
await fetch(URL, { method: 'POST', body: JSON.stringify(datos) })

// PUT: Actualizar tarea existente
await fetch(`${URL}/${id}`, { method: 'PUT', body: JSON.stringify(datos) })

// DELETE: Eliminar tarea
await fetch(`${URL}/${id}`, { method: 'DELETE' })
```

### Criterios de Aceptación
- ✅ JavaScript ES6+ moderno
- ✅ Integración DOM + Local Storage + Fetch API
- ✅ Validaciones y manejo de errores
- ✅ Operaciones CRUD funcionales
- ✅ Código comentado y organizado

---

## 📚 Temas Cubiertos (Resumen General)

### Fundamentos de JavaScript
- [x] Variables: `let`, `const`, tipos de datos
- [x] Operadores: aritméticos, lógicos, comparación
- [x] Condicionales: `if`, `else if`, `else`, operador ternario
- [x] Funciones: declaración, parámetros, return
- [x] Funciones flecha: `=>`
- [x] Template literals: backticks y interpolación
- [x] Conversión de tipos

### Estructuras de Datos
- [x] Objetos literales: propiedades y métodos
- [x] Arreglos: creación, acceso, métodos (`push`, `pop`, `splice`, `filter`, `forEach`)
- [x] Sets: unicidad de datos, operaciones básicas
- [x] Maps: pares clave-valor, iteración

### Manipulación del DOM
- [x] Selección: `getElementById()`, `querySelector()`, `querySelectorAll()`
- [x] Creación: `createElement()`, `appendChild()`
- [x] Modificación: `textContent`, `innerHTML`, `classList`
- [x] Eliminación: `removeChild()`, `remove()`
- [x] Eventos: `addEventListener()`, delegación de eventos
- [x] Estilos dinámicos: `classList.add()`, `classList.remove()`

### Persistencia de Datos
- [x] Local Storage: `setItem()`, `getItem()`, `removeItem()`
- [x] JSON: `stringify()`, `parse()`
- [x] Serialización y deserialización

### Comunicación con Servidores
- [x] Fetch API: sintaxis y uso
- [x] Métodos HTTP: GET, POST, PUT, DELETE
- [x] Headers: `Content-Type: application/json`
- [x] Cuerpo de solicitud: `body` y JSON
- [x] Respuestas: `.json()`, `.ok`, `.status`
- [x] Async/await: flujo asincrónico
- [x] Try...catch: manejo de errores
- [x] Promesas implícitas

### Buenas Prácticas
- [x] Nomenclatura: camelCase, nombres descriptivos
- [x] Comentarios: documentación clara por sección
- [x] Validación: verificación de entrada
- [x] Manejo de errores: try-catch, console.error()
- [x] Código limpio: organización y legibilidad
- [x] Documentación JSDoc: comentarios de funciones

---

## 📁 Estructura de Archivos

```
hitoria_de_usuario/
├── sistema_interactivo.js          # Historia 1: Sistema interactivo
├── gestion_datos.js                 # Historia 2: Gesión de datos
├── manipulacion_dom.html            # Historia 3: HTML
├── manipulacion_dom.js              # Historia 3: JavaScript
├── index.html                       # Historia 4: HTML
├── app.js                           # Historia 4: JavaScript
└── README.md                        # Este archivo
```

---

## 🚀 Cómo Usar

### Historia 1: Sistema Interactivo
```bash
# Abrir en navegador e incluir en HTML:
<script src="sistema_interactivo.js"></script>
# O ejecutar directamente en consola del navegador
```

### Historia 2: Gestión de Datos
```bash
# Abrir en navegador e incluir en HTML:
<script src="gestion_datos.js"></script>
# Ver resultados en la consola (F12)
```

### Historia 3: Mini-App de Notas
```bash
# Abrir directamente en navegador:
open manipulacion_dom.html
# O con Live Server en VS Code
```

### Historia 4: Aplicación Web Integral
```bash
# Abrir directamente en navegador:
open index.html
# O con Live Server en VS Code
# Abre DevTools (F12) para ver logs de Fetch API
```

---

## 🧪 Pruebas y Validación

### Historia 1
- [ ] Abre la consola (F12)
- [ ] Ingresa nombre y edad válidos
- [ ] Verifica que muestre el mensaje correcto según edad
- [ ] Ingresa edad no válida y verifica `console.error()`

### Historia 2
- [ ] Abre la consola (F12)
- [ ] Verifica que el Set elimine duplicados
- [ ] Verifica operaciones del Map
- [ ] Confirma iteraciones con `for...in`, `for...of`, `forEach()`

### Historia 3
- [ ] Abre `manipulacion_dom.html` en navegador
- [ ] Agrega varias notas
- [ ] Recarga la página (F5)
- [ ] Verifica que las notas persisten (Local Storage)
- [ ] Elimina notas y verifica que se actualice

### Historia 4
- [ ] Abre `index.html` en navegador
- [ ] Agrega tareas localmente
- [ ] Recarga la página y verifica persistencia
- [ ] Haz clic en "Sincronizar API"
- [ ] Abre DevTools (F12) para ver logs de Fetch
- [ ] Edita y elimina tareas

---

## 📊 Resumen de Criterios

| Criterio | H1 | H2 | H3 | H4 |
|----------|----|----|----|----|
| Variables let/const | ✅ | ✅ | ✅ | ✅ |
| Condicionales | ✅ | ✅ | ✅ | ✅ |
| Objetos | ✅ | ✅ | ✅ | ✅ |
| Sets | ❌ | ✅ | ❌ | ❌ |
| Maps | ❌ | ✅ | ❌ | ❌ |
| DOM | ❌ | ❌ | ✅ | ✅ |
| Local Storage | ❌ | ❌ | ✅ | ✅ |
| Fetch API | ❌ | ❌ | ❌ | ✅ |
| Async/Await | ❌ | ❌ | ❌ | ✅ |
| Validaciones | ✅ | ✅ | ✅ | ✅ |
| Comentarios | ✅ | ✅ | ✅ | ✅ |

---

## 🎓 Conceptos de Aprendizaje Progresivo

```
Nivel Principiante
    ↓
Historia 1: Variables, Tipos, Condicionales
    ↓
Historia 2: Estructuras de Datos Avanzadas
    ↓
Nivel Intermedio
    ↓
Historia 3: DOM + Persistencia
    ↓
Historia 4: APIs + Async/Await
    ↓
Nivel Avanzado
```

---

## 💡 Notas Importantes

1. **Historia 1** debe ejecutarse en navegador (usa `prompt()` y `alert()`)
2. **Historia 2** muestra resultados en consola del navegador (F12)
3. **Historia 3** persiste datos en Local Storage del navegador
4. **Historia 4** usa JSONPlaceholder API (pública y sin autenticación)

---

## 📝 Archivo Eliminado

- ❌ `tempCodeRunnerFile.js` - Archivo corrupto, eliminado

---

## 🔗 Recursos Útiles

- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [MDN - Web APIs](https://developer.mozilla.org/es/docs/Web/API)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [JSONPlaceholder - API de prueba](https://jsonplaceholder.typicode.com/)

---

## ✨ Estado Final

**Todas las historias de usuario están 100% completas y funcionales.**

- ✅ 4 historias implementadas
- ✅ 6 archivos de código
- ✅ Más de 1000 líneas de JavaScript documentado
- ✅ Todos los criterios de aceptación cumplidos
- ✅ Código limpio y bien comentado

---

**Creado**: 6 de febrero de 2026  
**Módulo**: 3 - JavaScript Moderno (ES6+)  
**Estado**: Completo ✅
