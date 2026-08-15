# CAPÍTULO 6. DOCUMENTACIÓN DE LA API

La documentación de la API de Revenfy permite consultar de manera organizada los endpoints disponibles en el backend, los métodos HTTP utilizados, los datos que deben enviarse, las respuestas generadas y los códigos de estado HTTP.

Para generar esta documentación se utiliza **Swagger UI**, herramienta incorporada en FastAPI que permite visualizar y probar la API directamente desde el navegador.

La documentación se genera automáticamente a partir de las rutas y esquemas definidos en el backend, por lo que no es necesario crear manualmente una documentación independiente para cada endpoint.

---

## 6.1 Swagger UI

Swagger UI es una interfaz gráfica que permite visualizar la documentación de una API y realizar pruebas sobre sus endpoints.

En Revenfy, FastAPI genera automáticamente esta interfaz a partir de las rutas y esquemas definidos en el proyecto.

La documentación se encuentra disponible cuando el servidor de FastAPI está ejecutándose en:

```text id="9zv8q1"
http://127.0.0.1:8000/docs
```

Desde esta dirección se puede acceder a la documentación interactiva de la API. El documento actual de Revenfy establece esta misma dirección para consultar Swagger UI.

**Evidencia:**

[INSERTAR CAPTURA DE SWAGGER UI CON LA API DE REVENFY]

---

## 6.2 Información mostrada en Swagger UI

La documentación generada por FastAPI permite consultar diferentes elementos de la API.

Entre la información disponible se encuentra:

* Endpoints disponibles.
* Métodos HTTP.
* Rutas.
* Parámetros.
* Modelos de entrada.
* Modelos de salida.
* Códigos de respuesta HTTP.
* Descripción de las operaciones.
* Pruebas interactivas.

Esta información permite que un desarrollador pueda conocer cómo consumir la API sin necesidad de revisar directamente todo el código fuente.

---

## 6.3 Endpoints documentados

Actualmente, la API de Revenfy cuenta con endpoints relacionados principalmente con los recursos **Usuarios** y **Productos**.

### Usuarios

Los endpoints documentados para usuarios son:

| Método | Ruta                     | Función                      |
| ------ | ------------------------ | ---------------------------- |
| GET    | `/usuarios`              | Consultar todos los usuarios |
| GET    | `/usuarios/{id_usuario}` | Consultar un usuario         |
| POST   | `/usuarios`              | Registrar un usuario         |
| PUT    | `/usuarios/{id_usuario}` | Actualizar un usuario        |
| DELETE | `/usuarios/{id_usuario}` | Eliminar un usuario          |

Estas operaciones corresponden al CRUD de usuarios desarrollado en el backend.

### Productos

Los endpoints documentados para productos son:

| Método | Ruta                              | Función                           |
| ------ | --------------------------------- | --------------------------------- |
| GET    | `/productos`                      | Consultar todos los productos     |
| GET    | `/productos/{id_producto}`        | Consultar un producto             |
| GET    | `/productos/usuario/{id_usuario}` | Consultar productos de un usuario |
| POST   | `/productos`                      | Registrar un producto             |
| PUT    | `/productos/{id_producto}`        | Actualizar un producto            |
| DELETE | `/productos/{id_producto}`        | Eliminar un producto              |

Estos endpoints permiten realizar las principales operaciones CRUD relacionadas con los productos.

**Evidencia:**

[INSERTAR CAPTURA DE SWAGGER MOSTRANDO LOS ENDPOINTS DE USUARIOS]

[INSERTAR CAPTURA DE SWAGGER MOSTRANDO LOS ENDPOINTS DE PRODUCTOS]

---

## 6.4 Modelos de Request

Los modelos de **Request** representan la información que el cliente debe enviar al backend para realizar determinadas operaciones.

En Revenfy, estos datos son definidos mediante los esquemas utilizados por FastAPI y Pydantic.

Por ejemplo, para registrar un producto se envía información como:

```json id="qj8n6k"
{
    "titulo": "Portátil Lenovo",
    "descripcion": "Equipo en buen estado",
    "categoria": "Tecnología",
    "precio": 2500000,
    "imagen": "imagen.jpg",
    "id_usuario": 1
}
```

Swagger muestra estos campos al seleccionar el endpoint correspondiente y permite ingresar los valores antes de ejecutar la solicitud.

Los modelos Request permiten establecer una estructura para los datos que recibe la API y facilitan la validación de la información.

**Evidencia:**

[INSERTAR CAPTURA DE SWAGGER MOSTRANDO EL REQUEST DE POST `/usuarios`]

[INSERTAR CAPTURA DE SWAGGER MOSTRANDO EL REQUEST DE POST `/productos`]

---

## 6.5 Modelos de Response

Los modelos de **Response** representan la información que devuelve el backend después de procesar una solicitud.

Por ejemplo, una respuesta de consulta de usuario puede tener la siguiente estructura:

```json id="w3k7za"
{
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com"
}
```

En el caso de un producto, la respuesta puede contener información como:

```json id="7s0kmb"
{
    "id_producto": 1,
    "titulo": "Portátil Lenovo",
    "descripcion": "Equipo en buen estado",
    "categoria": "Tecnología",
    "precio": 2500000,
    "imagen": "imagen.jpg",
    "estado_producto": "Disponible",
    "id_usuario": 1
}
```

Estos modelos permiten mantener una estructura definida para la información que devuelve el backend.

**Evidencia:**

[INSERTAR CAPTURA DE SWAGGER MOSTRANDO EL RESPONSE DE USUARIOS]

[INSERTAR CAPTURA DE SWAGGER MOSTRANDO EL RESPONSE DE PRODUCTOS]

---

## 6.6 Códigos de Respuesta HTTP

Swagger también permite consultar los códigos HTTP asociados a las diferentes operaciones.

En Revenfy se utilizan principalmente los siguientes códigos:

### 200 OK

Indica que la solicitud fue procesada correctamente.

Se utiliza para operaciones como:

* Consultar usuarios.
* Consultar productos.
* Actualizar usuarios.
* Actualizar productos.
* Eliminar usuarios.
* Eliminar productos.

### 201 Created

Indica que un nuevo recurso fue creado correctamente.

Se utiliza para:

* Registrar usuarios.
* Registrar productos.

### 400 Bad Request

Indica que la solicitud contiene información inválida o que no cumple con las condiciones esperadas.

### 404 Not Found

Indica que el recurso solicitado no existe.

Ejemplo:

```json id="5i9n7b"
{
    "detail": "Usuario no encontrado"
}
```

También puede generarse para un producto inexistente:

```json id="k1z4hs"
{
    "detail": "Producto no encontrado"
}
```

### 401 Unauthorized

Este código no se encuentra implementado actualmente, debido a que Revenfy todavía no cuenta con autenticación mediante usuarios o tokens.

### 403 Forbidden

Este código tampoco se encuentra implementado actualmente porque el sistema todavía no cuenta con un mecanismo de permisos que restrinja las operaciones según el rol del usuario.

### 500 Internal Server Error

Puede presentarse cuando ocurre un error inesperado durante el procesamiento de una solicitud, por ejemplo, una excepción no controlada o un problema durante la conexión con PostgreSQL.

---

## 6.7 Pruebas Interactivas

Una de las principales ventajas de Swagger UI es que permite ejecutar directamente los endpoints de la API.

Para realizar una prueba se debe:

1. Ejecutar el servidor de FastAPI.
2. Abrir Swagger UI.
3. Seleccionar el endpoint que se desea probar.
4. Presionar **Try it out**.
5. Ingresar los parámetros requeridos.
6. Ingresar el cuerpo de la solicitud cuando sea necesario.
7. Presionar **Execute**.
8. Revisar la respuesta del servidor.

Por ejemplo, para registrar un producto se puede seleccionar:

```text id="5j0nml"
POST /productos
```

Después se ingresan los datos correspondientes y se ejecuta la solicitud.

Swagger muestra:

* La solicitud realizada.
* La URL utilizada.
* El código HTTP.
* La respuesta obtenida.
* El contenido devuelto por el servidor.

Esta característica también fue utilizada durante las pruebas del backend, ya que permitió comprobar el funcionamiento de los endpoints antes de completar otras partes del proyecto.

**Evidencia:**

[INSERTAR CAPTURA DE UNA PRUEBA EXITOSA EN SWAGGER]

---

## 6.8 Documentación de Usuarios

La documentación de Swagger permite consultar cada operación relacionada con usuarios.

### GET `/usuarios`

Permite obtener el listado de usuarios registrados.

**Evidencia:**

[INSERTAR CAPTURA]

### GET `/usuarios/{id_usuario}`

Permite consultar un usuario específico mediante su identificador.

**Evidencia:**

[INSERTAR CAPTURA]

### POST `/usuarios`

Permite registrar un nuevo usuario.

**Evidencia:**

[INSERTAR CAPTURA]

### PUT `/usuarios/{id_usuario}`

Permite actualizar la información de un usuario existente.

**Evidencia:**

[INSERTAR CAPTURA]

### DELETE `/usuarios/{id_usuario}`

Permite eliminar un usuario existente.

**Evidencia:**

[INSERTAR CAPTURA]

---

## 6.9 Documentación de Productos

Swagger también permite consultar las operaciones relacionadas con productos.

### GET `/productos`

Permite obtener todos los productos registrados.

**Evidencia:**

[INSERTAR CAPTURA]

### GET `/productos/{id_producto}`

Permite consultar un producto específico.

**Evidencia:**

[INSERTAR CAPTURA]

### GET `/productos/usuario/{id_usuario}`

Permite consultar los productos registrados por un usuario.

**Evidencia:**

[INSERTAR CAPTURA]

### POST `/productos`

Permite registrar un nuevo producto.

**Evidencia:**

[INSERTAR CAPTURA]

### PUT `/productos/{id_producto}`

Permite actualizar la información de un producto.

**Evidencia:**

[INSERTAR CAPTURA]

### DELETE `/productos/{id_producto}`

Permite eliminar un producto.

**Evidencia:**

[INSERTAR CAPTURA]

---

## 6.10 Relación entre la Documentación y las Pruebas

La documentación generada por Swagger está directamente relacionada con las pruebas realizadas durante el desarrollo.

Swagger permite visualizar los endpoints y ejecutarlos desde la misma interfaz, mientras que las pruebas permiten comprobar si las operaciones funcionan correctamente.

El proceso puede representarse de la siguiente manera:

```text id="w2q3km"
Código FastAPI
      ↓
Rutas y esquemas
      ↓
Swagger UI
      ↓
Visualización de endpoints
      ↓
Prueba interactiva
      ↓
Respuesta HTTP
      ↓
Validación del resultado
```

De esta manera, la documentación no solamente sirve como referencia para conocer la API, sino también como una herramienta de apoyo durante el desarrollo y las pruebas.

---

## 6.11 Evidencias del Capítulo

Para demostrar la documentación de la API se deben agregar las siguientes evidencias:

### Evidencia 1 – Swagger UI

[INSERTAR CAPTURA DE `http://127.0.0.1:8000/docs`]

### Evidencia 2 – Endpoints de Usuarios

[INSERTAR CAPTURA DE LOS ENDPOINTS DE USUARIOS]

### Evidencia 3 – Endpoints de Productos

[INSERTAR CAPTURA DE LOS ENDPOINTS DE PRODUCTOS]

### Evidencia 4 – Request

[INSERTAR CAPTURA DE UN MODELO REQUEST]

### Evidencia 5 – Response

[INSERTAR CAPTURA DE UN MODELO RESPONSE]

### Evidencia 6 – Ejecución de un endpoint

[INSERTAR CAPTURA DE UNA PRUEBA EJECUTADA EN SWAGGER]

### Evidencia 7 – Respuesta HTTP

[INSERTAR CAPTURA DONDE SE OBSERVE EL CÓDIGO HTTP Y LA RESPUESTA]

---

## 6.12 Importancia de la Documentación de la API

La documentación de la API facilita el trabajo del equipo porque permite conocer rápidamente cómo interactuar con el backend.

Entre sus principales beneficios se encuentran:

* Permite conocer los endpoints disponibles.
* Facilita comprender qué datos necesita cada operación.
* Permite consultar los modelos Request y Response.
* Facilita las pruebas de la API.
* Permite identificar los códigos de respuesta.
* Facilita la integración con el frontend.
* Ayuda a los integrantes del equipo a comprender el funcionamiento del backend.
* Reduce la necesidad de revisar directamente todo el código fuente para conocer cómo consumir un endpoint.

En Revenfy, Swagger fue especialmente útil durante el desarrollo porque permitió probar el backend antes de que el frontend estuviera completamente terminado.

---

## 6.13 Conclusión del Capítulo

La documentación automática generada por FastAPI mediante Swagger UI permite presentar de forma organizada la API REST de Revenfy.

A través de esta herramienta se pueden consultar los endpoints de usuarios y productos, los métodos HTTP, los modelos de entrada y salida, los códigos de respuesta y realizar pruebas interactivas.

La documentación facilita tanto el proceso de desarrollo como la integración posterior del frontend con el backend, ya que establece de forma clara cómo debe comunicarse un cliente con la API.

Actualmente, la documentación corresponde a los endpoints implementados para usuarios y productos. Las funcionalidades que todavía no se encuentran implementadas, como autenticación y autorización, no deben presentarse como parte de la API funcional actual.

