# CAPÍTULO 3. ARQUITECTURA DEL BACKEND

Este capítulo presenta la organización interna del backend de Revenfy, explicando cómo se distribuyen sus archivos y responsabilidades, cómo se relacionan los modelos con la base de datos, cómo se procesan las solicitudes y qué prácticas se aplican para mantener el código organizado y mantenible.

El backend de Revenfy está desarrollado con Python y FastAPI y utiliza SQLModel para trabajar con PostgreSQL. La estructura se organiza separando modelos, esquemas, servicios y enrutadores, de manera que cada componente tenga una responsabilidad específica.

---

## 3.1 Estructura de Carpetas

La estructura actual del backend se organiza de la siguiente manera:

```text
Revenfy/
│
├── .venv/
│
├── app/
│   │
│   ├── modelos/
│   │   ├── __pycache__/
│   │   ├── usuario.py
│   │   ├── producto.py
│   │   └── __init__.py
│   │
│   ├── esquemas/
│   │   ├── __pycache__/
│   │   ├── usuario.py
│   │   ├── producto.py
│   │   └── __init__.py
│   │
│   ├── servicios/
│   │   ├── __pycache__/
│   │   ├── usuario_service.py
│   │   └── producto_service.py
│   │
│   ├── enrutadores/
│   │   ├── __pycache__/
│   │   ├── usuario.py
│   │   └── producto.py
│   │
│   ├── conexion_bd.py
│   ├── configuracion.py
│   ├── main.py
│   └── .env
│
└── requirements.txt
```

Esta estructura permite separar las responsabilidades del backend y evitar que toda la lógica de la aplicación se encuentre concentrada en un único archivo. La organización documentada actualmente contempla modelos, esquemas, servicios, enrutadores, configuración y conexión a la base de datos.

### Responsabilidad de cada carpeta y archivo

**Revenfy:** es la carpeta principal que contiene todos los componentes del proyecto.

**.venv:** corresponde al entorno virtual de Python utilizado para instalar y aislar las dependencias del proyecto.

**app:** contiene el código fuente principal del backend.

**modelos:** contiene las clases que representan las entidades y tablas de la base de datos. Estos modelos se construyen utilizando SQLModel.

**esquemas:** contiene las estructuras utilizadas para validar y representar los datos de entrada y salida de la API mediante Pydantic y SQLModel.

**servicios:** contiene la lógica de negocio y las operaciones CRUD. Los servicios reciben la información procesada desde los enrutadores y ejecutan las operaciones correspondientes sobre la base de datos.

**enrutadores:** contiene las rutas de la API y los endpoints. Su función principal es recibir las solicitudes HTTP, utilizar los esquemas correspondientes y delegar el procesamiento a los servicios.

****pycache**:** es una carpeta generada automáticamente por Python que contiene archivos compilados para facilitar la ejecución del código.

**conexion_bd.py:** configura la conexión con PostgreSQL y la sesión utilizada para interactuar con la base de datos.

**configuracion.py:** administra las variables de configuración del proyecto y permite obtener información desde las variables de entorno.

**main.py:** es el punto de entrada de la aplicación FastAPI y se encarga de inicializar la aplicación y registrar los enrutadores.

**.env:** contiene las variables de entorno utilizadas para configurar la aplicación y la conexión con la base de datos. Las credenciales sensibles no deben exponerse públicamente.

**requirements.txt:** contiene las dependencias necesarias para instalar y ejecutar el proyecto.

La organización por carpetas permite que cada componente tenga una responsabilidad definida y facilita el mantenimiento y la ampliación del backend.

---

## 3.2 Modelos

Los modelos representan las entidades principales que utiliza el sistema. En Revenfy se utiliza SQLModel para definir estas entidades mediante clases de Python y relacionarlas con las tablas de PostgreSQL.

Actualmente se encuentran documentados principalmente los modelos **Usuario** y **Producto**.

### Modelo Usuario

El modelo `Usuario` representa la información de las personas registradas en la plataforma.

Sus principales atributos son:

* `id_usuario`
* `nombre`
* `apellido`
* `correo`
* `telefono`
* `programa_formacion`
* `rol`
* `estado`
* `fecha_registro`

El identificador `id_usuario` permite distinguir cada usuario dentro del sistema. El correo se utiliza como dato de contacto e identificación y se encuentra sujeto a validaciones para evitar registros duplicados.

El atributo `rol` permite identificar el tipo de usuario dentro del sistema, mientras que `estado` permite determinar si el usuario se encuentra activo.

### Modelo Producto

El modelo `Producto` representa los artículos publicados dentro de Revenfy.

Sus principales atributos son:

* `id_producto`
* `titulo`
* `descripcion`
* `categoria`
* `precio`
* `imagen`
* `estado_producto`
* `id_usuario`

El atributo `id_usuario` permite establecer la relación entre el producto y el usuario que realizó la publicación.

### Relación entre Usuario y Producto

Entre los modelos Usuario y Producto se establece una relación **uno a muchos (1:N)**:

* Un usuario puede registrar varios productos.
* Cada producto pertenece a un usuario.

Esta relación se establece mediante una llave foránea y las relaciones de SQLModel.

El modelo utiliza mecanismos como:

* `Relationship()`
* `back_populates`
* Llave foránea `id_usuario`

Esto permite mantener la relación entre los registros y consultar los productos asociados a un usuario determinado.

### Validación de los modelos

Además de representar las tablas, los datos que ingresan al sistema son validados mediante los esquemas correspondientes. Esto permite separar la representación de los datos almacenados de la información que recibe o devuelve la API.

**Evidencia que debe agregarse:**

[INSERTAR CAPTURA DEL CÓDIGO DEL MODELO `Usuario`]

[INSERTAR CAPTURA DEL CÓDIGO DEL MODELO `Producto`]

La documentación actual del proyecto describe la relación entre Usuario y Producto mediante `Relationship()`, `back_populates` y la llave foránea `id_usuario`.

---

## 3.3 Controladores (Servicios)

En Revenfy, la lógica de negocio se encuentra organizada principalmente en la carpeta `servicios`. Estos componentes funcionan como intermediarios entre los enrutadores y la capa de persistencia.

Esta separación permite evitar que los endpoints contengan toda la lógica de la aplicación.

Los servicios se encargan de:

* Recibir los datos enviados desde las rutas.
* Realizar validaciones.
* Aplicar reglas de negocio.
* Consultar la base de datos.
* Crear registros.
* Actualizar registros.
* Eliminar registros.
* Generar respuestas o errores controlados.

### Servicios de Usuario

El archivo `usuario_service.py` contiene las operaciones relacionadas con los usuarios.

Entre las operaciones implementadas se encuentran:

* Listar usuarios.
* Consultar un usuario por ID.
* Registrar un usuario.
* Actualizar un usuario.
* Eliminar un usuario.

### Servicios de Producto

El archivo `producto_service.py` contiene las operaciones relacionadas con los productos.

Entre las operaciones implementadas se encuentran:

* Listar productos.
* Consultar un producto por ID.
* Consultar los productos asociados a un usuario.
* Registrar un producto.
* Actualizar un producto.
* Eliminar un producto.

Cada servicio utiliza una sesión de SQLModel para realizar las operaciones correspondientes sobre PostgreSQL.

### Validaciones

Las validaciones se realizan en diferentes niveles.

Los esquemas permiten realizar validaciones relacionadas con el tipo y formato de los datos. Por ejemplo, permiten controlar que los datos enviados correspondan con los tipos definidos.

Adicionalmente, los servicios pueden realizar validaciones relacionadas directamente con las reglas del sistema, como verificar si un usuario existe antes de actualizarlo o eliminarlo y comprobar si un producto existe antes de realizar una operación sobre él.

### Reglas de negocio

Las reglas de negocio representan condiciones específicas del funcionamiento de Revenfy.

Entre las reglas contempladas se encuentran:

* Un usuario no debe registrarse nuevamente utilizando un correo que ya se encuentre registrado.
* Un producto debe contar con la información requerida antes de ser almacenado.
* No se debe permitir la modificación de un producto que no exista.
* No se debe permitir la eliminación de un producto que no exista.

Estas reglas son diferentes de las validaciones básicas de formato porque corresponden directamente al funcionamiento que debe tener la plataforma.

### Procesamiento de solicitudes

El flujo general dentro de los servicios es:

```text
Solicitud HTTP
      ↓
Enrutador
      ↓
Esquema / Validación
      ↓
Servicio
      ↓
Reglas de negocio
      ↓
SQLModel
      ↓
PostgreSQL
      ↓
Respuesta
```

Cuando una solicitud llega al servicio, se valida la información y se aplican las reglas correspondientes. Si la operación es válida, se realiza la consulta o modificación en PostgreSQL.

Cuando ocurre una situación que impide realizar la operación, se utiliza un error HTTP controlado en lugar de permitir que el servidor falle de manera inesperada.

**Evidencia que debe agregarse:**

[INSERTAR CAPTURA DE `usuario_service.py`]

[INSERTAR CAPTURA DE `producto_service.py`]

---

## 3.4 Rutas

Las rutas representan el punto de entrada de las solicitudes HTTP hacia el backend.

En Revenfy se utiliza `APIRouter` para organizar los endpoints de acuerdo con cada módulo del sistema.

Actualmente se encuentran definidos enrutadores para usuarios y productos.

### Endpoints de Usuarios

| Método HTTP | Endpoint                 | Descripción                     |
| ----------- | ------------------------ | ------------------------------- |
| GET         | `/usuarios`              | Lista los usuarios registrados. |
| GET         | `/usuarios/{id_usuario}` | Consulta un usuario específico. |
| POST        | `/usuarios`              | Registra un nuevo usuario.      |
| PUT         | `/usuarios/{id_usuario}` | Actualiza un usuario existente. |
| DELETE      | `/usuarios/{id_usuario}` | Elimina un usuario.             |

### Endpoints de Productos

| Método HTTP | Endpoint                          | Descripción                           |
| ----------- | --------------------------------- | ------------------------------------- |
| GET         | `/productos`                      | Lista los productos registrados.      |
| GET         | `/productos/{id_producto}`        | Consulta un producto específico.      |
| GET         | `/productos/usuario/{id_usuario}` | Consulta los productos de un usuario. |
| POST        | `/productos`                      | Registra un nuevo producto.           |
| PUT         | `/productos/{id_producto}`        | Actualiza un producto existente.      |
| DELETE      | `/productos/{id_producto}`        | Elimina un producto.                  |

Las rutas reciben las solicitudes HTTP y delegan el procesamiento a la capa de servicios. De esta manera, el enrutador no concentra directamente toda la lógica de negocio.

Por ejemplo, una solicitud:

```text
POST /productos
```

es recibida por el enrutador de productos, se valida mediante el esquema correspondiente y posteriormente se delega al servicio encargado de registrar el producto.

Esta separación permite mantener los endpoints más simples y facilita el mantenimiento del código. La documentación actual del proyecto registra las operaciones CRUD de usuarios y productos mediante estos enrutadores.

**Evidencia que debe agregarse:**

[INSERTAR CAPTURA DEL ARCHIVO `usuario.py` DE LA CARPETA `enrutadores`]

[INSERTAR CAPTURA DEL ARCHIVO `producto.py` DE LA CARPETA `enrutadores`]

---

## 3.5 Variables de Entorno

Para evitar almacenar directamente información sensible dentro del código fuente, Revenfy utiliza variables de entorno mediante el archivo `.env`.

Esta configuración permite separar los datos de configuración del código de la aplicación.

Entre las variables utilizadas se encuentran:

```text
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=revenfy
DATABASE_USER=postgres
DATABASE_PASSWORD=********
SECRET_KEY=********
```

La contraseña y la clave secreta no deben mostrarse en capturas, repositorios públicos ni documentos que puedan ser compartidos.

Estas variables son cargadas desde `configuracion.py`, donde se utilizan para configurar la aplicación y establecer la conexión con PostgreSQL.

### Importancia de utilizar variables de entorno

El uso de variables de entorno permite:

* Evitar colocar contraseñas directamente en el código.
* Cambiar la configuración sin modificar los archivos Python.
* Utilizar diferentes configuraciones para desarrollo y producción.
* Reducir el riesgo de exponer información sensible.
* Facilitar la configuración del proyecto en diferentes equipos.

Por lo tanto, el archivo `.env` debe mantenerse fuera del repositorio público cuando contenga información sensible y debe agregarse al `.gitignore`.

**Evidencia que debe agregarse:**

[INSERTAR CAPTURA DEL ARCHIVO `.env` OCULTANDO LA CONTRASEÑA Y LA CLAVE SECRETA]

La documentación actual del proyecto identifica variables como `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD` y `SECRET_KEY`.

---

## 3.6 Buenas Prácticas Aplicadas

Durante el desarrollo del backend de Revenfy se han aplicado diferentes buenas prácticas orientadas a mantener el código organizado, facilitar su mantenimiento y disminuir errores.

### Separación por capas

Se separan las responsabilidades entre modelos, esquemas, servicios y enrutadores. Esto evita concentrar toda la lógica del sistema en un único archivo.

### Organización modular

Cada funcionalidad principal se organiza en archivos y carpetas relacionados con su responsabilidad.

### Uso de SQLModel

SQLModel permite trabajar con los modelos de la aplicación y relacionarlos con las tablas de PostgreSQL mediante Python.

### Validación con Pydantic

Los esquemas permiten validar los datos recibidos por los endpoints antes de procesarlos.

### Reutilización de código

La lógica relacionada con usuarios y productos se concentra en servicios específicos, evitando repetir las mismas operaciones directamente en cada endpoint.

### Manejo de relaciones

Las relaciones entre entidades se gestionan mediante llaves foráneas y relaciones de SQLModel.

### Variables de entorno

Las configuraciones sensibles se mantienen fuera del código fuente mediante variables de entorno.

### Nombres descriptivos

Se utilizan nombres que permiten identificar la responsabilidad de los archivos, como:

* `conexion_bd.py`
* `configuracion.py`
* `usuario_service.py`
* `producto_service.py`
* `usuario.py`
* `producto.py`

### Manejo de excepciones

Cuando una operación no puede realizarse, se utilizan excepciones HTTP controladas para informar al cliente sobre el problema.

Por ejemplo:

```json
{
    "detail": "Usuario no encontrado"
}
```

Estas prácticas permiten mantener un backend más organizado y facilitan que los integrantes del equipo puedan comprender y modificar el código. La documentación del proyecto identifica explícitamente estas prácticas como parte de la implementación actual.

---

## 3.7 Respuesta Unificada del Backend

Los endpoints de Revenfy utilizan respuestas estructuradas para facilitar el consumo de la API por parte del frontend y de otros clientes.

Las respuestas pueden representar operaciones exitosas o situaciones en las que la solicitud no puede completarse.

### Respuesta exitosa

Cuando una operación se realiza correctamente, el backend devuelve la información correspondiente utilizando el modelo de respuesta definido.

Por ejemplo, una consulta de usuario puede devolver:

```json
{
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Forigua",
    "correo": "ana@email.com"
}
```

La respuesta contiene únicamente la información correspondiente al recurso solicitado.

### Respuesta de error

Cuando el recurso solicitado no existe, el backend puede devolver un mensaje de error controlado:

```json
{
    "detail": "Usuario no encontrado"
}
```

De esta manera, el cliente puede identificar qué ocurrió con la solicitud.

### Códigos HTTP utilizados

Entre los códigos utilizados en el backend se encuentran:

| Código | Significado           | Uso en Revenfy                                           |
| ------ | --------------------- | -------------------------------------------------------- |
| 200    | OK                    | Solicitud procesada correctamente.                       |
| 201    | Created               | Registro creado correctamente.                           |
| 400    | Bad Request           | Datos enviados que no cumplen las condiciones esperadas. |
| 404    | Not Found             | Recurso solicitado que no existe.                        |
| 500    | Internal Server Error | Error inesperado durante el procesamiento.               |

Actualmente los códigos **401 Unauthorized** y **403 Forbidden** no forman parte del funcionamiento implementado, debido a que la API todavía no cuenta con autenticación mediante usuarios o tokens ni con un sistema de permisos que restrinja el acceso según roles.

### Beneficios de las respuestas estructuradas

El uso de respuestas estructuradas permite:

* Mantener un formato consistente.
* Facilitar el consumo de la API desde el frontend.
* Identificar correctamente los errores.
* Facilitar las pruebas de los endpoints.
* Simplificar el mantenimiento del backend.
* Mejorar la comunicación entre el cliente y el servidor.

Por lo tanto, la respuesta del backend no solamente indica si una operación fue exitosa, sino que proporciona información que permite al cliente interpretar el resultado de la solicitud.

---

## Cierre del Capítulo 3

La arquitectura del backend de Revenfy permite separar las responsabilidades principales del sistema y establecer una comunicación organizada entre los diferentes componentes.

El flujo comienza cuando un cliente realiza una solicitud HTTP hacia FastAPI. La solicitud es recibida por un enrutador, validada mediante los esquemas correspondientes y posteriormente procesada por un servicio. El servicio aplica las reglas necesarias y utiliza SQLModel para interactuar con PostgreSQL. Finalmente, el backend devuelve una respuesta estructurada al cliente.

Esta organización permite que cada componente tenga una responsabilidad específica, facilitando el mantenimiento del proyecto y permitiendo incorporar nuevas funcionalidades en futuras etapas.

