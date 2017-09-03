# helper-tools
Helper fuctions for frontend development.

## Introducción
Helper Tools es un conjunto de métodos que evitan codigo boilerplate.

## Instalación

Se puede instalar mediante npm install 'helper-tools' o yarn add 'helper-tools'. También se puede incluir el archivo ./index.js en el explorador:

```html
<script src="/path/to/helper-tools/index.js"></script>
```

## Cómo utilizarlo
La práctica recomendada es incluir por método a utilizar, por más que se proveen objetos contenedores tanto para la librería como para cada módulo. Para esto deben utilizar ES6 e importar las funciones desde los archivos en "helper-tools/src/{modulo}".

Si utilizan la librería incluyéndola en un tag script van a tener disponible un objeto singleton 'helperTools'.

Si utilizan ES6 pueden incluir por módulo:

```javascript
 import modulo from 'helper-tools/src/{modulo}';
```
 
Ejemplo:
```javascript
 import validation from 'helper-tools/src/validaton';
 
 const email = 'juan.perez@gmail.com';
 
 console.log(validation.isEmailValid(email)); //true
```

O por metodo:

```javascript
 import { metodoIncreible, superMetodo } from 'helper-tools/src/{modulo}';
```

Ejemplo:
```javascript
 import { forEach } from 'helper-tools/src/object';
 import { addClass } from 'helper-tools/src/dom';
 
 const domElements = document.getElementsByClassName('item');
 
 forEach(domElements, (domEl) => {
    addClass(domEl, 'border green');
 });
 
 ```
Esta última es la forma recomendada para mejor performance.

## Módulos
### Form
`form.js` contiene metodos para facilitar el manejo de objetos.
#### validateField
Valida un elemento del dom segn su valor y su data-validate.
### areFormFieldsValid
Valida un array de elementos del dom con validateField.

### Method
`method.js` contiene metodos para facilitar el manejo de funciones.
#### bindThisToMethods
Recibe un array de funciones y les agrega como referencia interna (this) el objeto dado.
#### executeIf
Si se cumple la condicin dada ejecuta la función pasada.
#### executeIfElse
Si se cumple la condicin dada ejecuta la función pasada sino ejecuta la segunda función dada.

### Object
`object.js` contiene metodos para facilitar el manejo de objetos.
#### forEach
Recorre un objeto o array y ejecuta una función para cada elemento.

### Validation
`validation.js` contiene metodos para validar datos.
#### isEmailValid
Valida un string con el formato `string@string.string`
#### isPasswordValid
Valida un password
TODO: Agregar largo y caracteres requeridos.
#### areStringsEqualAndNonEmpty
Valida si dos strings son iguales y no están vacíos.
#### testRegex
Prueba si un string es valido segun un regex dado.
#### isNotEmpty
Valida si la variable está definida y si no es un string vacío.
#### isPhoneNumberValid
Valida si es un teléfono valido:
TODO: Agregar distintos tipos de formato.
