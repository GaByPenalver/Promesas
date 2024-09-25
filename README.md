Este proyecto consiste en desarrollar un programa en JavaScript que se ejecuta en la consola del navegador web para mostrar los primeros 20 títulos de álbumes obtenidos desde una URL en la nube. El programa también incluye un mensaje que se muestra en la consola después de un retraso de tres segundos, indicando que la información fue enviada.

*Procedimiento General
Función Asíncrona: Se crea una función asíncrona que contiene la URL de la API en una variable.

*Conexión a la URL:
Utilizando el bloque try/catch, el programa se conecta a la URL mediante el método fetch, utilizando await para manejar la promesa y obtener los datos de manera directa.

*Mostrar Títulos:
Se emplea el método forEach para iterar sobre el arreglo de álbumes y se muestran solamente los primeros 20 títulos, de acuerdo a los identificadores (id) proporcionados por la URL.

*Promesa de Mensaje:
Se define otra función que retorna una promesa que se resuelve después de tres segundos, retornando el mensaje "Información Enviada".
Esta promesa es recibida por la función asíncrona, la cual utiliza await para mostrar el mensaje en la consola.   Para mejor visualización ingresa al siguiente link: https://gabypenalver.github.io/Promesas/
