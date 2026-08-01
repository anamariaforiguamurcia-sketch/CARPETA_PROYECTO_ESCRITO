# CAPÍTULO 9. RECOMENDACIONES

Las siguientes recomendaciones se plantean como posibles mejoras para futuras etapas de desarrollo de Revenfy. Estas propuestas tienen en cuenta el estado actual del proyecto, el tiempo de formación del equipo y las funcionalidades que todavía pueden ser ampliadas.

Revenfy está siendo desarrollado por tres aprendices del programa Tecnólogo en Análisis y Desarrollo de Software del SENA, con aproximadamente siete meses de formación. Por esta razón, las recomendaciones se plantean como mejoras progresivas y no como características que necesariamente deban implementarse de manera inmediata.

---

## 9.1 Implementar autenticación

Se recomienda implementar un sistema de autenticación para controlar el acceso de los usuarios a la aplicación.

Actualmente, una siguiente etapa del proyecto podría incluir:

* Inicio de sesión.
* Validación de credenciales.
* Protección de endpoints.
* Manejo de sesiones o tokens.

Una vez implementada esta funcionalidad, se podría utilizar JWT como mecanismo para manejar los tokens de autenticación.

Esta mejora permitiría aumentar la seguridad de la aplicación y evitar que las operaciones que requieren identificación puedan ser utilizadas sin una validación previa.

---

## 9.2 Implementar control de roles y permisos

Se recomienda fortalecer el manejo de los roles definidos en el proyecto mediante permisos específicos.

Revenfy contempla diferentes tipos de usuario, por lo que sería conveniente establecer qué acciones puede realizar cada uno.

Por ejemplo:

* El comprador podría consultar productos y realizar pedidos.
* El vendedor podría publicar y administrar sus productos.
* El administrador podría realizar funciones administrativas.

Los permisos deben definirse de acuerdo con las funcionalidades que realmente se implementen en el sistema.

Esta mejora debería realizarse después de establecer correctamente el sistema de autenticación.

---

## 9.3 Mejorar el manejo de imágenes

Se recomienda mejorar el manejo de las imágenes utilizadas en los productos.

En una siguiente etapa se podría evaluar el uso de un servicio externo de almacenamiento de imágenes, dependiendo de las necesidades reales del proyecto.

Antes de implementar esta mejora sería necesario definir:

* Cantidad aproximada de imágenes.
* Tamaño permitido.
* Formatos aceptados.
* Forma de almacenamiento.
* Necesidad real de utilizar un servicio externo.

No se considera necesario definir actualmente una solución de almacenamiento a gran escala, debido a que todavía no se ha determinado el volumen que tendrá la aplicación.

---

## 9.4 Implementar búsqueda y filtros

Se recomienda incorporar funcionalidades de búsqueda y filtrado para facilitar la consulta de productos.

Los filtros podrían incluir inicialmente:

* Nombre del producto.
* Categoría.
* Precio.
* Estado del producto.

Esta funcionalidad permitiría que los usuarios encuentren productos de manera más sencilla cuando aumente la cantidad de publicaciones.

La implementación puede realizarse inicialmente utilizando las funcionalidades disponibles en el backend y posteriormente mejorarse de acuerdo con las necesidades que se identifiquen durante las pruebas.

---

## 9.5 Implementar paginación

Se recomienda implementar paginación cuando la cantidad de productos registrados haga necesario dividir los resultados.

Actualmente no se puede establecer una cantidad específica de registros a partir de la cual deba utilizarse, debido a que el equipo todavía no ha definido el número esperado de usuarios ni el volumen de productos que tendrá la aplicación.

Por esta razón, primero se debería observar el comportamiento de la aplicación y posteriormente determinar si la paginación es necesaria.

Su implementación permitiría consultar los productos por grupos en lugar de cargar todos los registros al mismo tiempo.

---

## 9.6 Fortalecer las validaciones

Se recomienda continuar fortaleciendo las validaciones de los datos recibidos por el sistema.

Algunas validaciones que pueden revisarse son:

* Campos obligatorios.
* Formato del correo electrónico.
* Valores permitidos.
* Precios mayores o iguales a cero.
* Existencia de los registros relacionados.
* Longitud de los campos.

Estas validaciones ayudarían a evitar que se almacene información incorrecta o incompleta.

La implementación debe realizarse de acuerdo con las reglas reales definidas para cada entidad del sistema.

---

## 9.7 Implementar un registro de auditoría

Como mejora futura, se podría implementar un registro de las acciones importantes realizadas dentro del sistema.

Este registro podría incluir información como:

* Usuario que realizó la acción.
* Acción realizada.
* Fecha de la acción.
* Registro afectado.

Por ejemplo, podría registrarse cuándo un usuario crea, modifica o elimina un producto.

Sin embargo, esta funcionalidad no representa una prioridad inmediata para la etapa actual del proyecto. Primero se deben completar y probar las funcionalidades principales.

---

## 9.8 Implementar pruebas automatizadas

Se recomienda continuar el proceso de pruebas mediante la incorporación progresiva de pruebas automatizadas.

Inicialmente se podrían implementar:

### Pruebas unitarias

Permitirían comprobar funciones específicas de los servicios y componentes desarrollados.

### Pruebas de integración

Permitirían verificar la comunicación entre diferentes componentes del sistema, por ejemplo:

```text
Endpoint
   ↓
Servicio
   ↓
Base de datos
```

La automatización permitiría repetir las pruebas después de realizar cambios en el código y ayudaría a detectar errores de manera más rápida.

Esta recomendación puede implementarse progresivamente a medida que el equipo avance en el desarrollo.

---

## 9.9 Realizar el despliegue en la nube

Como mejora futura, se recomienda realizar el despliegue de Revenfy en un servicio en la nube cuando el proyecto se encuentre en una etapa más avanzada.

Actualmente, el equipo está conformado por tres aprendices del programa Tecnólogo en Análisis y Desarrollo de Software del SENA y el proyecto se encuentra principalmente en etapa de desarrollo y aprendizaje.

Además, todavía no se ha determinado con precisión cuántos usuarios podrían utilizar la aplicación de manera simultánea. Por esta razón, no sería adecuado establecer actualmente unos requerimientos de infraestructura basados en una cantidad de usuarios que todavía no ha sido calculada.

Antes de realizar un despliegue definitivo se recomienda:

* Finalizar las funcionalidades principales.
* Completar la integración entre frontend y backend.
* Realizar las pruebas correspondientes.
* Observar el comportamiento de la aplicación.
* Realizar pruebas con diferentes cantidades de usuarios cuando sea necesario.
* Estimar posteriormente la cantidad de usuarios que podría manejar el sistema.
* Seleccionar el servicio de alojamiento de acuerdo con las necesidades identificadas.

El despliegue en la nube se considera una mejora futura y no una necesidad inmediata del proyecto.

---

## 9.10 Continuar con el desarrollo del frontend

Se recomienda continuar con el desarrollo e integración del frontend con la API.

El objetivo es que las funcionalidades desarrolladas en el backend puedan ser utilizadas desde la interfaz de Revenfy.

La integración debería permitir progresivamente realizar acciones como:

* Registrar usuarios.
* Iniciar sesión.
* Consultar productos.
* Publicar productos.
* Actualizar productos.
* Eliminar productos.
* Consultar información de los productos.
* Realizar pedidos.

Las funcionalidades que se integren deberán corresponder a las que se encuentren realmente implementadas en el backend.

---

## 9.11 Prioridad de las recomendaciones

No todas las recomendaciones tienen la misma prioridad. Para el estado actual del proyecto, se propone el siguiente orden:

| Prioridad | Recomendación                     | Motivo                                                              |
| --------- | --------------------------------- | ------------------------------------------------------------------- |
| Alta      | Continuar desarrollo del frontend | Permitir utilizar las funcionalidades del backend desde la interfaz |
| Alta      | Autenticación                     | Controlar el acceso de los usuarios                                 |
| Alta      | Roles y permisos                  | Definir las acciones permitidas según el tipo de usuario            |
| Alta      | Fortalecer validaciones           | Mejorar la calidad de los datos                                     |
| Media     | Pruebas automatizadas             | Facilitar la comprobación de funcionalidades                        |
| Media     | Búsqueda y filtros                | Facilitar la consulta de productos                                  |
| Media     | Paginación                        | Mejorar la consulta cuando aumente la cantidad de información       |
| Media     | Manejo de imágenes                | Mejorar el almacenamiento cuando sea necesario                      |
| Baja      | Auditoría                         | Registrar acciones importantes                                      |
| Futura    | Despliegue en la nube             | Llevar la aplicación a un entorno accesible desde Internet          |

Esta prioridad puede modificarse posteriormente de acuerdo con las necesidades que se identifiquen durante el desarrollo.

---

## 9.12 Aspectos que deben evaluarse antes de escalar el proyecto

Antes de considerar que Revenfy está preparado para una cantidad determinada de usuarios, se recomienda realizar una evaluación del comportamiento de la aplicación.

El equipo debería identificar progresivamente:

* Cantidad aproximada de usuarios esperados.
* Cantidad de usuarios que podrían conectarse simultáneamente.
* Cantidad aproximada de productos.
* Cantidad de consultas realizadas.
* Capacidad de la base de datos.
* Tiempo de respuesta de los endpoints.
* Recursos necesarios para ejecutar la aplicación.

Actualmente estos valores no se encuentran completamente definidos, por lo que no se debe afirmar que el sistema está preparado para una cantidad específica de usuarios.

Esta información podrá determinarse con mayor precisión cuando el proyecto tenga un mayor nivel de desarrollo y se realicen las pruebas correspondientes.

---

## 9.13 Conclusión del Capítulo

Las recomendaciones propuestas representan posibles mejoras para continuar desarrollando Revenfy.

Para la etapa actual, se considera más importante finalizar las funcionalidades principales, fortalecer las validaciones, integrar correctamente el frontend con el backend y continuar realizando pruebas.

Posteriormente, se pueden incorporar funcionalidades como autenticación, control de roles, búsqueda, filtros, paginación y pruebas automatizadas.

El despliegue en la nube y la definición de los recursos necesarios deben realizarse después de conocer mejor el comportamiento esperado de la aplicación y la cantidad aproximada de usuarios que podría utilizarla.

De esta manera, las futuras mejoras pueden realizarse de forma progresiva y de acuerdo con las necesidades reales del proyecto, sin establecer requerimientos que actualmente el equipo todavía no ha podido determinar.

