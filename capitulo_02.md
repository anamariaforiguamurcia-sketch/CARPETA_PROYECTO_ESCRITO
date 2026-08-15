# CAPÍTULO 2. DIAGNÓSTICO TÉCNICO DEL DESARROLLO

## 2.1 Arquitectura del Proyecto

Revenfy está organizado mediante una estructura modular que permite separar las diferentes responsabilidades del backend. Esta organización busca facilitar la comprensión del código, el mantenimiento del proyecto y la incorporación de nuevas funcionalidades.

La estructura documentada actualmente para el backend es la siguiente:

```text
Revenfy/
│
├── .venv/
│
├── app/
│   │
│   ├── modelos/
│   │   ├── usuario.py
│   │   ├── producto.py
│   │   └── __init__.py
│   │
│   ├── esquemas/
│   │   ├── usuario.py
│   │   ├── producto.py
│   │   └── __init__.py
│   │
│   ├── servicios/
│   │   ├── usuario_service.py
│   │   └── producto_service.py
│   │
│   ├── enrutadores/
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

Esta estructura se encuentra documentada en el desarrollo actual del backend de Revenfy.

### 2.1.1 Responsabilidad de las carpetas y archivos

**app:** contiene el código fuente principal del backend.

**modelos:** contiene las clases que representan las entidades y tablas de la base de datos mediante SQLModel.

**esquemas:** contiene los esquemas utilizados para validar la información de entrada y salida de la API mediante Pydantic y SQLModel.

**servicios:** contiene la lógica de negocio y las operaciones relacionadas con el manejo de los datos. Actualmente se encuentran servicios para usuarios y productos.

**enrutadores:** contiene las rutas de la API y los endpoints que reciben las solicitudes HTTP y delegan las operaciones correspondientes a los servicios.

**conexion_bd.py:** se encarga de configurar la conexión con PostgreSQL y administrar la interacción con la sesión de base de datos.

**configuracion.py:** permite administrar las variables de configuración obtenidas desde el entorno.

**main.py:** corresponde al punto de entrada de la aplicación FastAPI y permite registrar los diferentes enrutadores.

**.env:** contiene las variables de entorno necesarias para configurar la aplicación, evitando almacenar directamente las credenciales dentro del código fuente.

**requirements.txt:** contiene las dependencias necesarias para instalar y ejecutar el proyecto.

La separación permite evitar que toda la lógica se encuentre concentrada en un único archivo y facilita identificar dónde debe realizarse cada modificación.

---

## 2.2 Arquitectura Tecnológica

La solución utiliza diferentes tecnologías para desarrollar el backend, administrar la información y facilitar el trabajo colaborativo.

### 2.2.1 Backend

**Python:** lenguaje de programación utilizado para desarrollar la lógica del backend.

**FastAPI:** framework utilizado para construir la API REST de Revenfy y definir los endpoints que permiten gestionar la información del sistema.

**SQLModel:** herramienta utilizada para definir los modelos y facilitar la interacción entre las clases de Python y la base de datos relacional.

**Pydantic:** utilizado para la validación y estructuración de los datos recibidos y enviados por la API.

### 2.2.2 Base de datos

**PostgreSQL:** sistema gestor de base de datos utilizado para almacenar la información del proyecto.

La documentación técnica del proyecto establece que PostgreSQL fue seleccionado por su capacidad para manejar relaciones entre tablas y por sus características como sistema gestor relacional.

### 2.2.3 API

Revenfy utiliza una arquitectura de servicios basada en una API REST desarrollada con FastAPI. Los recursos de usuarios y productos son administrados mediante diferentes métodos HTTP, entre ellos GET, POST, PUT y DELETE.

### 2.2.4 Herramientas

**Git:** utilizado para el control de versiones.

**GitHub:** utilizado como repositorio remoto y para facilitar el trabajo colaborativo.

**Swagger UI:** utilizado para visualizar y probar los endpoints de la API.

La documentación del proyecto indica que Swagger UI es generado mediante FastAPI y permite visualizar endpoints, métodos HTTP, modelos de entrada y salida y códigos de respuesta.

---

## 2.3 Estado del Desarrollo

El estado actual del proyecto se centra principalmente en el desarrollo del backend y en la construcción de la API REST para gestionar usuarios y productos.

La guía del instructor establece que en este apartado se debe mostrar qué se ha desarrollado realmente, incluyendo endpoints, CRUD, validaciones, autenticación, frontend y base de datos, sin que sea obligatorio que el proyecto esté completamente terminado.

### 2.3.1 Backend

Actualmente se encuentran desarrolladas operaciones CRUD para usuarios y productos.

### Usuarios

Se encuentran documentadas las siguientes operaciones:

* Listar usuarios.
* Consultar un usuario por identificador.
* Registrar usuarios.
* Actualizar usuarios.
* Eliminar usuarios.

### Productos

Se encuentran documentadas las siguientes operaciones:

* Listar productos.
* Consultar un producto por identificador.
* Consultar productos asociados a un usuario.
* Registrar productos.
* Actualizar productos.
* Eliminar productos.

Estas operaciones son implementadas mediante servicios y enrutadores separados.

### 2.3.2 Validaciones

El proyecto utiliza esquemas para validar los datos recibidos por la API. La documentación señala el uso de Pydantic para realizar validaciones automáticas y validaciones adicionales dentro de los servicios para controlar condiciones propias del sistema.

Entre las validaciones documentadas se encuentran:

* Formato de los datos.
* Validación del correo.
* Existencia de usuarios.
* Existencia de productos.
* Validaciones relacionadas con la información de los productos.

### 2.3.3 Base de datos

La información es almacenada en PostgreSQL y los modelos se definen mediante SQLModel.

Actualmente se documentan principalmente los modelos **Usuario** y **Producto**, estableciendo una relación en la que un usuario puede registrar varios productos y cada producto pertenece a un usuario.

### 2.3.4 Autenticación y permisos

Actualmente la API no cuenta con autenticación mediante usuarios o tokens, por lo que los códigos de respuesta 401 y 403 todavía no hacen parte del funcionamiento implementado.

La propia documentación del proyecto establece que el código 401 no fue implementado debido a la ausencia de autenticación y que el código 403 no fue implementado debido a que todavía no existen restricciones de acceso mediante roles.

Por lo tanto, la autenticación y el control de permisos se consideran funcionalidades pendientes.

### 2.3.5 Estado general

El estado actual puede resumirse de la siguiente manera:

| Componente             | Estado       |
| ---------------------- | ------------ |
| Estructura del backend | Implementado |
| FastAPI                | Implementado |
| PostgreSQL             | Implementado |
| SQLModel               | Implementado |
| Pydantic               | Implementado |
| CRUD de usuarios       | Implementado |
| CRUD de productos      | Implementado |
| Swagger                | Implementado |
| Validaciones           | Implementado |
| Autenticación          | Pendiente    |
| JWT                    | Pendiente    |
| Control de permisos    | Pendiente    |

---

## 2.4 Evidencia del Código

El proyecto cuenta con diferentes elementos que permiten demostrar el desarrollo realizado. El instructor establece que la evidencia debe incluir el repositorio, ramas, commits, estructura del proyecto y funcionamiento.

### 2.4.1 Repositorio

El código fuente del proyecto se encuentra organizado mediante Git y GitHub.

**Evidencia que debe incorporarse al documento:**

[Insertar captura real del repositorio de Revenfy en GitHub]

### 2.4.2 Ramas

Las ramas documentadas actualmente son:

* **main**
* **develop**
* **feature/backend**
* **feature/frontend**

La rama `main` se plantea como rama estable, mientras que `develop` funciona como rama de integración y las ramas `feature` se utilizan para desarrollar funcionalidades específicas.

**Evidencia:**

[Insertar captura real de las ramas del repositorio]

### 2.4.3 Commits

Los commits permiten identificar los cambios realizados durante el desarrollo.

Entre los cambios documentados se encuentran:

* Creación del repositorio.
* Documentación inicial de Revenfy.
* Definición de requisitos funcionales y no funcionales.
* Desarrollo del backend.
* Organización del código.
* Desarrollo de funcionalidades.

**Evidencia:**

[Insertar captura real del historial de commits]

### 2.4.4 Código

El código se encuentra organizado por responsabilidades mediante modelos, esquemas, servicios y enrutadores.

**Evidencia:**

[Insertar captura real de la estructura del proyecto en VS Code]

### 2.4.5 Funcionamiento de la API

La API puede ser ejecutada y probada mediante Swagger UI.

**Evidencia:**

[Insertar captura real de Swagger mostrando los endpoints]

### 2.4.6 Pruebas realizadas

Se han documentado pruebas de las operaciones de usuarios y productos, incluyendo consultas, registros, actualizaciones y eliminaciones.

**Evidencia:**

[Insertar capturas reales de las pruebas realizadas en Swagger]

---

## 2.5 Configuración del Proyecto

La configuración del proyecto se realiza mediante variables de entorno almacenadas en el archivo `.env`. Esta práctica permite separar la configuración del código fuente y evita escribir directamente las credenciales de acceso a la base de datos dentro de los archivos Python.

Las variables documentadas para la conexión son:

```text
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=revenfy
DATABASE_USER=postgres
DATABASE_PASSWORD=********
```

El proyecto utiliza `configuracion.py` para cargar estas variables y construir la configuración necesaria para la conexión con PostgreSQL.

La contraseña real no debe incluirse en el documento ni en capturas públicas.

### Variables de entorno

**DATABASE_HOST:** indica el servidor donde se encuentra PostgreSQL.

**DATABASE_PORT:** indica el puerto utilizado por PostgreSQL.

**DATABASE_NAME:** indica el nombre de la base de datos utilizada por Revenfy.

**DATABASE_USER:** indica el usuario utilizado para establecer la conexión.

**DATABASE_PASSWORD:** contiene la contraseña de acceso y debe mantenerse protegida.

El uso de variables de entorno permite modificar la configuración del proyecto sin necesidad de cambiar directamente el código fuente y ayuda a proteger información sensible.

**Evidencia:**

[Insertar captura del archivo `.env` ocultando la contraseña]

---

## 2.6 Decisiones de Diseño

Las tecnologías utilizadas fueron seleccionadas teniendo en cuenta las necesidades actuales del proyecto, el tipo de aplicación desarrollada y los conocimientos adquiridos durante el proceso de formación.

### Python

Se seleccionó Python como lenguaje para el backend debido a que permite desarrollar la lógica de la aplicación de manera estructurada y facilita la utilización de frameworks y herramientas para construir servicios web.

### FastAPI

FastAPI fue seleccionado para desarrollar la API REST de Revenfy. Permite organizar los endpoints del sistema, trabajar con métodos HTTP y generar automáticamente documentación interactiva mediante Swagger UI.

Además, su integración con Pydantic facilita la validación de los datos recibidos por los endpoints.

### Pydantic

Pydantic se utiliza para estructurar y validar la información que recibe y devuelve la API. Esto permite controlar que los datos cumplan con los formatos definidos antes de ser procesados.

### SQLModel

SQLModel fue seleccionado para trabajar con los modelos de datos desde Python y facilitar la comunicación con PostgreSQL mediante un enfoque orientado a objetos.

La documentación del proyecto señala que SQLModel permite representar las tablas mediante clases de Python y realizar las consultas mediante sesiones, evitando escribir directamente todas las instrucciones SQL.

### PostgreSQL

PostgreSQL fue seleccionado como sistema gestor de base de datos porque Revenfy maneja información relacionada entre diferentes entidades. El proyecto requiere almacenar y relacionar información de usuarios y productos, por lo que una base de datos relacional resulta adecuada para el desarrollo actual.

### Git y GitHub

Git y GitHub fueron seleccionados para llevar el control de versiones del código y facilitar el trabajo colaborativo entre los integrantes del equipo.

---

## 2.7 Decisiones de Arquitectura

Revenfy utiliza una arquitectura monolítica organizada por capas. La aplicación se encuentra desarrollada como una solución integrada, pero internamente sus responsabilidades se separan en diferentes componentes.

La arquitectura se divide principalmente en:

### Capa de presentación

Corresponde a la parte con la que interactúa el usuario mediante el frontend. En la documentación del proyecto se identifican archivos como `index.html`, `login.html`, `registrarse.html`, `dashboard.html`, archivos JavaScript y hojas de estilos.

### Capa de lógica

En el backend, la lógica se encuentra organizada principalmente mediante los servicios y los enrutadores. Los servicios se encargan de procesar las operaciones y aplicar las validaciones correspondientes.

### Capa de persistencia

Esta capa se encarga de almacenar y recuperar la información mediante los modelos y PostgreSQL.

El flujo general de una solicitud puede representarse de la siguiente manera:

```text
Usuario / Cliente
       ↓
Frontend / Swagger
       ↓
FastAPI
       ↓
Enrutadores
       ↓
Servicios
       ↓
Modelos / SQLModel
       ↓
PostgreSQL
```

La documentación del proyecto explica que las capas se comunican de manera organizada y que el cliente no interactúa directamente con la base de datos.

### Justificación

Se seleccionó esta estructura porque el proyecto se encuentra en una etapa de desarrollo académico y tiene un alcance controlado. Una arquitectura monolítica permite mantener los diferentes componentes dentro de una misma aplicación sin requerir la complejidad de distribuir el sistema en múltiples servicios.

La separación por capas permite mantener responsabilidades diferenciadas y facilita la modificación de una parte del sistema sin tener que concentrar toda la lógica en un único archivo.

---

## 2.8 Buenas Prácticas Implementadas

Durante el desarrollo de Revenfy se han aplicado diferentes prácticas orientadas a mantener el código organizado y facilitar su mantenimiento.

### 2.8.1 Separación de responsabilidades

El proyecto separa modelos, esquemas, servicios y enrutadores, evitando concentrar todas las responsabilidades dentro de los endpoints.

### 2.8.2 Organización modular

La estructura de carpetas permite separar las funcionalidades según su responsabilidad.

### 2.8.3 Validación de datos

Se utilizan esquemas para validar la información recibida por los endpoints. Además, los servicios realizan validaciones relacionadas con las reglas del sistema.

### 2.8.4 Variables de entorno

Las credenciales y datos de configuración se almacenan mediante variables de entorno en lugar de escribirlos directamente dentro del código fuente.

### 2.8.5 Nombres descriptivos

Se utilizan nombres como `usuario_service.py`, `producto_service.py`, `conexion_bd.py` y `configuracion.py`, que permiten identificar la responsabilidad de cada archivo.

### 2.8.6 Manejo de errores

Los servicios utilizan excepciones controladas mediante `HTTPException` para responder cuando una operación no puede realizarse correctamente.

### 2.8.7 Uso de Git

Git permite llevar un registro de los cambios realizados y trabajar mediante diferentes ramas.

### 2.8.8 Documentación

La API cuenta con documentación generada mediante Swagger UI, lo que facilita consultar y probar los endpoints.

### 2.8.9 Código modular

La lógica de usuarios y productos se encuentra distribuida entre modelos, servicios y enrutadores, lo que facilita localizar y modificar cada funcionalidad.

---

## 2.9 Estado del Backlog

El backlog permite relacionar los requerimientos del proyecto con las historias de usuario, las tareas técnicas y el código desarrollado.

El instructor establece que esta relación debe demostrar la trazabilidad entre los requerimientos, las historias de usuario, las tareas técnicas y el código.

Para Revenfy, esta trazabilidad debe mantenerse de la siguiente manera:

| Requerimiento / funcionalidad | Historia de Usuario                           | Tarea técnica                                           | Código relacionado                                              | Estado       |
| ----------------------------- | --------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- | ------------ |
| Registro de usuarios          | Historia relacionada con registro             | Crear modelo, esquema, servicio y endpoint de usuarios  | `usuario.py`, `usuario_service.py`, `enrutadores/usuario.py`    | Implementado |
| Consulta de usuarios          | Historia relacionada con consulta             | Crear endpoint GET de usuarios                          | `enrutadores/usuario.py` y `usuario_service.py`                 | Implementado |
| Actualización de usuarios     | Historia relacionada con gestión de usuarios  | Crear endpoint PUT                                      | `enrutadores/usuario.py` y `usuario_service.py`                 | Implementado |
| Eliminación de usuarios       | Historia relacionada con gestión de usuarios  | Crear endpoint DELETE                                   | `enrutadores/usuario.py` y `usuario_service.py`                 | Implementado |
| Publicación de productos      | Historia relacionada con publicación          | Crear modelo, esquema, servicio y endpoint de productos | `producto.py`, `producto_service.py`, `enrutadores/producto.py` | Implementado |
| Consulta de productos         | Historia relacionada con consulta             | Crear endpoints GET                                     | `enrutadores/producto.py` y `producto_service.py`               | Implementado |
| Actualización de productos    | Historia relacionada con gestión de productos | Crear endpoint PUT                                      | `enrutadores/producto.py` y `producto_service.py`               | Implementado |
| Eliminación de productos      | Historia relacionada con gestión de productos | Crear endpoint DELETE                                   | `enrutadores/producto.py` y `producto_service.py`               | Implementado |
| Autenticación                 | Historia relacionada con inicio de sesión     | Implementar autenticación y JWT                         | Pendiente                                                       | Pendiente    |
| Control de roles y permisos   | Historia relacionada con roles                | Implementar autorización                                | Pendiente                                                       | Pendiente    |
| Búsqueda y filtros            | Historia relacionada con búsqueda             | Crear filtros de productos                              | Pendiente                                                       | Pendiente    |
| Mensajería interna            | Historia relacionada con comunicación         | Crear módulo de mensajes                                | Pendiente                                                       | Pendiente    |
| Calificación de usuarios      | Historia relacionada con reputación           | Crear módulo de calificaciones                          | Pendiente                                                       | Pendiente    |

La tabla debe completarse con los códigos exactos de las historias de usuario que tenga actualmente el equipo. No se deben inventar identificadores de HU si estos no se encuentran definidos en el backlog oficial.

---

## 2.10 Estrategia de Desarrollo

El desarrollo de Revenfy se realizó de manera progresiva, comenzando por la estructura básica del proyecto y posteriormente construyendo los componentes necesarios para gestionar la información.

Primero se estableció la estructura del backend y la configuración general del proyecto. Posteriormente se configuró la conexión con la base de datos y se definieron los modelos correspondientes a las entidades principales.

Después se crearon los esquemas para validar los datos y los servicios encargados de implementar las operaciones de negocio.

Una vez organizados estos componentes, se desarrollaron los enrutadores y endpoints para permitir que la API recibiera solicitudes HTTP y ejecutara las operaciones correspondientes.

Finalmente, se realizaron pruebas mediante Swagger UI para verificar el funcionamiento de los endpoints de usuarios y productos.

El orden seguido puede representarse de la siguiente manera:

```text
Estructura del proyecto
        ↓
Configuración
        ↓
Conexión con PostgreSQL
        ↓
Modelos
        ↓
Esquemas
        ↓
Servicios
        ↓
Enrutadores
        ↓
Endpoints CRUD
        ↓
Pruebas mediante Swagger
        ↓
Documentación
```

Este orden permite construir primero la base técnica necesaria y posteriormente agregar las funcionalidades que dependen de ella.

Las funcionalidades de autenticación, permisos y otras características planteadas inicialmente quedan como parte de las siguientes etapas de desarrollo.

---

## 2.11 Dificultades Encontradas

Durante el desarrollo del proyecto se presentaron diferentes dificultades relacionadas con la configuración, el backend, la base de datos y la organización del código.

### 2.11.1 Dificultades técnicas

Una de las dificultades estuvo relacionada con la configuración del entorno de desarrollo y las dependencias necesarias para ejecutar FastAPI y las demás herramientas utilizadas.

También se presentaron dificultades durante la conexión del backend con PostgreSQL y durante la configuración de las variables necesarias para establecer la conexión.

Otra dificultad estuvo relacionada con la definición de modelos y relaciones utilizando SQLModel, debido a que las relaciones entre entidades requieren que los modelos, llaves foráneas y relaciones estén correctamente definidos.

También se presentaron errores durante el desarrollo de los endpoints, principalmente relacionados con solicitudes a recursos inexistentes y errores internos del servidor.

### 2.11.2 Dificultades funcionales

Una de las dificultades funcionales fue determinar qué funcionalidades se encontraban realmente implementadas y cuáles todavía pertenecían a la planificación del proyecto.

Actualmente, funcionalidades como autenticación, JWT y control de permisos no se encuentran implementadas. La documentación del proyecto reconoce específicamente que los códigos 401 y 403 todavía no hacen parte del funcionamiento de la API.

También se identificó la necesidad de diferenciar las funcionalidades planteadas inicialmente para Revenfy de las funcionalidades que ya cuentan con implementación en el backend.

### 2.11.3 Dificultades organizacionales

El desarrollo colaborativo requiere mantener una estructura clara para evitar conflictos entre los cambios realizados por los integrantes.

Para manejar esta situación se definió una estrategia de ramas utilizando `main`, `develop`, `feature/backend` y `feature/frontend`.

### 2.11.4 Soluciones aplicadas

Las dificultades se fueron solucionando mediante:

* Revisión de la estructura del proyecto.
* Organización del código por responsabilidades.
* Separación entre modelos, esquemas, servicios y rutas.
* Configuración mediante variables de entorno.
* Pruebas de los endpoints mediante Swagger.
* Revisión de errores HTTP.
* Uso de Git y ramas para organizar el trabajo colaborativo.
* Revisión de la conexión con PostgreSQL.
* Corrección progresiva de los modelos y relaciones.

Estas acciones permitieron avanzar desde una estructura inicial hacia un backend organizado y funcional para las operaciones actualmente implementadas.

---

## 2.12 Plan de Mejoramiento

A partir del diagnóstico realizado, se identifican diferentes aspectos que pueden mejorarse en las siguientes etapas del proyecto.

### 2.12.1 Seguridad

**Situación actual:** la API todavía no cuenta con autenticación mediante usuarios o tokens ni con restricciones de acceso por roles.

**Mejora propuesta:** implementar autenticación mediante JWT y posteriormente establecer permisos según el rol del usuario.

**Prioridad:** Alta.

### 2.12.2 Roles y permisos

**Situación actual:** los roles se encuentran planteados dentro del proyecto, pero todavía no existen restricciones de acceso implementadas.

**Mejora propuesta:** establecer permisos para determinar qué operaciones puede realizar cada tipo de usuario.

**Prioridad:** Alta.

### 2.12.3 Búsqueda y filtros

**Situación actual:** la funcionalidad se encuentra planteada dentro de los objetivos del proyecto, pero no forma parte del CRUD actualmente documentado.

**Mejora propuesta:** implementar filtros por nombre, categoría, precio y estado del producto.

**Prioridad:** Alta.

### 2.12.4 Mensajería

**Situación actual:** se encuentra planteada como funcionalidad de Revenfy, pero no aparece dentro de los endpoints actualmente documentados.

**Mejora propuesta:** desarrollar un módulo que permita la comunicación entre compradores y vendedores.

**Prioridad:** Media.

### 2.12.5 Sistema de calificación

**Situación actual:** se encuentra contemplado en los objetivos del proyecto, pero todavía no se encuentra implementado en el backend documentado.

**Mejora propuesta:** desarrollar un sistema de calificación o reputación asociado a las operaciones realizadas.

**Prioridad:** Media.

### 2.12.6 Pruebas automatizadas

**Situación actual:** las pruebas documentadas se realizan principalmente mediante Swagger UI.

**Mejora propuesta:** incorporar pruebas unitarias y pruebas de integración para validar automáticamente los servicios y endpoints.

**Prioridad:** Alta.

### 2.12.7 Manejo de imágenes

**Situación actual:** los productos contemplan información relacionada con imágenes, pero se requiere fortalecer el mecanismo de almacenamiento y gestión de estos archivos.

**Mejora propuesta:** utilizar un mecanismo adecuado para almacenar las imágenes y administrar sus referencias desde la base de datos.

**Prioridad:** Media.

### 2.12.8 Rendimiento

**Situación actual:** el proyecto se encuentra en una etapa inicial y las consultas están orientadas principalmente a las operaciones CRUD.

**Mejora propuesta:** implementar paginación y optimizar las consultas cuando aumente la cantidad de productos y usuarios.

**Prioridad:** Media.

### 2.12.9 Documentación

**Situación actual:** la API cuenta con documentación mediante Swagger y el proyecto posee documentación técnica.

**Mejora propuesta:** mantener actualizada la documentación cada vez que se agreguen o modifiquen funcionalidades.

**Prioridad:** Media.

### 2.12.10 Despliegue

**Situación actual:** el proyecto se encuentra orientado al desarrollo y pruebas en entorno local.

**Mejora propuesta:** preparar posteriormente un entorno de despliegue para permitir el acceso al sistema fuera del entorno local.

**Prioridad:** Baja.

### 2.12.11 Plan general de mejora

Las mejoras se priorizarán de acuerdo con su impacto sobre el funcionamiento y seguridad de la plataforma:

1. Implementar autenticación.
2. Implementar JWT.
3. Implementar roles y permisos.
4. Fortalecer las pruebas.
5. Implementar búsqueda y filtros.
6. Implementar mensajería.
7. Implementar calificaciones.
8. Mejorar el manejo de imágenes.
9. Optimizar consultas y rendimiento.
10. Preparar el despliegue del sistema.

De esta manera, el proyecto puede evolucionar progresivamente desde el estado actual del backend hacia una solución más completa, segura, mantenible y preparada para futuras funcionalidades.

