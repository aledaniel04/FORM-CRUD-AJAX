# Formulario CRUD 

Este proyecto es una aplicación CRUD completa desarrollada con HTML, CSS, PHP, MySQL y JavaScript (usando AJAX) que permite realizar operaciones de creación, lectura, actualización y eliminación de datos en una base de datos MySQL.

La interfaz del formulario fue diseñada con HTML y CSS, proporcionando una estructura visual clara y amigable para el usuario. A continuación, se integró JavaScript, específicamente con AJAX, para implementar las funciones de CRUD de manera dinámica, permitiendo la manipulación de los datos sin necesidad de recargar la página, lo cual mejora la experiencia del usuario al hacer que las acciones sean más rápidas y fluidas.

En el backend, PHP maneja la lógica de conexión y comunicación con la base de datos MySQL. A través de este, los datos ingresados en el formulario son enviados, almacenados, consultados, actualizados o eliminados en la base de datos, garantizando así la persistencia y gestión efectiva de la información.

## Requisitos

1- Debes instalar un servidor local como XAMPP, WAMP o MAMP (para Mac) para ejecutar PHP y MySQL en tu máquina.

2- Asegúrate de que el servidor de MySQL esté activo en XAMPP u otro servidor local.

3- PHP debe estar instalado y habilitado en el servidor local, si estás usando XAMPP, PHP ya estará incluido.

4- Cualquier navegador web moderno (Chrome, Firefox, Edge) para acceder a la interfaz del proyecto.

5- Se recomienda utilizar un editor de texto como Visual Studio Code, Sublime Text o PHPStorm por si quieres personalizar el codigo.

## Uso

1- Clona el repositorio en la carpeta htdocs de XAMPP (o en la carpeta equivalente si usas otro servidor local).

2- Abre el archivo de configuraciones (enviar_datos.php) y actualiza las credenciales de la base de datos, incluyendo el nombre de la base de datos, el usuario y la contraseña.

3- Ingresa a MySQL desde el panel de control de XAMPP y crea la base de datos con el mismo nombre que especificaste en el archivo de configuraciones.


## Estructura del Proyecto

- `buscar.php`: Filtra los registros por nombre o apellido y muestra los resultados correspondientes.
- `conexion.php`: Contiene la configuración de conexión a la base de datos. Este archivo se incluye en otros archivos para evitar la repetición del código de conexión.
- `editar_datos.php`: Administra la funcionalidad de edición, permitiendo actualizar los datos en la base de datos.
- `eliminar_dato.php`: Permite eliminar registros específicos de la base de datos utilizando el ID del registro, eliminando toda la fila correspondiente.
- `enviar_datos.php`: Envía los datos ingresados por el usuario en el formulario a la base de datos para su almacenamiento.
- `index.html`: Contiene la estructura de la página principal y es accesible desde cualquier navegador web.
- `main.js`: Contiene toda la lógica del CRUD, implementada con AJAX para permitir la realización de todas las operaciones sin recargar la página.
- `mostrar_datos.php`: Muestra en tiempo real los datos almacenados en la base de datos, reflejando los cambios inmediatamente.
- `style.css`: Define todos los estilos necesarios para el diseño visual de la aplicación.

## Capturas

| ![image](https://github.com/user-attachments/assets/22e2fbee-6124-49fa-a961-46d0cdd39441) (Mostrar) |  ![image](https://github.com/user-attachments/assets/c7080044-da61-4a83-a556-0f18271b82b1) (Busqueda) |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/c5b46916-530d-42dd-9dec-22640b2c0592) (Agregar) | ![image](https://github.com/user-attachments/assets/e1f3c184-89a9-44de-ad66-5b96999c2b17) (Editar)
 ![image](https://github.com/user-attachments/assets/85f5510b-aa5d-44c4-ae0c-03bcb8b9e4a0) (Eliminar)



## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![PHP](https://img.shields.io/badge/PHP-blue?style=for-the-badge&logo=php&logoColor=white)

![MySQL](https://img.shields.io/badge/MySQL-%234479A1?style=for-the-badge&logo=mysql&logoColor=white)
