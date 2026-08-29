 # CAPÍTULO 1. RESUMEN EJECUTIVO

## 1.1 Nombre del Proyecto

**REVENFY**

Revenfy es una plataforma digital orientada a facilitar la compra y venta de productos de segunda mano entre aprendices e instructores del Centro de Gestión de Mercados, Logística y Tecnologías de la Información (CGMLTI) del SENA.

---

## 1.2 Contexto

Revenfy surge en el Centro de Gestión de Mercados, Logística y Tecnologías de la Información (CGMLTI) del SENA en Bogotá, como una propuesta para facilitar y organizar la compra y venta de productos de segunda mano entre aprendices e instructores.

Dentro de la comunidad educativa pueden existir productos como libros, herramientas, uniformes y otros artículos que pueden ser reutilizados o comercializados por otros integrantes de la institución. Sin embargo, este tipo de actividades puede realizarse actualmente mediante canales informales, como grupos de chat, mensajes personales u otros medios de comunicación, lo que dificulta mantener organizada la información de los productos disponibles.

El sistema está dirigido principalmente a aprendices e instructores que deseen publicar productos para la venta o consultar artículos de segunda mano disponibles. También contempla la participación de usuarios encargados de la administración de la plataforma.

La necesidad identificada consiste en contar con un espacio digital centralizado que permita organizar la información de los productos, facilitar su consulta y apoyar el proceso de compra y venta dentro de la comunidad del CGMLTI.

De esta manera, Revenfy busca aprovechar las tecnologías de desarrollo de software para ofrecer una alternativa organizada frente a los medios informales utilizados para publicar y consultar productos de segunda mano.

---

## 1.3 Problema

En el CGMLTI del SENA algunos aprendices e instructores pueden contar con productos de segunda mano que desean vender o adquirir. Estos productos pueden corresponder a libros, herramientas, uniformes u otros artículos que todavía pueden ser utilizados por otras personas de la comunidad educativa.

Actualmente, la publicación y consulta de este tipo de productos puede realizarse mediante grupos de chat, mensajes personales u otros canales informales. Debido a que estos medios no están diseñados específicamente para gestionar un proceso de compra y venta, la información puede encontrarse dispersa y las publicaciones pueden perderse entre otros mensajes.

Esta situación dificulta que los usuarios encuentren fácilmente productos específicos, conozcan las opciones disponibles y mantengan organizada la información relacionada con los artículos que se ofrecen. También puede generar dificultades para identificar de manera clara la información de los productos y establecer una comunicación organizada entre las personas interesadas.

Los principales afectados son los aprendices e instructores que desean vender o comprar productos de segunda mano dentro de la comunidad del CGMLTI. Para los vendedores, la utilización de canales informales puede limitar la visibilidad de sus publicaciones; mientras que para los compradores puede resultar difícil localizar productos específicos entre una gran cantidad de mensajes.

Además, los canales informales utilizados actualmente no cuentan con funcionalidades propias de una plataforma especializada, como la organización de un catálogo de productos, clasificación de artículos, gestión estructurada de publicaciones y centralización de la información.

Por esta razón, se identifica la necesidad de desarrollar una plataforma digital que permita centralizar y organizar la publicación y consulta de productos de segunda mano, facilitando el proceso de compra y venta entre los integrantes de la comunidad del CGMLTI.

---

## 1.4 Objetivo General

Desarrollar una plataforma digital (Revenfy) que permita a los aprendices e instructores del CGMLTI comprar y vender productos de segunda mano de forma organizada y segura, generando confianza entre las partes, reduciendo el riesgo de fraudes, facilitando la búsqueda de productos y aumentando la visibilidad de las publicaciones, en sustitución de los canales informales actualmente utilizados.

---

## 1.5 Objetivos Específicos

1. Diseñar un módulo de publicación de productos que permita a los aprendices e instructores registrar artículos de segunda mano con información como descripción, imágenes y precio.

2. Implementar un sistema de verificación de usuarios mediante el correo institucional del SENA, con el propósito de controlar el acceso de aprendices e instructores a la plataforma.

3. Desarrollar un buscador con filtros por categoría, precio y estado del producto que facilite a los usuarios la localización de artículos específicos.

4. Crear un sistema de mensajería interna que permita la comunicación entre compradores y vendedores dentro de la plataforma, evitando depender de canales externos para establecer contacto.

5. Establecer un mecanismo de calificación o reputación entre usuarios que permita fortalecer la confianza en las operaciones de compra y venta realizadas mediante la plataforma.

---

## 1.6 Solución Propuesta

Revenfy propone el desarrollo de una plataforma digital para centralizar y organizar la compra y venta de productos de segunda mano entre aprendices e instructores del CGMLTI. La solución busca proporcionar un espacio específico para la publicación, consulta y gestión de los productos, evitando que la información dependa únicamente de canales informales de comunicación.

La plataforma contempla diferentes componentes para administrar la información necesaria para el funcionamiento del sistema. Entre ellos se encuentran la gestión de usuarios, productos, categorías, pedidos y roles.

### Gestión de usuarios

El sistema contempla la administración de la información de los usuarios que participan en la plataforma. Los usuarios pueden registrar información necesaria para su identificación y participación dentro del sistema.

### Gestión de productos

La plataforma permite gestionar productos de segunda mano mediante información como título, descripción, categoría, precio, imagen, estado del producto y usuario relacionado con la publicación.

Esta funcionalidad permite centralizar la información de los artículos disponibles y facilitar su consulta.

### Gestión de categorías

Las categorías permiten organizar los productos de acuerdo con diferentes tipos o clasificaciones. Esto facilita la organización de la información y permite relacionar los productos con una categoría determinada.

### Gestión de pedidos

El sistema contempla la gestión de pedidos mediante la relación entre los usuarios y los productos disponibles, permitiendo estructurar la información correspondiente a las solicitudes de compra.

### Gestión de roles

La solución contempla diferentes roles dentro de la plataforma, entre ellos comprador, vendedor y administrador, con el propósito de establecer las responsabilidades que corresponden a cada tipo de usuario.

### Tecnologías utilizadas

Para el desarrollo del backend de Revenfy se utiliza **Python** junto con el framework **FastAPI**, utilizado para la construcción de la API REST.

Para la definición y validación de los datos se utilizan **SQLModel** y **Pydantic**, mientras que **PostgreSQL** es utilizado como sistema gestor de base de datos.

El proyecto utiliza **Git y GitHub** para el control de versiones y el almacenamiento del código fuente. Además, FastAPI permite utilizar **Swagger UI** para documentar y probar los endpoints de la API.

### Beneficios esperados

La implementación de Revenfy busca centralizar la información de los productos de segunda mano, facilitar su consulta, mejorar la organización de las publicaciones y proporcionar un espacio específico para apoyar el proceso de compra y venta dentro de la comunidad del CGMLTI.

---

## 1.7 Alcance

El alcance de Revenfy se divide entre las funcionalidades que se encuentran desarrolladas actualmente y aquellas que hacen parte de la proyección del sistema.

### 1.7.1 Funcionalidades implementadas

De acuerdo con el estado actual del desarrollo, Revenfy cuenta con funcionalidades orientadas principalmente a la gestión de pedidos.

Las funcionalidades desarrolladas comprenden:

1. Identificar al comprador.
   
- Saber qué usuario está realizando el pedido.

2. Seleccionar el producto
   
- El producto debe existir.
Debe estar disponible.

3. Indicar la cantidad

- Registrar cuántas unidades quiere comprar.

4. Crear el pedido

- Generar el pedido asociado al comprador.

5. Crear el detalle del pedido

- Relacionar:

pedido_id
producto_id
cantidad

6. Calcular el total

- Tomar el precio del producto y multiplicarlo por la cantidad.

- Si el pedido tiene varios productos, sumar sus valores.

7. Actualizar el estado del producto

- Por ejemplo, si se compra la única unidad disponible, el producto puede pasar de Disponible → Vendido.

8. Guardar toda la información en PostgreSQL

- Pedido.
  
- Detalles del pedido.
  
- Productos relacionados.
  
- Usuario comprador.

# Flujo de MVP

COMPRADOR
   ↓
Selecciona producto
   ↓
Indica cantidad
   ↓
CREA PEDIDO
   ↓
Se crea DETALLE DEL PEDIDO
   ↓
Se calcula TOTAL
   ↓
Se actualiza estado del producto
   ↓
PEDIDO GUARDADO

---
### 1.7.2 Funcionalidades futuras

Como parte de la evolución del proyecto se contempla la implementación o fortalecimiento de las siguientes funcionalidades:

1. Implementar autenticación de usuarios mediante mecanismos de seguridad como JWT.

2. Implementar el control de permisos de acuerdo con los diferentes roles del sistema.

3. Implementar completamente la verificación de usuarios mediante correo institucional del SENA.

4. Implementar un buscador con filtros por categoría, precio y estado del producto.

5. Implementar el sistema de mensajería interna entre compradores y vendedores.

6. Implementar el sistema de calificación o reputación de usuarios.

7. Implementar notificaciones relacionadas con las actividades de la plataforma.

8. Implementar estadísticas y un panel administrativo para facilitar el seguimiento de la información del sistema.

9. Mejorar las funcionalidades relacionadas con el manejo y almacenamiento de imágenes de los productos.

10. Incorporar mejoras relacionadas con rendimiento, validaciones, pruebas automatizadas y seguridad.

11. Preparar la plataforma para una posible ampliación a otras sedes del SENA.

El alcance podrá ampliarse progresivamente de acuerdo con las necesidades identificadas durante el desarrollo y con las prioridades establecidas para las siguientes etapas del proyecto.
