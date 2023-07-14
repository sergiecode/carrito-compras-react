Link al curso de React: [REACT DESDE CERO por Sergie Code](https://youtu.be/ladwC6Lrs-M)

# Tutorial para hacer carrito de compras en React

Este tutorial te guiará paso a paso para crear un carrito de compras en React utilizando las siguientes tecnologías y estructuras:

-   Proyecto creado con Vite
-   Archivo principal: `CarritoApp.jsx`
-   2 páginas: `CarritoPage.jsx` y `ComprasPage.jsx`
-   2 contextos y proveedores: `ProductContext.jsx` y `CarritoContext.jsx`
-   2 componentes especializados: `Card.jsx` y `NavBar.jsx`

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina. Puedes verificar esto ejecutando el siguiente comando en tu terminal:

```
    node --version
```

Si Node.js no está instalado, puedes descargarlo e instalarlo desde el [sitio oficial de Node.js](https://nodejs.org/).

## Paso 1: Configuración del proyecto

1.  Crea una nueva carpeta para tu proyecto y ábrela en tu editor de código preferido.
    
2.  Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para crear un nuevo proyecto de React con Vite:
    
```
    npx create-vite@latest carrito-de-compras-react
```

3.  Selecciona la opción "react-ts" cuando se te solicite elegir una plantilla. Esto creará una estructura de proyecto preconfigurada con React y TypeScript.
    
4.  Una vez que se complete la creación del proyecto, accede a la carpeta utilizando el siguiente comando:
    
```
    cd carrito-de-compras-react
```

5.  Ahora instala las dependencias del proyecto ejecutando el siguiente comando:

```
    npm install
```

## Paso 2: Creación de los componentes principales

En este paso, crearemos los componentes principales de nuestro carrito de compras.

1.  Crea un nuevo archivo llamado `CarritoApp.jsx` en la carpeta `src`. Este archivo será el punto de entrada de nuestra aplicación y contendrá el enrutamiento entre las páginas.
    
2.  Dentro de `CarritoApp.jsx`, importa React y las dependencias necesarias:
    
```
    import React from 'react';
    import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
    import CarritoPage from './CarritoPage';
    import ComprasPage from './ComprasPage';
```

3.  Crea el componente `CarritoApp` y define las rutas para las páginas `CarritoPage` y `ComprasPage`:

```
    function CarritoApp() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={CarritoPage} />
            <Route path="/compras" component={ComprasPage} />
          </Switch>
        </Router>
      );
    }
    
    export default CarritoApp;
```

4.  Crea dos archivos nuevos llamados `CarritoPage.jsx` y `ComprasPage.jsx` en la carpeta `src`. Estos archivos representarán las páginas principales de nuestro carrito de compras.

## Paso 3: Configuración de los contextos y proveedores

En este paso, configuraremos los contextos y proveedores para gestionar el estado de nuestros productos y del carrito de compras.

1.  Crea un nuevo archivo llamado `ProductContext.jsx` en la carpeta `src`. Este archivo contendrá el contexto y el proveedor para los productos.
    
2.  Dentro de `ProductContext.jsx`, importa React y crea el contexto `ProductContext`:
    
```
    import React, { createContext, useState } from 'react';
    
    const ProductContext = createContext();
    
    export default ProductContext;
```

3.  Crea el componente `ProductProvider` que servirá como proveedor para los productos:

```
    export function ProductProvider({ children }) {
      const [products, setProducts] = useState([]);
    
      // Lógica para obtener y actualizar los productos
    
      return (
        <ProductContext.Provider value={{ products, setProducts }}>
          {children}
        </ProductContext.Provider>
      );
    }
```

4.  Crea un nuevo archivo llamado `CarritoContext.jsx` en la carpeta `src`. Este archivo contendrá el contexto y el proveedor para el carrito de compras.
    
5.  Dentro de `CarritoContext.jsx`, importa React y crea el contexto `CarritoContext`:
    
```
    import React, { createContext, useState } from 'react';
    
    const CarritoContext = createContext();
    
    export default CarritoContext;
```

6.  Crea el componente `CarritoProvider` que servirá como proveedor para el carrito de compras:

```
    export function CarritoProvider({ children }) {
      const [carrito, setCarrito] = useState([]);
    
      // Lógica para agregar, eliminar y actualizar el carrito de compras
    
      return (
        <CarritoContext.Provider value={{ carrito, setCarrito }}>
          {children}
        </CarritoContext.Provider>
      );
    }
```

## Paso 4: Creación de componentes especializados

En este paso, crearemos los componentes especializados `Card` y `NavBar` para mostrar los productos y la navegación del carrito de compras.

1.  Crea un nuevo archivo llamado `Card.jsx` en la carpeta `src/components`. Este archivo contendrá el componente `Card` que mostrará un producto.
    
2.  Dentro de `Card.jsx`, importa React y las dependencias necesarias:
    
```
    import React from 'react';
    
    function Card() {
      // Lógica para mostrar el producto
    
      return (
        <div>
          {/* Contenido de la tarjeta del producto */}
        </div>
      );
    }
    
    export default Card;
```

3.  Crea un nuevo archivo llamado `NavBar.jsx` en la carpeta `src/components`. Este archivo contendrá el componente `NavBar` que mostrará la barra de navegación del carrito de compras.
    
4.  Dentro de `NavBar.jsx`, importa React y las dependencias necesarias:
    
```
    import React from 'react';
    
    function NavBar() {
      // Lógica para mostrar la barra de navegación
    
      return (
        <nav>
          {/* Contenido de la barra de navegación */}
        </nav>
      );
    }
    
    export default NavBar;
```

¡Felicidades! Has completado la configuración inicial y la creación de los componentes principales para tu carrito de compras en React. En los siguientes pasos, puedes continuar implementando la lógica y el estilo de tu aplicación según tus necesidades.

Recuerda que este tutorial es solo una guía básica y puedes personalizar y mejorar tu carrito de compras agregando funcionalidades adicionales y estilos avanzados.
