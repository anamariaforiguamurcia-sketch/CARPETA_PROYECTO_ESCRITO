# CAPÍTULO 5. PRUEBAS DEL SISTEMA

Las pruebas del sistema de Revenfy tienen como propósito verificar el funcionamiento de los diferentes componentes desarrollados en el backend y comprobar que los endpoints de la API REST respondan correctamente ante las solicitudes realizadas.

Las pruebas se realizan principalmente sobre los módulos de **Usuarios** y **Productos**, verificando las operaciones de consulta, creación, actualización y eliminación de información.

Para realizar las pruebas se utiliza principalmente **Swagger UI**, herramienta proporcionada por FastAPI que permite ejecutar los endpoints directamente desde el navegador y observar las solicitudes, respuestas y códigos de estado HTTP.

---

# 5.1 Objetivo de las Pruebas

El objetivo de las pruebas es comprobar que las funcionalidades implementadas en la API REST funcionen de acuerdo con lo establecido y que los datos enviados al backend sean procesados correctamente.

Las pruebas permiten verificar principalmente:

* Funcionamiento de los endpoints.
* Validación de los datos enviados.
* Creación de registros.
* Consulta de registros.
* Actualización de registros.
* Eliminación de registros.
* Manejo de recursos inexistentes.
* Códigos de respuesta HTTP.
* Comunicación entre FastAPI y PostgreSQL.
* Respuestas generadas por el backend.

De esta manera, las pruebas permiten identificar errores antes de continuar con las siguientes etapas del desarrollo.

---

# 5.2 Herramienta Utilizada

Para realizar las pruebas de la API se utiliza **Swagger UI**, generado automáticamente por FastAPI.

Swagger permite visualizar los endpoints disponibles y ejecutarlos mediante la opción **Try it out**, ingresando los parámetros y datos correspondientes.

La herramienta permite observar:

* Método HTTP.
* Ruta del endpoint.
* Parámetros.
* Cuerpo de la solicitud.
* Respuesta del servidor.
* Código de estado HTTP.

La dirección utilizada para acceder a la documentación interactiva durante el desarrollo local es:

```text
http://127.0.0.1:8000/docs
```

**Evidencia:**

[INSERTAR CAPTURA DE LA PÁGINA PRINCIPAL DE SWAGGER UI]

---

# 5.3 Pruebas del Módulo de Usuarios

Las pruebas del módulo de usuarios permiten comprobar las operaciones CRUD implementadas para administrar la información de los usuarios.

---

## 5.3.1 Prueba GET – Listar Usuarios

**Método:** GET

**Endpoint:**

```text
/usuarios
```

### Objetivo

Comprobar que el sistema pueda obtener correctamente el listado de usuarios registrados en la base de datos.

### Procedimiento

1. Abrir Swagger UI.
2. Localizar el endpoint `GET /usuarios`.
3. Seleccionar **Try it out**.
4. Ejecutar la solicitud.
5. Revisar la respuesta obtenida.

### Resultado esperado

El servidor debe devolver el listado de usuarios registrados.

**Código esperado:**

```text
200 OK
```

### Resultado

La solicitud devuelve la información de los usuarios registrados y el código HTTP correspondiente.

**Evidencia:**

[INSERTAR CAPTURA DE GET `/usuarios` EJECUTADO EN SWAGGER]

---

## 5.3.2 Prueba GET – Consultar Usuario por ID

**Método:** GET

**Endpoint:**

```text
/usuarios/{id_usuario}
```

### Objetivo

Comprobar que el sistema pueda consultar un usuario específico utilizando su identificador.

### Procedimiento

1. Seleccionar `GET /usuarios/{id_usuario}`.
2. Ingresar un identificador existente.
3. Ejecutar la solicitud.
4. Revisar la información devuelta.

### Ejemplo

```text
GET /usuarios/1
```

### Resultado esperado

El backend debe devolver la información correspondiente al usuario solicitado.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE GET `/usuarios/{id_usuario}`]

---

## 5.3.3 Prueba POST – Registrar Usuario

**Método:** POST

**Endpoint:**

```text
/usuarios
```

### Objetivo

Comprobar que el sistema permita registrar correctamente un nuevo usuario.

### Datos de prueba

```json
{
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com",
    "telefono": "3001234567",
    "programa_formacion": "ADSO"
}
```

### Procedimiento

1. Seleccionar `POST /usuarios`.
2. Activar **Try it out**.
3. Ingresar los datos de prueba.
4. Ejecutar la solicitud.
5. Revisar la respuesta.

### Resultado esperado

El usuario debe almacenarse correctamente en la base de datos.

**Código esperado:**

```text
201 Created
```

**Evidencia:**

[INSERTAR CAPTURA DE POST `/usuarios`]

---

## 5.3.4 Prueba PUT – Actualizar Usuario

**Método:** PUT

**Endpoint:**

```text
/usuarios/{id_usuario}
```

### Objetivo

Comprobar que sea posible modificar la información de un usuario existente.

### Ejemplo

```text
PUT /usuarios/1
```

### Datos de prueba

```json
{
    "telefono": "3114567890"
}
```

### Resultado esperado

El backend debe actualizar la información correspondiente al usuario.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE PUT `/usuarios/{id_usuario}`]

---

## 5.3.5 Prueba DELETE – Eliminar Usuario

**Método:** DELETE

**Endpoint:**

```text
/usuarios/{id_usuario}
```

### Objetivo

Comprobar que el sistema pueda eliminar correctamente un usuario existente.

### Ejemplo

```text
DELETE /usuarios/1
```

### Resultado esperado

El registro debe eliminarse correctamente de la base de datos.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE DELETE `/usuarios/{id_usuario}`]

---

# 5.4 Pruebas del Módulo de Productos

Las pruebas del módulo de productos permiten verificar las operaciones CRUD y la consulta de productos asociados a un usuario.

---

## 5.4.1 Prueba GET – Listar Productos

**Método:** GET

**Endpoint:**

```text
/productos
```

### Objetivo

Comprobar que el sistema pueda obtener correctamente el listado de productos registrados.

### Resultado esperado

El backend debe devolver los productos existentes.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE GET `/productos`]

---

## 5.4.2 Prueba GET – Consultar Producto por ID

**Método:** GET

**Endpoint:**

```text
/productos/{id_producto}
```

### Objetivo

Comprobar que un producto pueda ser consultado utilizando su identificador.

### Ejemplo

```text
GET /productos/1
```

### Resultado esperado

El sistema debe devolver la información correspondiente al producto.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE GET `/productos/{id_producto}`]

---

## 5.4.3 Prueba GET – Consultar Productos por Usuario

**Método:** GET

**Endpoint:**

```text
/productos/usuario/{id_usuario}
```

### Objetivo

Comprobar que el sistema pueda obtener los productos publicados por un usuario específico.

### Ejemplo

```text
GET /productos/usuario/1
```

### Resultado esperado

El backend debe devolver los productos relacionados con el usuario indicado.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE GET `/productos/usuario/{id_usuario}`]

---

## 5.4.4 Prueba POST – Registrar Producto

**Método:** POST

**Endpoint:**

```text
/productos
```

### Objetivo

Comprobar que el sistema permita registrar correctamente un producto.

### Datos de prueba

```json
{
    "titulo": "Portátil Lenovo",
    "descripcion": "Equipo en buen estado",
    "categoria": "Tecnología",
    "precio": 2500000,
    "imagen": "imagen.jpg",
    "id_usuario": 1
}
```

### Resultado esperado

El producto debe almacenarse correctamente en la base de datos.

**Código esperado:**

```text
201 Created
```

**Evidencia:**

[INSERTAR CAPTURA DE POST `/productos`]

---

## 5.4.5 Prueba PUT – Actualizar Producto

**Método:** PUT

**Endpoint:**

```text
/productos/{id_producto}
```

### Objetivo

Comprobar que la información de un producto existente pueda ser modificada.

### Ejemplo

```text
PUT /productos/1
```

### Datos de prueba

```json
{
    "titulo": "Portátil Lenovo actualizado",
    "precio": 2300000
}
```

### Resultado esperado

La información del producto debe actualizarse correctamente.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE PUT `/productos/{id_producto}`]

---

## 5.4.6 Prueba DELETE – Eliminar Producto

**Método:** DELETE

**Endpoint:**

```text
/productos/{id_producto}
```

### Objetivo

Comprobar que el sistema pueda eliminar un producto existente.

### Ejemplo

```text
DELETE /productos/1
```

### Resultado esperado

El producto debe eliminarse correctamente.

**Código esperado:**

```text
200 OK
```

**Evidencia:**

[INSERTAR CAPTURA DE DELETE `/productos/{id_producto}`]

---

# 5.5 Pruebas de Errores

Además de comprobar las operaciones exitosas, es necesario verificar el comportamiento del backend cuando recibe información incorrecta o se solicita un recurso que no existe.

Estas pruebas permiten comprobar que los errores sean controlados y que el servidor devuelva códigos HTTP adecuados.

---

## 5.5.1 Error 400 – Bad Request

Este código representa una solicitud incorrecta.

Puede presentarse cuando los datos enviados no cumplen con las condiciones requeridas por el endpoint.

### Ejemplo

Enviar información con un tipo de dato incorrecto o con datos que no cumplen las validaciones establecidas.

### Resultado esperado

El backend debe rechazar la solicitud e informar que los datos enviados no son válidos.

**Evidencia:**

[INSERTAR CAPTURA DE UNA SOLICITUD INVÁLIDA QUE GENERE EL ERROR CORRESPONDIENTE]

---

## 5.5.2 Error 404 – Not Found

Este error ocurre cuando se solicita un recurso que no existe.

### Ejemplo

```text
GET /usuarios/999999
```

si el usuario con ese identificador no existe.

### Resultado esperado

```json
{
    "detail": "Usuario no encontrado"
}
```

**Código:**

```text
404 Not Found
```

**Evidencia:**

[INSERTAR CAPTURA DEL ERROR 404]

---

## 5.5.3 Error 500 – Internal Server Error

Este código representa un error inesperado durante el procesamiento de una solicitud.

Puede estar relacionado con problemas no controlados en el código o situaciones inesperadas durante la comunicación con la base de datos.

Este tipo de error debe analizarse mediante los registros mostrados en la consola del servidor para determinar su causa.

**Evidencia:**

[INSERTAR CAPTURA SOLAMENTE SI REALMENTE SE PRESENTÓ Y FUE ANALIZADO UN ERROR 500]

---

## 5.5.4 Error 401 – Unauthorized

Actualmente este código no se encuentra implementado en Revenfy debido a que el backend todavía no cuenta con un sistema de autenticación mediante usuarios o tokens.

Por esta razón, no debe presentarse como una prueba exitosa actualmente implementada.

Su implementación queda planteada como una mejora futura relacionada con la autenticación.

---

## 5.5.5 Error 403 – Forbidden

Actualmente este código tampoco se encuentra implementado debido a que todavía no existe un sistema de autorización que controle los permisos de los usuarios según sus roles.

La implementación de este código estará relacionada con el futuro sistema de roles y permisos.

---

# 5.6 Tabla General de Pruebas

Las pruebas realizadas sobre los endpoints principales pueden organizarse de la siguiente manera:

| Nº | Módulo    | Método | Endpoint                          | Prueba                          | Resultado esperado |
| -: | --------- | ------ | --------------------------------- | ------------------------------- | ------------------ |
|  1 | Usuarios  | GET    | `/usuarios`                       | Listar usuarios                 | 200 OK             |
|  2 | Usuarios  | GET    | `/usuarios/{id_usuario}`          | Consultar usuario               | 200 OK             |
|  3 | Usuarios  | POST   | `/usuarios`                       | Registrar usuario               | 201 Created        |
|  4 | Usuarios  | PUT    | `/usuarios/{id_usuario}`          | Actualizar usuario              | 200 OK             |
|  5 | Usuarios  | DELETE | `/usuarios/{id_usuario}`          | Eliminar usuario                | 200 OK             |
|  6 | Productos | GET    | `/productos`                      | Listar productos                | 200 OK             |
|  7 | Productos | GET    | `/productos/{id_producto}`        | Consultar producto              | 200 OK             |
|  8 | Productos | GET    | `/productos/usuario/{id_usuario}` | Consultar productos por usuario | 200 OK             |
|  9 | Productos | POST   | `/productos`                      | Registrar producto              | 201 Created        |
| 10 | Productos | PUT    | `/productos/{id_producto}`        | Actualizar producto             | 200 OK             |
| 11 | Productos | DELETE | `/productos/{id_producto}`        | Eliminar producto               | 200 OK             |
| 12 | Usuarios  | GET    | `/usuarios/{id_usuario}`          | Consultar usuario inexistente   | 404 Not Found      |
| 13 | Productos | GET    | `/productos/{id_producto}`        | Consultar producto inexistente  | 404 Not Found      |

Esta tabla permite identificar rápidamente qué operaciones fueron sometidas a prueba y cuál es el resultado HTTP esperado.

---

# 5.7 Evidencias de las Pruebas

Para demostrar las pruebas realizadas se deben incluir las capturas correspondientes a la ejecución de los endpoints.

Las evidencias deben mostrar claramente:

* Endpoint utilizado.
* Método HTTP.
* Datos enviados.
* Respuesta recibida.
* Código HTTP.
* Resultado de la operación.

### Evidencias de Usuarios

**Prueba 1:** GET `/usuarios`

[INSERTAR CAPTURA]

**Prueba 2:** GET `/usuarios/{id_usuario}`

[INSERTAR CAPTURA]

**Prueba 3:** POST `/usuarios`

[INSERTAR CAPTURA]

**Prueba 4:** PUT `/usuarios/{id_usuario}`

[INSERTAR CAPTURA]

**Prueba 5:** DELETE `/usuarios/{id_usuario}`

[INSERTAR CAPTURA]

### Evidencias de Productos

**Prueba 6:** GET `/productos`

[INSERTAR CAPTURA]

**Prueba 7:** GET `/productos/{id_producto}`

[INSERTAR CAPTURA]

**Prueba 8:** GET `/productos/usuario/{id_usuario}`

[INSERTAR CAPTURA]

**Prueba 9:** POST `/productos`

[INSERTAR CAPTURA]

**Prueba 10:** PUT `/productos/{id_producto}`

[INSERTAR CAPTURA]

**Prueba 11:** DELETE `/productos/{id_producto}`

[INSERTAR CAPTURA]

### Evidencias de errores

**Prueba 12:** Recurso inexistente – 404

[INSERTAR CAPTURA]

**Prueba 13:** Datos inválidos

[INSERTAR CAPTURA]

---

# 5.8 Resultados de las Pruebas

Las pruebas permiten comprobar el funcionamiento de las operaciones CRUD desarrolladas para los módulos de usuarios y productos.

Las operaciones de consulta permiten recuperar información almacenada en PostgreSQL, mientras que las operaciones POST permiten crear nuevos registros.

Las operaciones PUT permiten modificar registros existentes y las operaciones DELETE permiten eliminar información cuando el recurso se encuentra disponible.

Las pruebas de recursos inexistentes permiten comprobar el manejo de errores mediante respuestas `404 Not Found`.

Por otra parte, los códigos `401 Unauthorized` y `403 Forbidden` todavía no forman parte de las pruebas funcionales actuales porque las funcionalidades de autenticación y autorización no han sido implementadas.

Los resultados obtenidos permiten identificar el estado actual del backend y sirven como base para continuar con la implementación de nuevas funcionalidades.

---

# 5.9 Conclusión de las Pruebas

Las pruebas realizadas permiten verificar el funcionamiento de los principales endpoints de la API REST de Revenfy.

Mediante Swagger UI se pueden ejecutar las operaciones de usuarios y productos y comprobar las respuestas generadas por el backend.

Las pruebas permiten validar las operaciones de creación, consulta, actualización y eliminación, además de comprobar el comportamiento del sistema frente a recursos inexistentes.

El proceso de pruebas también permite identificar funcionalidades que todavía deben desarrollarse, principalmente aquellas relacionadas con autenticación, autorización y control de permisos.

Por lo tanto, las pruebas constituyen una etapa necesaria para verificar el funcionamiento de la aplicación y detectar errores antes de avanzar hacia las siguientes etapas del proyecto.

