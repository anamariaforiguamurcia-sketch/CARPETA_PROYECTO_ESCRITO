# CAPÍTULO 4. DISEÑO DE LA API REST

En el proyecto Revenfy se implementó una API REST utilizando FastAPI, con el propósito de permitir la comunicación entre los clientes de la aplicación y el backend.

La API permite gestionar principalmente la información de usuarios y productos mediante operaciones CRUD. Cada endpoint recibe una solicitud HTTP, procesa la información correspondiente y devuelve una respuesta estructurada en formato JSON junto con el código de estado HTTP correspondiente.

La API se encuentra organizada mediante diferentes rutas según el recurso que se desea administrar:

* `/usuarios`
* `/productos`

Los métodos HTTP utilizados son:

* **GET:** consultar información.
* **POST:** crear nuevos registros.
* **PUT:** actualizar información existente.
* **DELETE:** eliminar registros.

---

# 4.1 Endpoints de Usuarios

Los endpoints de usuarios permiten realizar las operaciones CRUD relacionadas con los usuarios registrados en Revenfy.

---

## 4.1.1 Endpoint 1. Consultar todos los usuarios

**Método HTTP:** GET

**Ruta:**

```text
/usuarios
```

**Descripción:**

Obtiene el listado de todos los usuarios registrados en la base de datos.

**Request:**

No requiere cuerpo de la petición.

**Response:**

```json
[
    {
        "id_usuario": 1,
        "nombre": "Ana",
        "apellido": "Forigua",
        "correo": "ana@email.com",
        "telefono": "3001234567",
        "programa_formacion": "ADSO",
        "rol": "Aprendiz",
        "estado": true
    }
]
```

**Código HTTP:**

```text
200 OK
```

Este endpoint permite consultar los usuarios almacenados sin necesidad de enviar información adicional en el cuerpo de la solicitud.

---

## 4.1.2 Endpoint 2. Consultar usuario por ID

**Método HTTP:** GET

**Ruta:**

```text
/usuarios/{id_usuario}
```

**Descripción:**

Consulta un usuario específico mediante su identificador.

**Parámetro de ruta:**

```text
id_usuario
```

El parámetro corresponde al identificador del usuario que se desea consultar.

**Request:**

No requiere cuerpo.

**Ejemplo de solicitud:**

```text
GET /usuarios/1
```

**Response:**

```json
{
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com"
}
```

**Código HTTP:**

```text
200 OK
```

Cuando el identificador no corresponde a un usuario existente, el backend devuelve una respuesta de error indicando que el usuario no fue encontrado.

---

## 4.1.3 Endpoint 3. Registrar usuario

**Método HTTP:** POST

**Ruta:**

```text
/usuarios
```

**Descripción:**

Permite registrar un nuevo usuario en la base de datos.

**Request:**

```json
{
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com",
    "telefono": "3001234567",
    "programa_formacion": "ADSO"
}
```

Los datos enviados son validados mediante el esquema correspondiente antes de realizar el registro.

**Response:**

```json
{
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com"
}
```

**Código HTTP:**

```text
201 Created
```

El código `201 Created` indica que el recurso fue creado correctamente.

---

## 4.1.4 Endpoint 4. Actualizar usuario

**Método HTTP:** PUT

**Ruta:**

```text
/usuarios/{id_usuario}
```

**Descripción:**

Permite actualizar la información de un usuario existente.

**Parámetro de ruta:**

```text
id_usuario
```

**Ejemplo de solicitud:**

```text
PUT /usuarios/1
```

**Request:**

```json
{
    "telefono": "3114567890"
}
```

La información enviada corresponde a los datos que se desean modificar.

**Código HTTP:**

```text
200 OK
```

El endpoint verifica que el usuario exista antes de realizar la actualización.

Si el usuario no existe, se genera una respuesta de error indicando que no fue encontrado.

---

## 4.1.5 Endpoint 5. Eliminar usuario

**Método HTTP:** DELETE

**Ruta:**

```text
/usuarios/{id_usuario}
```

**Descripción:**

Permite eliminar un usuario existente del sistema.

**Parámetro de ruta:**

```text
id_usuario
```

**Ejemplo de solicitud:**

```text
DELETE /usuarios/1
```

**Request:**

No requiere cuerpo.

**Response:**

```json
{
    "mensaje": "Usuario eliminado correctamente"
}
```

**Código HTTP:**

```text
200 OK
```

Antes de realizar la eliminación se debe comprobar que el usuario exista.

---

# 4.2 Endpoints de Productos

Los endpoints de productos permiten administrar los artículos publicados en Revenfy.

Estos endpoints permiten consultar, registrar, actualizar y eliminar productos, además de consultar los productos relacionados con un usuario específico.

---

## 4.2.1 Endpoint 1. Consultar todos los productos

**Método HTTP:** GET

**Ruta:**

```text
/productos
```

**Descripción:**

Obtiene el listado de todos los productos registrados en el sistema.

**Request:**

No requiere cuerpo.

**Response:**

```json
[
    {
        "id_producto": 1,
        "titulo": "Portátil",
        "precio": 2500000
    }
]
```

**Código HTTP:**

```text
200 OK
```

Este endpoint permite obtener el catálogo de productos registrados en la base de datos.

---

## 4.2.2 Endpoint 2. Consultar producto por ID

**Método HTTP:** GET

**Ruta:**

```text
/productos/{id_producto}
```

**Descripción:**

Permite consultar un producto específico mediante su identificador.

**Parámetro de ruta:**

```text
id_producto
```

**Ejemplo de solicitud:**

```text
GET /productos/1
```

**Request:**

No requiere cuerpo.

**Response:**

El backend devuelve la información correspondiente al producto solicitado.

Ejemplo:

```json
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

**Código HTTP:**

```text
200 OK
```

Si el producto no existe, el backend devuelve un error indicando que el producto no fue encontrado.

---

## 4.2.3 Endpoint 3. Consultar productos por usuario

**Método HTTP:** GET

**Ruta:**

```text
/productos/usuario/{id_usuario}
```

**Descripción:**

Obtiene los productos registrados por un usuario específico.

**Parámetro de ruta:**

```text
id_usuario
```

**Ejemplo de solicitud:**

```text
GET /productos/usuario/1
```

**Request:**

No requiere cuerpo.

**Response:**

```json
[
    {
        "id_producto": 1,
        "titulo": "Portátil Lenovo",
        "precio": 2500000
    }
]
```

**Código HTTP:**

```text
200 OK
```

Este endpoint permite relacionar los productos publicados con el usuario que los registró.

---

## 4.2.4 Endpoint 4. Registrar producto

**Método HTTP:** POST

**Ruta:**

```text
/productos
```

**Descripción:**

Permite registrar un nuevo producto en la base de datos.

**Request:**

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

Los datos son enviados al backend y posteriormente validados mediante el esquema correspondiente.

**Response:**

```json
{
    "id_producto": 1,
    "titulo": "Portátil Lenovo",
    "precio": 2500000
}
```

**Código HTTP:**

```text
201 Created
```

El código `201 Created` indica que el producto fue registrado correctamente.

---

## 4.2.5 Endpoint 5. Actualizar producto

**Método HTTP:** PUT

**Ruta:**

```text
/productos/{id_producto}
```

**Descripción:**

Permite modificar la información de un producto existente.

**Parámetro de ruta:**

```text
id_producto
```

**Ejemplo de solicitud:**

```text
PUT /productos/1
```

**Request:**

```json
{
    "titulo": "Portátil Lenovo actualizado",
    "descripcion": "Equipo en buen estado",
    "precio": 2300000
}
```

La información enviada se utiliza para actualizar los datos correspondientes del producto.

**Código HTTP:**

```text
200 OK
```

Antes de realizar la operación, el servicio verifica que el producto exista.

---

## 4.2.6 Endpoint 6. Eliminar producto

**Método HTTP:** DELETE

**Ruta:**

```text
/productos/{id_producto}
```

**Descripción:**

Permite eliminar un producto existente del sistema.

**Parámetro de ruta:**

```text
id_producto
```

**Ejemplo de solicitud:**

```text
DELETE /productos/1
```

**Request:**

No requiere cuerpo.

**Response:**

```json
{
    "mensaje": "Producto eliminado correctamente"
}
```

**Código HTTP:**

```text
200 OK
```

El servicio verifica que el producto exista antes de realizar la eliminación.

---

# 4.3 Códigos de Respuesta HTTP

La API utiliza códigos de estado HTTP para informar al cliente sobre el resultado de cada solicitud.

## 4.3.1 200 OK

Indica que la solicitud fue procesada correctamente.

Se utiliza, entre otros casos, para:

* Consultar usuarios.
* Consultar productos.
* Actualizar registros.
* Eliminar registros.

---

## 4.3.2 201 Created

Indica que un nuevo recurso fue creado correctamente.

Se utiliza principalmente para:

* Registrar usuarios.
* Registrar productos.

---

## 4.3.3 400 Bad Request

Indica que la solicitud enviada contiene información inválida o que no cumple con las condiciones esperadas por el backend.

Puede presentarse cuando los datos enviados no cumplen las validaciones establecidas.

---

## 4.3.4 404 Not Found

Indica que el recurso solicitado no existe.

Por ejemplo, cuando se intenta consultar un usuario que no está registrado:

```json
{
    "detail": "Usuario no encontrado"
}
```

O cuando se intenta consultar un producto inexistente:

```json
{
    "detail": "Producto no encontrado"
}
```

---

## 4.3.5 401 Unauthorized

Este código todavía **no se encuentra implementado** en el proyecto actual debido a que la API no cuenta con autenticación mediante usuarios o tokens.

Por esta razón, no debe presentarse como una funcionalidad actualmente disponible.

---

## 4.3.6 403 Forbidden

Este código tampoco se encuentra implementado actualmente, debido a que el sistema todavía no maneja permisos o restricciones de acceso según roles.

La implementación de autenticación y autorización queda como una mejora futura.

---

## 4.3.7 500 Internal Server Error

Indica que ocurrió un error inesperado durante el procesamiento de la solicitud.

Puede estar relacionado con situaciones como:

* Errores no controlados en el código.
* Problemas durante la conexión con PostgreSQL.
* Errores inesperados durante una operación de la base de datos.

Este tipo de error debe revisarse en los registros del servidor para identificar su causa.

---

# 4.4 Validación de Solicitudes

Antes de procesar las operaciones, la API utiliza los esquemas definidos para validar la información recibida.

Las validaciones permiten comprobar que los datos enviados correspondan con los tipos y estructuras esperados.

Por ejemplo, para registrar un producto se espera información como:

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

Además de las validaciones realizadas por los esquemas, los servicios pueden comprobar condiciones propias de la lógica del sistema, como la existencia del usuario o producto antes de realizar determinadas operaciones.

Esta separación permite que la ruta reciba la solicitud y delegue la validación y procesamiento correspondiente a las capas encargadas de estas responsabilidades.

---

# 4.5 Formato de las Respuestas

Las respuestas de la API se manejan principalmente mediante JSON.

El formato JSON permite representar de manera estructurada la información que se intercambia entre el frontend y el backend.

### Ejemplo de respuesta exitosa

```json
{
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com"
}
```

### Ejemplo de respuesta de error

```json
{
    "detail": "Usuario no encontrado"
}
```

El uso de respuestas estructuradas facilita el consumo de la API y permite que el frontend pueda interpretar la información recibida.

---

# 4.6 Resumen de Endpoints

La API REST actualmente documentada para Revenfy puede resumirse de la siguiente manera:

| Recurso   | Método | Ruta                              | Operación                       |
| --------- | ------ | --------------------------------- | ------------------------------- |
| Usuarios  | GET    | `/usuarios`                       | Listar usuarios                 |
| Usuarios  | GET    | `/usuarios/{id_usuario}`          | Consultar usuario               |
| Usuarios  | POST   | `/usuarios`                       | Registrar usuario               |
| Usuarios  | PUT    | `/usuarios/{id_usuario}`          | Actualizar usuario              |
| Usuarios  | DELETE | `/usuarios/{id_usuario}`          | Eliminar usuario                |
| Productos | GET    | `/productos`                      | Listar productos                |
| Productos | GET    | `/productos/{id_producto}`        | Consultar producto              |
| Productos | GET    | `/productos/usuario/{id_usuario}` | Consultar productos por usuario |
| Productos | POST   | `/productos`                      | Registrar producto              |
| Productos | PUT    | `/productos/{id_producto}`        | Actualizar producto             |
| Productos | DELETE | `/productos/{id_producto}`        | Eliminar producto               |

Estas rutas corresponden a las operaciones CRUD de usuarios y productos documentadas actualmente en el proyecto.

---

# 4.7 Evidencias de la API

Para demostrar el funcionamiento de la API REST se deben incluir capturas de las pruebas realizadas mediante Swagger UI.

Se recomienda incluir como mínimo:

### Usuarios

[INSERTAR CAPTURA — GET `/usuarios`]

[INSERTAR CAPTURA — GET `/usuarios/{id_usuario}`]

[INSERTAR CAPTURA — POST `/usuarios`]

[INSERTAR CAPTURA — PUT `/usuarios/{id_usuario}`]

[INSERTAR CAPTURA — DELETE `/usuarios/{id_usuario}`]

### Productos

[INSERTAR CAPTURA — GET `/productos`]

[INSERTAR CAPTURA — GET `/productos/{id_producto}`]

[INSERTAR CAPTURA — GET `/productos/usuario/{id_usuario}`]

[INSERTAR CAPTURA — POST `/productos`]

[INSERTAR CAPTURA — PUT `/productos/{id_producto}`]

[INSERTAR CAPTURA — DELETE `/productos/{id_producto}`]

Las capturas deben mostrar el endpoint ejecutado, los datos enviados cuando corresponda, la respuesta obtenida y el código HTTP devuelto.

---

## Cierre del Capítulo 4

La API REST de Revenfy permite administrar los recursos principales de usuarios y productos mediante endpoints organizados y métodos HTTP definidos para cada operación.

La utilización de FastAPI facilita la creación de las rutas, la validación de los datos y la generación de documentación interactiva mediante Swagger UI. La organización de los endpoints permite que el frontend pueda comunicarse con el backend mediante solicitudes HTTP y recibir respuestas estructuradas en formato JSON.

Actualmente, la API cuenta con las operaciones CRUD documentadas para usuarios y productos. Las funcionalidades relacionadas con autenticación, autorización y control de permisos todavía no se encuentran implementadas y deberán incorporarse en etapas posteriores del proyecto.

