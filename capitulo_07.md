# CAPÍTULO 7. CONTROL DE VERSIONES CON GIT Y GITHUB

El control de versiones es una parte importante del desarrollo de Revenfy, ya que permite administrar los cambios realizados en el proyecto y facilita el trabajo colaborativo entre los integrantes del equipo.

Para el desarrollo del proyecto se utilizaron **Git** y **GitHub**, permitiendo mantener un historial de los cambios, trabajar mediante diferentes ramas y organizar la integración del código desarrollado por los integrantes del equipo.

El uso de estas herramientas permite reducir el riesgo de pérdida de información y facilita la recuperación de versiones anteriores del proyecto cuando es necesario.

---

# 7.1 Repositorio

El proyecto Revenfy cuenta con un repositorio remoto en GitHub donde se almacena el código fuente y los archivos relacionados con el desarrollo del proyecto.

El repositorio utilizado para el proyecto es:

**PROYECTO_REVENFY**

Repositorio:

[Repositorio oficial de Revenfy en GitHub](https://github.com/jhonalexbeltran2008/PROYECTO_REVENFY.git?utm_source=chatgpt.com)

El repositorio funciona como espacio central para almacenar y compartir los avances realizados por los integrantes del equipo.

El repositorio permite:

* Almacenar el código fuente.
* Registrar los cambios realizados.
* Compartir el proyecto entre los integrantes.
* Trabajar mediante diferentes ramas.
* Consultar el historial de modificaciones.
* Integrar los cambios realizados por diferentes integrantes.

**Evidencia:**

[INSERTAR CAPTURA DEL REPOSITORIO DE GITHUB]

La captura debe permitir identificar el nombre del repositorio, los archivos del proyecto y la información general disponible en GitHub.

---

# 7.2 Organización del Repositorio

El repositorio contiene los archivos correspondientes al desarrollo de Revenfy.

Dentro del proyecto se encuentran componentes relacionados con el frontend, backend, documentación y demás elementos utilizados durante el desarrollo.

La organización del repositorio permite que los integrantes puedan acceder a una versión común del proyecto y trabajar sobre diferentes funcionalidades sin modificar directamente la rama principal.

La estructura del proyecto también se encuentra organizada por responsabilidades, especialmente en el backend, donde se separan modelos, esquemas, servicios, enrutadores y archivos de configuración.

Esta organización facilita posteriormente la integración de los cambios mediante Git.

---

# 7.3 Documentación del Proyecto

Dentro del desarrollo también se creó documentación relacionada con Revenfy.

Entre los documentos utilizados se encuentra la documentación general del proyecto, que contiene información necesaria para comprender su propósito y funcionamiento.

Uno de los elementos documentados corresponde a:

**Docs Revenfy con información correspondiente**

Esta documentación permite contextualizar el proyecto y comprender las características que se desean implementar.

También contiene información relacionada con:

* Contextualización del proyecto.
* Requisitos funcionales.
* Requisitos no funcionales.
* Glosario.
* Recomendaciones o aspectos de mejora.

La documentación de requisitos permite establecer qué debe hacer el sistema y cuáles son las condiciones que debe cumplir.

Los requisitos funcionales permiten definir las funcionalidades del sistema, mientras que los requisitos no funcionales establecen características relacionadas con la forma en que debe comportarse el software.

**Evidencia:**

[INSERTAR CAPTURA DEL DOCUMENTO O ARCHIVO DE DOCUMENTACIÓN EN EL REPOSITORIO]

---

# 7.4 Commits

Los commits permiten registrar de manera individual los cambios realizados en el proyecto.

Cada commit representa un punto en el historial del desarrollo y permite identificar qué modificaciones fueron realizadas en un determinado momento.

El historial de commits facilita:

* Identificar cambios realizados.
* Conocer cuándo se realizó una modificación.
* Consultar el historial del proyecto.
* Recuperar versiones anteriores.
* Identificar el trabajo realizado por los integrantes.
* Facilitar el seguimiento del desarrollo.

**Evidencia:**

[INSERTAR CAPTURA DEL HISTORIAL DE COMMITS EN GITHUB]

La captura debe mostrar los commits reales realizados en el repositorio.

---

# 7.5 Commits Importantes

Dentro del historial del proyecto se deben identificar los commits que representen cambios importantes en el desarrollo.

Algunos tipos de cambios que pueden documentarse son:

### Creación del repositorio

Este commit representa el inicio del repositorio del proyecto y establece la base para comenzar a administrar el código mediante Git.

**Descripción:**

Se creó la estructura inicial del repositorio de Revenfy para comenzar a almacenar y controlar las diferentes versiones del proyecto.

---

### Documentación de Revenfy

Este cambio corresponde a la incorporación de la documentación relacionada con el proyecto.

La documentación permite comprender el contexto, los requisitos y las características principales de Revenfy.

**Descripción:**

Se agregó la documentación necesaria para contextualizar el proyecto y establecer los requisitos funcionales y no funcionales.

---

### Desarrollo del Backend

Los commits relacionados con el backend corresponden a los cambios realizados en la API y sus componentes.

Entre estos cambios se encuentran elementos como:

* Modelos.
* Esquemas.
* Servicios.
* Enrutadores.
* Conexión con PostgreSQL.
* Endpoints.
* Operaciones CRUD.

**Descripción:**

Se incorporaron las funcionalidades correspondientes al backend de Revenfy utilizando FastAPI, SQLModel y PostgreSQL.

---

### Desarrollo del Frontend

Los commits relacionados con el frontend contienen los cambios realizados en la interfaz y en la integración con el backend.

**Descripción:**

Se incorporaron componentes de la interfaz de usuario y elementos necesarios para la interacción con las funcionalidades del proyecto.

---

### Integración de funcionalidades

Los commits de integración corresponden a cambios realizados para unir las funcionalidades desarrolladas por los diferentes integrantes.

**Descripción:**

Se integraron los cambios desarrollados en las diferentes ramas para mantener una versión conjunta del proyecto.

> **Nota:** Las descripciones anteriores explican el tipo de cambio. En el documento final se deben relacionar con los **nombres reales de los commits que aparecen en GitHub**, sin inventar nombres, fechas o autores.

---

# 7.6 Ramas Utilizadas

Para organizar el desarrollo colaborativo se utilizaron diferentes ramas de Git.

Las ramas documentadas actualmente en el proyecto son:

* `main`
* `develop`
* `feature/backend`
* `feature/frontend`

La rama `main` corresponde a la rama principal del proyecto y actualmente aparece marcada como la rama activa en el documento.

**Evidencia:**

[INSERTAR CAPTURA DE LAS RAMAS DEL REPOSITORIO EN GITHUB]

La captura debe mostrar las ramas existentes en el repositorio.

---

# 7.7 Rama Main

La rama `main` contiene la versión estable y funcional del proyecto Revenfy.

Su propósito es mantener una versión del proyecto que pueda considerarse estable después de que las funcionalidades hayan sido desarrolladas y probadas.

La rama `main` no debe utilizarse como espacio principal para desarrollar directamente nuevas funcionalidades.

Según la política definida para Revenfy:

* Contiene código estable y funcional.
* Se actualiza mediante fusiones desde `develop`.
* Las funcionalidades deben ser probadas antes de llegar a esta rama.

Esta organización permite evitar que cambios que todavía se encuentran en desarrollo afecten directamente la versión estable del proyecto.

---

# 7.8 Rama Develop

La rama `develop` funciona como rama de integración del proyecto.

En ella se combinan los cambios realizados por las diferentes áreas de desarrollo antes de incorporarlos a `main`.

Su función principal es servir como punto de encuentro entre el desarrollo del backend y el frontend.

Sus principales características son:

* Recibe cambios provenientes de las ramas de funcionalidades.
* Permite integrar backend y frontend.
* Sirve para verificar el funcionamiento conjunto.
* Prepara las funcionalidades antes de incorporarlas a `main`.

La política definida para el proyecto establece que `develop` funciona como rama de integración antes de pasar los cambios a la rama estable.

---

# 7.9 Rama Feature/Backend

La rama:

```text
feature/backend
```

se utiliza para desarrollar las funcionalidades correspondientes al backend de Revenfy.

En esta rama se trabajan componentes como:

* Conexión con la base de datos.
* Modelos.
* Esquemas.
* Servicios.
* Enrutadores.
* Endpoints.
* Operaciones CRUD.

Una vez que una funcionalidad del backend se encuentra terminada y probada, los cambios pueden integrarse con `develop`.

La política establecida para el proyecto indica que esta rama contiene el desarrollo de la lógica del servidor y posteriormente se fusiona con `develop`.

**Evidencia:**

[INSERTAR CAPTURA DE LA RAMA `feature/backend`]

---

# 7.10 Rama Feature/Frontend

La rama:

```text
feature/frontend
```

se utiliza para desarrollar las funcionalidades relacionadas con la interfaz de usuario y su integración con el backend.

En esta rama se pueden trabajar elementos como:

* Interfaz gráfica.
* Componentes visuales.
* Navegación.
* Formularios.
* Integración con la API.
* Funcionalidades del frontend.

Cuando una funcionalidad del frontend se encuentra terminada y probada, sus cambios se integran con `develop`.

La política del proyecto establece que esta rama contiene el desarrollo de la interfaz y su integración con el backend.

**Evidencia:**

[INSERTAR CAPTURA DE LA RAMA `feature/frontend`]

---

# 7.11 Política de Ramas

Para organizar el desarrollo colaborativo de Revenfy se estableció una estrategia basada en **Git Flow**.

El objetivo de esta estrategia es separar el código estable del código que se encuentra en desarrollo.

La organización definida es:

```text
main
  ↑
develop
  ↑
feature/backend
feature/frontend
```

Cada rama tiene una responsabilidad específica dentro del proceso de desarrollo.

---

# 7.12 Flujo de Trabajo

El flujo de trabajo establecido para Revenfy se desarrolla de la siguiente manera:

### Paso 1. Desarrollo de la funcionalidad

Cada integrante trabaja en la rama correspondiente a la funcionalidad que está desarrollando.

Por ejemplo:

```text
feature/backend
```

para funcionalidades del backend, o:

```text
feature/frontend
```

para funcionalidades del frontend.

---

### Paso 2. Finalización de la funcionalidad

Cuando la funcionalidad se encuentra terminada, se realizan las pruebas correspondientes para comprobar su funcionamiento.

---

### Paso 3. Integración con Develop

Después de comprobar que la funcionalidad funciona correctamente, los cambios se integran mediante una fusión hacia:

```text
develop
```

Esta rama permite combinar los diferentes componentes desarrollados por el equipo.

---

### Paso 4. Pruebas de integración

En `develop` se comprueba que las funcionalidades desarrolladas por las diferentes áreas puedan funcionar conjuntamente.

---

### Paso 5. Integración con Main

Cuando `develop` contiene un conjunto de funcionalidades estables y probadas, los cambios se fusionan con:

```text
main
```

De esta manera, `main` representa una versión estable del proyecto.

Este flujo corresponde a la política de ramas definida actualmente para Revenfy.

---

# 7.13 Representación del Flujo de Trabajo

El proceso de trabajo puede representarse de la siguiente manera:

```text
                 ┌───────────────────┐
                 │       MAIN        │
                 │ Versión estable   │
                 └─────────▲─────────┘
                           │
                         MERGE
                           │
                 ┌─────────┴─────────┐
                 │      DEVELOP      │
                 │    Integración    │
                 └───────▲───▲───────┘
                         │   │
                       MERGE MERGE
                         │   │
             ┌───────────┘   └───────────┐
             │                           │
   ┌─────────┴─────────┐       ┌─────────┴─────────┐
   │ FEATURE/BACKEND    │       │ FEATURE/FRONTEND  │
   │ Desarrollo backend │       │ Desarrollo frontend│
   └────────────────────┘       └────────────────────┘
```

Este flujo permite separar las funcionalidades en desarrollo de la versión estable del proyecto.

---

# 7.14 Trabajo Colaborativo mediante Git y GitHub

El uso de Git y GitHub permite que los integrantes del equipo puedan trabajar sobre diferentes partes del proyecto sin necesidad de modificar directamente la versión estable.

La división mediante ramas permite distribuir el trabajo de acuerdo con las áreas de desarrollo.

Por ejemplo:

* El desarrollo del backend se realiza en `feature/backend`.
* El desarrollo del frontend se realiza en `feature/frontend`.
* La integración de los cambios se realiza en `develop`.
* La versión estable se mantiene en `main`.

Esto permite organizar mejor el trabajo y facilita la integración de los avances realizados por cada integrante.

Además, el historial de commits permite conocer las modificaciones realizadas durante el desarrollo.

---

# 7.15 Importancia del Control de Versiones

El control de versiones aporta diferentes beneficios al proyecto Revenfy.

Entre ellos se encuentran:

* Mantener un historial de cambios.
* Evitar la pérdida de versiones anteriores.
* Facilitar el trabajo colaborativo.
* Separar funcionalidades mediante ramas.
* Permitir la integración controlada de cambios.
* Identificar modificaciones realizadas.
* Mantener una versión estable del proyecto.
* Facilitar la recuperación de versiones anteriores.
* Organizar el desarrollo del backend y frontend.

GitHub también permite disponer de una copia remota del repositorio, facilitando el acceso al proyecto por parte de los integrantes del equipo.

---

# 7.16 Evidencias del Capítulo

Para demostrar el uso de Git y GitHub se deben incluir las siguientes evidencias:

### Evidencia 1. Repositorio

[INSERTAR CAPTURA DEL REPOSITORIO `PROYECTO_REVENFY`]

Debe mostrar:

* Nombre del repositorio.
* Archivos del proyecto.
* Rama principal.
* Información general del repositorio.

---

### Evidencia 2. Historial de commits

[INSERTAR CAPTURA DEL HISTORIAL DE COMMITS]

Debe permitir identificar los cambios realizados durante el desarrollo.

---

### Evidencia 3. Ramas

[INSERTAR CAPTURA DE LAS RAMAS]

Debe mostrar:

```text
main
develop
feature/backend
feature/frontend
```

---

### Evidencia 4. Commit importante

[INSERTAR CAPTURA DE UNO DE LOS COMMITS IMPORTANTES]

La captura debe permitir identificar el commit y los cambios realizados.

---

### Evidencia 5. Integración de ramas

[INSERTAR CAPTURA DE UN MERGE O DEL HISTORIAL DE RAMAS]

Esta evidencia permite demostrar la integración de los cambios entre las ramas utilizadas.

---

# 7.17 Conclusión del Capítulo

El uso de Git y GitHub permitió organizar el desarrollo colaborativo de Revenfy mediante el control de versiones, el uso de ramas y el registro de los cambios realizados.

La estrategia de ramas definida permite separar el desarrollo del backend y frontend de la versión estable del proyecto. Las ramas `feature/backend` y `feature/frontend` permiten desarrollar funcionalidades específicas, mientras que `develop` funciona como espacio de integración y `main` mantiene la versión estable.

El historial de commits permite realizar seguimiento de los cambios y conocer la evolución del proyecto.

De esta manera, el control de versiones contribuye a mantener una estructura de trabajo más organizada y facilita la colaboración entre los integrantes del equipo.

