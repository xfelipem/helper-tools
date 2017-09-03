# helper-tools
Helper fuctions for agnostic development.

##Introducción
Helper Tools es un conjunto de métodos que evitan codigo boilerplate.

##Instalación

Se puede instalar mediante npm install 'helper-tools' o yarn add 'helper-tools'. También se puede incluir el archivo ./index.js en el explorador:

```html
<script src="/path/to/helper-tools/index.js"></script>
```

##Cómo utilizarlo
La práctica recomendada es incluir por método a utilizar, por más que se proveen objetos. Para esto deben utilizar ES6 e importar las funciones desde los archivos en "helper-tools/src/{modulo}".

Si utilizan la librería incluyéndola en un tag script van a tener disponible un objeto singleton 'helperTools'.

Si utilizan ES6 pueden incluir por módulo:

```javascript
 'import modulo from helper-tools/src/{modulo}';
 ```

O por metodo:

```javascript
 'import { metodoIncreible, superMetodo } from helper-tools/src/{modulo}';
```
Esta última es la forma recomendada para mejor performance.
