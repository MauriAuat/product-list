# Web de Lista de Productos!

**Deploy**: puedes visitar la pagina en funcionamiento desde el siguiente link:

[https://product-list-mauri.vercel.app/](https://product-list-mauri.vercel.app/)


# Posible error
Si al clonar el repositorio, aparece el siguiente error:
**Wordspace extension with invalid name (defaultProject) found**
Para corregirlo se debe remover la line **"defaultProject: product-list"** del archivo angular.json

# Ng Build

El ng build fallaba por una linea del archivo .browserlistrc ( la linea **last  2  Safari  major  versions**)
