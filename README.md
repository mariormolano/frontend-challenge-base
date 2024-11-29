## Prueba Técnica "Quickbet".

### Parte Frontend

### Tecnologóas:
- Para realizar esta prueba se empleó el frameword basado en la libreria de React [Next.js](https://nextjs.org/) 
- Para controlar los estados decidí usar [ExomeJS](https://exome.js.org/) por su ligereza, flexibilidad, fácil integracón y OOP
- Para los estilos fuí por CSS Modules y [Material UI](https://mui.com/material-ui/getting-started/)
- En la parte de Autenticación decidí usar un Middware de [Supabase](https://supabase.com/) que usa [Supabase-JS](https://github.com/supabase/supabase-js) para la integración.
 
### Patrones y Arquitectura
- En la Auntenticación se una un patron [singleton](https://refactoring.guru/es/design-patterns/singleton)
- La Arquitectura se esta usando una variante de Screaming Architecture, pensando en la escalabilidad
- Ademas del uso de estados basado en clases para darle a la lógica principios SOLID
 
### Instrucciones
- Clone el reposito de Github:
```console
$ git clone git@github.com:mariormolano/frontend-challenge-base.git
```
- Ingrese a la carpeta 
```console
$ cd frontend-challenge-base
```
- Ingrese a la rama develop
```console
$ git checkout develop
```
- Instale las dependencias
```console
$ npm i
```
- Cree o edita las variables de entorno en el archivo **.env**, use el archivo **.env.template** para guiarse
- Por ultimo inicie con el comando
```console
$ npm run dev
```
