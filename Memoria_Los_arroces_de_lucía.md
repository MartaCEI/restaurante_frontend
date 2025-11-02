# Información técnica sobre el proyecto 

## URLs GitHub: 
- https://github.com/MartaCEI/ca-marmota-front 
- https://github.com/MartaCEI/ca-marmota-back 

## URLs Vercel: 
- https://restaurante-frontend-five.vercel.app
- https://restaurante-backend-pink.vercel.app

## Lenguajes de programación: 
- HTML 
- CSS 
- JavaScript 

## Metodologías utilizadas: 
- SUITCSS 
## Bases de datos: 
- NoSQL 
- MongoDB 

## Entorno de desarrollo: 
- VisualStudio 
Libreria: 
- React 
Compilador: 
- Vite 
Framework: 
- Express 

## Variables de entorno (frontend):
// Accede a la carpeta pública donde se sirven los archivos estáticos del backend
VITE_STATIC_URL = "https://restaurante-backend-pink.vercel.app"
// URL del backend para las peticiones API
VITE_BACKEND_URL = "https://restaurante-backend-pink.vercel.app/api/v1"
// Accede a la carpeta pública donde se sirven los archivos estáticos del backend
VITE_FRONTEND_URL="/backend/data/pagesInfo.json"
// Accede a la carpeta pública donde se sirven las imágenes del backend
VITE_FRONTEND_IMG="/backend/images"

## Variables de entorno (backend):
// Puerto y dominio del backend
PORT=3000
DOMAIN="http://localhost"
// Datos de MongoDB
MONGODB_URI="mongodb+srv://guecolmar_db_user:223000@cluster0.a3vlfv4.mongodb.net/db_restaurante?retryWrites=true&w=majority"
// Obtener un JWT Secret. 
JWT_SECRET="32d56ee89122ce30d00f2a79f258dbff"

# Detalles del proyecto 
## Usuarios de la base de datos: 
- email: marta@gmail.com 
- password: 1234 
- email: tomi@gmail.com 
- password: 1234 
## Administrador: 
- email: admin@mail.com 
- password: 1111 
## Colores: 
--text-primary: #000; 
--text-secondary: #ac413c; 
--text-tertiary: #fff; 
--hover-color: #c49a6c;
## Tipografía:
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

## Descripción del proyecto
El proyecto “Los Arroces de Lucía” consiste en el desarrollo de una página web responsive para un restaurante, utilizando el stack MERN junto con Vite como herramienta de construcción y Express para el backend. La aplicación está diseñada para ofrecer una experiencia intuitiva tanto a clientes como a administradores del restaurante.

La web cuenta con las siguientes secciones principales:
- Home: Presenta una visita rápida de la página y del restaurante.
- Menú: Muestra todos los platos organizados por categorías.
- Eventos: Informa sobre los eventos que se celebran en el local.
- Ordenar para llevar: Permite a los clientes seleccionar platos, añadirlos al carrito y realizar pedidos, manteniendo la misma estructura que el menú.

Adicionalmente, la aplicación incluye funcionalidades de usuario:
- Carrito y Takeout: Solo visibles para usuarios autenticados, permiten gestionar pedidos de manera personalizada.
- Panel de administración: Los usuarios con permisos de administrador pueden acceder a tablas que muestran la información de menú, eventos, usuarios y órdenes, permitiendo crear, leer, actualizar y eliminar registros mediante controladores conectados a la base de datos MariaDB.

El proyecto combina la gestión de datos en el backend con una interfaz amigable y responsive en el frontend, asegurando que tanto clientes como administradores puedan interactuar con la plataforma de manera eficiente y segura.

// estoy aqui
# 1ª Fase del Frontend del Proyecto Restaurante
En esta primera fase del Frontend del Proyecto Restaurante, nos centraremos en establecer la estructura básica de la aplicación utilizando Vite con React y React Router Dom. Implementaremos un sistema de rutas para navegar entre diferentes páginas, crearemos componentes esenciales como el Header y Footer, y diseñaremos formularios básicos para el Login y Registro de usuarios, asi como, una ruta privada para el usuario autentificado. Una vez que el Login y Registro estén funcionales, podremos avanzar hacia la integración con el backend y la implementación de tokens JWT para la autenticación segura de usuarios.

## Lista de tareas frontend
Nuestro Front tendrá:
Páginas: Home Pública, TakeOut Privada, menu publica, carrito Privada, Registro Pública, Login Pública, ADMIN Privada para gestionar el menú y compras de los clientes.
Crear carpetas pages, components, hooks, lib, css, lib/routes.

- [x] Crear Front con Vite-React + React-Router-Dom
- [x] Alias @ para Vite `vite.config.js`
- [x] Organizacion de carpetas (pages, components, hooks, lib, css, lib/routes)
- [x] Borro los css ya que vamos a usar uno propio
- [x] Creo mi propio archivo restaurante.css y lo importo en main.js
- [x] <ErrorPage> Crear pagina de error 404.
- [x] Crear Páginas: (Prueba para navegación páginas básicas)
        [x]<Layout>  // Cambiamos App.js por Layout.js
        [x]<Home> (Página de inicio)
        [x]<Menu> (Menú del restaurante)
        [x]<TakeOut> (Ordenar para llevar)
        [x]<Events> (Eventos especiales)
        [x]<Cart> (Tu carrito de compras)
        [x]<Login> (comprobar usuario)
        [x]<Register> (Registro)
        [x]<Admin> (Privada - Gestión del restaurante)
- [x] Crear Layout (Header + Outlet + Footer)
- [x] Configurar Rutas de React-Router-Dom lib/routes/routes.js
- [x] Configurar main.js con React-Router-Dom <RouterProvider router={router} />
- [x] Crear Componentes:
        [x]<Header> (Navegación)
        [x]<Footer> (Información del restaurante)
- [x] Crear CSS del header y footer básico y provisional.
- [x] Formulario de Login.
- [x] Formulario de Registro.
- [x] Creamos un contexto de usuarios utilizando useContext para manejar el estado de autenticación y su hook personalizado `hooks/useUser.js`.
- [x] Creamos las funciones de login, register y logout provisionales y simulamos guardar los datos con localStorage.
- [X] Vinculamos el contexto de usuario con los formularios y el header.
- [X] Proteger ruta privada <PrivateRoute>
- [X] Crear Variables de entorno para VITE
- [x] Crear los fetch para Login y Registro
- [x] Token con JWT y guardarlo en LocalStorage (Explicado en el backend)

## Desarrollo paso a paso
1. Crear Front con Vite-React + React-Router-Dom
```bash	
npm create vite@latest
npm i react-router-dom
```

2. Alias @ para Vite `vite.config.js`
Para usar el @ en la carpeta src siempre (así no tenemos que hacer ../../)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Todas las rutas que comiencen con @ serán redirigidas a /src
    alias: {
      '@': '/src'
    }
  }
})
```

3. Organizacion de carpetas (pages, components, hooks, lib, css, lib/routes)
/node_modules
/public
    / Fotos del front que sin estáticas. 
/src
    /assets
        /images
    /components
        Header.jsx
        Footer.jsx
        PrivateRoute.jsx
    /css
      restaurante.css
    /hooks
        useUser.js
        useMenu.js
    /lib
        /routes
            routes.jsx
        constants.js
    /pages
        Home.jsx (4 bloques: Menu, TakeOut, Reservas, Eventos)
        TakeOut.jsx
        Menu.jsx
        Events.jsx
        IndividualProduct.jsx (detalle producto)
        Reservations.jsx
        Cart.jsx
        Login.jsx
        Register.jsx
        Admin.jsx
    ErrorPage.jsx
    Layout.jsx
    main.jsx
.env
.env.example
.env.production
.gitignore
eslint.config.cjs
index.html
package-lock.json
package.json
README.md
tailwind.config.js
vite.config.js

4. Borrar los css existentes ya que vamos a usar uno propio y creo mi propio archivo restaurante.css y lo importo en main.jsx. Este reset evita problemas de overflow horizontal. Y el borde-boxing para que los paddings y margenes no aumenten el tamaño de los contenedores. Tambien limita las imagenes, tablas y sliders al 100% del contenedor padre. Y sin margenes ni paddings por defecto.
En main.jsx añadir.
`import '@/css/restaurante.css'`
NOTA: Borrar los css de main.jsx y App.jsx
```css
/* ----- Reset global ----- */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body, #root {
    width: 100%;
    min-height: 100%;
    background-color: #e2e2e2;
    overflow-x: hidden;
}

img, video, iframe, table {
    max-width: 100%;
    height: auto;
    display: block;
}

.flex, .grid {
    max-width: 100%;
    overflow-x: hidden;
}

/* Textos largos o palabras sin espacios */
* {
    word-wrap: break-word;
    overflow-wrap: break-word;
    min-width: 0;
}

/* Contenido general dentro de contenedores */
* > * {
    max-width: 100%;
    box-sizing: border-box;
}

/* Slider, tablas o contenido gigante */
.slider, .slider > *, table, table * {
    max-width: 100%;
    overflow-x: auto; /* permite scroll interno solo si es necesario */
}
```

5. Crear pagina errorPage.
```js
import { Link, useRouteError } from 'react-router-dom';
    const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className='section'>
            Ooops! tuvimos un error.
            <p>
                {
                    error?.statusText || error?.message || "Pagina no encontrada"
                }
            </p>
            <Link to="/">Volver la página de inicio</Link>
        </div>
    );
}

export default ErrorPage;
```

6. Crear pages básicas (Home, Menu, Carrito, Login, Register, Admin, ect) para pruebas de navegación.
```js
const Home = () => {
    return (
        <>Soy Home</>
    );
}

export default Home;
```

7. Crear Layout (Header + Outlet + Footer)
Borrar App.jsx y crear Layout.jsx e importar Outlet de react-router-dom.
```js
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Layout() {


  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
```

8. Configurar Rutas de React-Router-Dom lib/routes/routes.jsx
NOTA: La ruta "*" es para capturar todas las rutas que no existen y mostrar la página de error 404 dentro del layout.
```js
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import TakeOut from "@/pages/TakeOut";
import Events from "@/pages/Events";
import Reservations from "@/pages/Reservations";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Cart from "@/pages/Cart";
import Admin from "@/pages/Admin";
import IndividualProduct from "@/pages/IndividualProduct";
import ErrorPage from "@/ErrorPage";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children:[
        {
            index: true,
            element: <Home />
        },
        {
            path: "/menu",
            element: <Menu />
        },
        {
            path: "/takeOut",
            element: <TakeOut />
        },
        {
            path: "/events",
            element: <Events />
        },
        {
            path: "/reservations",
            element: <Reservations />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/resgister",
            element: <Register />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/admin",
            element: <Admin />
        },
        {
            path: "/menu/:id",
            element: <IndividualProduct />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ]
}]);
export default router;
```

9. Configurar main.jsx con React-Router-Dom <RouterProvider router={router} />
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/css/restaurante.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/libs/routes/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

10. Crear Componentes Header y Footer (Básicos). Pero incluyendo Link y NavLink de react-router-dom.
```js
import "@/css/headers.css"
import logo from '@/assets/react.svg'
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-imgdiv">
                    <img src={logo} alt="logo" className="header-img" />
                </div>
                <div className="header-inner">
                    <nav className="nav">
                        <ul className="nav-ul">
                            <li className="nav-li">
                                <NavLink to="/menu">MENU</NavLink>
                            </li>
                            <li className="nav-li">
                                <NavLink to="/reservations">RESERVAS</NavLink>
                            </li>
                            <li className="nav-li">
                                <NavLink to="/events">EVENTOS</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="social">
                        <ul className="social-ul">
                            <li className="social-li">
                                <img src={logo} alt="Facebook" className="social-img" />
                            </li>
                            <li className="social-li">
                                <img src={logo} alt="Tweeter" className="social-img" />
                            </li>
                            <li className="social-li">
                                <img src={logo} alt="Instagram" className="social-img" />
                            </li>
                        </ul>
                        <button className="social-button">TakeOut</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
```
```js
import "@/css/headers.css"
import logo from '@/assets/react.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-right">
                    <p className="footer-title">Visit us:</p>
                    <p className="footer-content">Calle Mi Calle 8</p>
                    <p className="footer-content">El Saler, Valencia 46000</p>
                </div>
                <div className="footer-center">
                    <p className="footer-title">Hours:</p>
                    <p className="footer-content">Lunes Cerrado</p>
                    <p className="footer-content">Martes - Jueves  12:30 - 23:00</p>
                    <p className="footer-content">Vienes - Domingo  12:00 - 1:00</p>
                </div>
                <div className="footer-left">
                    <p className="footer-title">Social:</p>
                    <ul className="footer-ul">
                        <li className="footer-li">
                            <img src={logo} alt="Facebook" className="social-img" />
                        </li>
                        <li className="footer-li">
                            <img src={logo} alt="Facebook" className="social-img" />
                        </li>
                        <li className="footer-li">
                            <img src={logo} alt="Facebook" className="social-img" />
                        </li>
                    </ul>
                </div>
            </div>
            <p>© 2024 Restaurante Full Stack. Todos los derechos reservados.</p>
        </div>
    );
}

export default Footer;
```

11. Formulario de Login.
```js
import { useState } from "react";

const Login = () => {
    const [formData, setFormdata] = useState ({
        username:"",
        password: "",
        // Info que viene del backend
        name:"Marta",
        email: "marta@mail.com",
        image:"https://picsum.photos/200"
    })

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleOnChange = (e) => {
        let {name, value} = e.target;
        setFormdata((prevData) => ({...prevData, [name]:value}));
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleOnChange}
                    className="input"
                    placeholder=" email" 
                    required/>
            </label>
            <label className="label">
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    className="input" 
                    placeholder=" password" 
                    required/>
            </label>
            <button className="button" type="submit">LogIn</button>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </form>
    );
}

export default Login;
```

12. Formulario de Registro.
```js
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [newUser, setNewUser] = useState({
        nombre: "",
        username: "",
        password: "",
        TyC: false
    });

    const [canSubmit, setCanSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setCanSubmit(
            newUser.nombre &&
            newUser.username &&
            newUser.password &&
            newUser.TyC
        );
    }, [newUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newUser);
        setNewUser({ nombre: "", username: "", password: "", TyC: false });
        navigate("/");
    };

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewUser((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={newUser.nombre}
                    onChange={handleOnChange}
                    className="input"
                />
            </label>
            <label className="label">
                Username:
                <input
                    type="text"
                    name="username"
                    value={newUser.username}
                    onChange={handleOnChange}
                    className="input"
                />
            </label>
            <label className="label">
                Password:
                <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleOnChange}
                    className="input"
                />
            </label>
            <label className="label">
                T&C:
                <input
                    type="checkbox"
                    name="TyC"
                    checked={newUser.TyC}
                    onChange={handleOnChange}
                    className="input"
                />
            </label>

            {canSubmit ? (
                <button className="button" type="submit">Registrarse</button>
            ) : (
                <button className="button disabled" disabled>Registrarse</button>
            )}

            <button type="button" className="button">LogIn</button>

            <pre>{JSON.stringify(newUser, null, 2)}</pre>
        </form>
    );
};

export default Register;
``` 

13. Crear contexto de usuario con useContext y hook personalizado `hooks/useUser.js`.
```js
import { useContext, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
```
Añadir UserProvider en main.jsx para envolver toda la app.
```js
import { UserProvider } from "@/hooks/useUser";
--- IGNORE ---

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
```

14. Crear las funciones de login, register y logout provisionales y simulamos guardar los datos con localStorage.
```js
import { useContext, useState, useEffect, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Ver si ya estoy logeado. 
    // Cuando cargo la app pregubto a localStorege si existe user.
    // Si existe lo guardo en setUser. 
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    },[])

    // Funcion register
    const register = (newUser) => {
        console.log("Estoy en register")
        // fetch al backend
        const response = newUser;
        // El backend me devuelve la info menos el password y guardo en localstorage
        // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
        localStorage.setItem("user", JSON.stringify(response))
        setUser(newUser);
    }

     // Funcion login
    const login = (userData) => {
        console.log("Estoy en login")
        // fetch al backend
        const response = userData;
        // El backend me devuelve la info menos el password y guardo en localstorage
        // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
        localStorage.setItem("user", JSON.stringify(response))
        setUser(userData);
    }
    
    // Funcion logout
    const logout = () => {
        console.log("Estoy en logout")
        // borrar localstorage
        localStorage.removeItem("user")
        setUser(null)
    } 

    return (
        <UserContext.Provider value={{  user, 
                                        setUser,
                                        register,
                                        login,
                                        logout
                                    }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
```

15. Proteger ruta privada <PrivateRoute>
Crear el componente PrivateRoute.jsx en components.
```js
import { useUser } from "@/contexts/useUser";
import Register from "@/pages/Register";

export const PrivateRoute = ({ children }) => {
    const { user } = useUser();

    // Si el usuario existe imprime children sino, solo el cartel de la página privada y el componente Register.
    return user ?
        children
        :
        <>
            <p className="text-red-600">No tienes permiso para ver esta página</p>
            <Register />
        </>;
}
```
En routes.jsx importar PrivateRoute y envolver la ruta privada Admin.
```js
import { PrivateRoute } from "@/components/PrivateRoute";

    {
        path: "/admin",
        element: <PrivateRoute><Admin /></PrivateRoute>
    },
```

16. Vincular el contexto de usuario con los formularios y el header.
En Login.jsx importar useUser y usar la función login del contexto.
```js
import { useUser } from "@/contexts/useUser";
--- IGNORE ---
    const { login } = useUser();
--- IGNORE ---
    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    }
--- IGNORE ---
```
En Register.jsx importar useUser y usar la función register del contexto.
```js
import { useUser } from "@/contexts/useUser";
--- IGNORE ---
    const { register } = useUser();
--- IGNORE ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        register(newUser);
        setNewUser({ nombre: "", username: "", password: "", TyC: false });
        navigate("/");
    };
--- IGNORE ---
```
En Header.jsx importar useUser y usar la función logout del contexto.
```js
import { useUser } from "@/contexts/useUser";
--- IGNORE ---
    const { user, logout } = useUser();
--- IGNORE ---
                        {user ? (
                            <>
                                <span>Hola, {user.name}</span>
                                <button onClick={logout} className="social-button">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="social-button">Login</Link>
                        )}
--- IGNORE ---
```

17. Crear Variables de entorno para VITE
Crear un archivo .env, .env.example y .env.production en la raíz del proyecto. Asegurarse que no se suben las variables sensibles a GitHub (.gitignore)
```jsx
VITE_FRONTEND_URL="/backend/data/pagesInfo.json"
VITE_FRONTEND_IMG="/backend/images"
VITE_STATIC_URL = "http://localhost:3000"
VITE_BACKEND_URL = "http://localhost:3000/api/v1"
```

18. Creación de los fetch del frontend para usar el token JWT en zonas privadas.
(Explicado en el backend punto 13 de la 1ª fase del backend)

// estoy aqui

# 1ª Fase del Backend del Proyecto Restaurante
En esta primera fase del backend crearemos la estructura básica del servidor con Express y MongoDB. Implementaremos la funcionalidad de autenticación de usuarios del modelo 'User' utilizando Bcrypt para el hash de contraseñas y JsonWebToken para la generación de tokens JWT. Además, estableceremos rutas protegidas mediante un middleware de autenticación.

## Lista de tareas backend
Nuestro Back tendrá una API Rest con rutas para Auth y Usuarios. También poseerá un middleware para proteger rutas privadas.

- [x] Crear Back con Express y dependencias (cors, nodemon, dotenv, mongoose)
- [x] Instalar dependencias de Auth y upload (bcrypt, jsonwebtoken, multer)
- [x] Cambiar package.json (type module, scripts start y dev)
- [x] Crear la estructura de carpetas (controllers, routes, models, middlewares, .env)
- [x] Crear variables de entorno
- [x] Configurar .gitignore
- [x] Configurar la conexión a MongoDB en data/mongodb.js y su modelo User.
- [x] Archivo de config.js
- [x] Crear el archivo index.js
- [x] Página de inicio del backend
- [x] Crear archivo de rutas index.routes.js (rutas más ordenadas)
- [x] Crear controladores para las rutas (usuarios.controller.js)
- [x] Hash con Bcrypt y JWT con JsonWebToken en el Auth
- [x] Crear middleware auth.js para proteger rutas privadas
- [x] Crear una ruta protegida (/admin)
- [x] Testing con thunderclient
- [x] Update del frontend para usar el token JWT en zonas privadas.
- [x] Upload de Archivos (Multer)

1. Crear Back con Express y dependencias.
```bash
npm init -y
npm i express mongoose dotenv cors
npm i nodemon -D
npm i bcrypt jsonwebtoken multer
```

2. Cambiar el package.json
```json
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
```

3. Crear estructura de carpetas
```
/restaurante_backend
    /public
        /images  // Carpeta para imagenes del backend.
        /uploads // Carpeta temporal de multer.
    /config
        config.js
    /controllers
        userController.js
        (2ª Fase)
    /data
        mockData.js  // Copia archivos de bd.
        mongodb.js
    /routes
        index.routes.js
    /utils
        utils.js
    /middlewares
        auth.js
        /multer.js
    index.js
    .env
    .env.example
    .env.production
    .gitignore
    package.json
    README.md
```

4. Configurar el .env 
En atlas cogemos del driver de mongoose la cadena de conexión y la pegamos en el .env (como está en el .gitignore, no se subirá a github). Ponemos un ejemplo de nuestra varibles de entorno en el archivo .env.example.

```js .env.example
// Puerto y dominio del backend
PORT=3000
DOMAIN="http://localhost"
// Datos de MongoDB
MONGODB_URI="mongodb+srv://USER:PASS@CLUSTER.mongodb.net/DB_NAME/?retryWrites=true&w=majority"
// JWT Secret Key
JWT_SECRET="your_jwt_secret_key"
```

5. Configurar el .gitignore
```js
// local env files y node_modules
node_modules
.env
.env.production
```

6. Configurar el config.js
```js config/config.js
import dotenv from 'dotenv';
dotenv.config();
// Path
import path from 'path';
export const __dirname = path.resolve();
// Puerto y dominio
export const PORT = process.env.PORT || 5000;
export const DOMAIN = process.env.DOMAIN || "http://localhost"
// configuracion de mongoDB
export const mongodbUri = process.env.MONGODB_URI;
// JWT Secret Key
export const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"
```

7. Configurara la BBDD en data/mongodb.js y su modelo User.
NOTA: Al hacer los modelos, mongoose va a generarlos en la BBDD automaticamente. Si yo le pongo User, me la va crear como users (plural y en minusculas) si no existen. 
User -> users
Menu -> menus
```js data/mongodb.js
import mongoose from 'mongoose'
import { mongodbUri } from '../config/config'

// Crear una conexion con un try catch. 
const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri);
        console.log("Conectado a la base de datos de MongoDB");
    } catch (error) {
        console.log("Error conectando a MongoDB", error.message);
        process.exit(1);
    }
}

// Crear nuestro `SQUEMAS` llamado variableSchema = new mongoose.Schema({...})
// Ejemplo de nestedSchema: 
const addressSchema = new mongoose.Schema({
    calle: String,
    numero: String,
    piso: String,
    ciudad: String,
    codigoPostal: String
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // address: addressSchema,
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    deletedAt: {
        type: String,
        default: null
    }
}, 
{
    timestamps: true,   // createdAt, updatedAt
    strict: false,      // Permite guardar campos no definidos en el esquema
    versionKey: false   // Desactiva el campo __v
})

// Exportar el modelo
export const User = mongoose.model('User', userSchema);
export default connectDB;
```

8. Configurar el index.js
```js index.js
import express from 'express'
import cors from 'cors'
import { PORT, DOMAIN } from './config/config.js'
import indexRoutes from './routes/index.routes.js'
import path from 'path'
import { __dirname } from './config/config.js';

// -------------- Servidor express --------------
const app = express();

// -------------- Middlewares --------------
app.use(cors());
// Leer datos json del body
app.use(express.json());
// Leer formularios del body
app.use(express.urlencoded({ extended: true }));
// Leer archivo public
app.use(express.static(path.join(__dirname, "public")));

// -------------- Rutas API --------------
app.use("/api/v1/", indexRoutes);

// -------------- MANEJO DE ERRORES --------------
// Middleware para manejo de errores. Nos va a servir para capturar errores en TODOS los controladores o en otros middlewares. Siempre teniendo en cuenta la estructura de nuestra respuesrta:
const responseAPI = {
    data: null,
    msg:"",
    count: 0,
    status: "ok"
}

// Este middleware va a controlar siempre los errores del controlador o de otros middlewares en el catch(next) de cada controlador.
app.use((err, req, res, next) => {
    console.error(err.stack);
    responseAPI.status = "error";
    // Aqui se recibe un mesaje ya enviado por el controlador, sino, escribira el de por defecto. 
    // Este mensaje llega de los errores forzados de los controladores:
    responseAPI.msg = err.message ?? "Error interno del servidor";
    res.status(500).json(responseAPI);
});

// -------------- RUTA RAIZ --------------
app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");
    const appCorreos = `<h1>Buenvenido a mi API de correos usando MongoDB</h1>
    <a href="http://localhost:3000/api/v1/emails">Correos</a>`;
    res.send(appCorreos);
})

// -------------- INICIAR SERVIDOR --------------
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${DOMAIN}:${PORT}`)
});
```

9. Crear controladores para las rutas (usuarios.controller.js) con Hash con Bcrypt y JWT con JsonWebToken en el Auth para login y register.
```js controllers/user.controller.js
import bcrypt from 'bcrypt'; // Importar bcrypt para hashear contraseñas
import jwt from 'jsonwebtoken'; // Importar jsonwebtoken para crear tokens JWT
import { User } from '../data/mongobd.js' // Importar el modelo User y la conexión
import connectDB from '../data/mongobd.js';
import { JWT_SECRET } from '../config/config.js';  // Importar la variable de entorno JWT_SECRET
// Conectamos la BBDD
connectDB();

const responseAPI = {
    data: null,
    msg: "",
    count: 0,
    status: "ok"
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if(users.length === 0) {
            responseAPI.msg = "No se han encontrado usuarios en la BBDD."
            responseAPI.count = 0;
            responseAPI.status = "error"
            responseAPI.data = null
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Usuarios encontrados correctamente"
        responseAPI.count = users.length;
        responseAPI.data = users;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const userLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Buscar usuario por username
        const user = await User.findOne({ username });
        // Si no existe el user manda error 404.
        if (!user) {
            responseAPI.msg = "Usuario no encontrado.";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }

        // Comparar contraseña en texto plano con el hash almacenado
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // Si las contraseñas no coinciden
        if (!isPasswordValid) {
            responseAPI.msg = "Contraseña incorrecta.";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            return res.status(401).json(responseAPI);
        }
        // Crear JWT token. Justo despues de compara contraseñas y antes de enviar los datos. 
        // Recibe 3 datos: jwt.sign({datosRelevantes}, LaContraseñaJWTdel.env, expiración );
        const token = jwt.sign({username:username}, JWT_SECRET, {expiresIn: "24h"});
        responseAPI.msg = "Login exitoso.";
        responseAPI.count = 1;
        responseAPI.status = "ok"
        responseAPI.data = { _id: user._id,
                            name: user.name,
                            username: user.username,
                            admin: user.isAdmin || false,
                            token};
        res.status(200).json(responseAPI);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const createUser = async (req, res ,next) => {
    try {
        const { name, username, password, street, city, cp } = req.body;
        // Antes de crear el nuevo usuario Hashear con bcrypt
        // HashedPass = await bcrypt.hash("contraseñaParaHashear", rondasAlgoritmoAEjecutar)
        // NUNCA se debe guardar la contraseña del usuario en la base de datos. 
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, 
                                    username, 
                                    password:hashedPassword, 
                                    street, city, cp});
        await newUser.save();
        responseAPI.msg = "Usuario registrado correctamente"
        responseAPI.count = 1;
        responseAPI.data = newUser;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, username, street, city, cp, isAdmin } = req.body;

        // Actualiza todos los campos mandados por el front
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name:name, username:username, street:street, city:city, cp:cp, isAdmin:isAdmin },
            { new: true }
        );

        if (!updatedUser) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.status = "error";
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato actualizado con éxito";
        responseAPI.status = "ok"
        responseAPI.data = updatedUser;
        responseAPI.count = 1;
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// updateUserdeletedAt(id) Este va a ser un soft delete 
export const updateUserdeletedAt = async (req, res, next) => {
    try {
        const { id } = req.params;
        const date = new Date();
        const deletedUser = await User.findByIdAndUpdate(
            id,           // id del correo que queremos update
            { deletedAt: date },    // las variables que queremos cambiar
            { new: true }         // Devuelve el documento modificado
        );
        if (!deletedUser) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            res.status(404).json(responseAPI);
        }
        responseAPI.msg = `Plato con id ${id} soft deleted`;
        responseAPI.count = 1;
        responseAPI.data = deletedUser;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// deleteUserPermanently(id). No se recomendable pero es parte del CRUD. 
// Elimina un documento entero de la BBDD.
export const deleteUserPermanently = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id)
        if (!deletedUser) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.count = 0;
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato eliminado correctamente";
        responseAPI.count = 1;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// getUserById(id) Obtiene el plato que se manda desde el body con el id. 
export const getUserById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user) {
            responseAPI.msg = "Plato no encontrado";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato encontrado con éxito";
        responseAPI.count = 1;
        responseAPI.data = user;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
```

10. Crear middleware auth.js que devuelve true siempre
```js middlewares/auth.js
import { JWT_SECRET } from "../config/config.js";
import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
    // Leer si el usuario mandó la llave en el headers
    const authHeader= req.headers['authorization'];
    // authHeader = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZS..."
    // Si existe, conpruebo el token. 
    // El split coge el string de arriba. Lo convierte en un array por cada separación ' ' 
    // y luego agarra el [1], es decir, el token(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZS...)
    const token = authHeader && authHeader.split(' ')[1];
    // Si el token no existe, no da autorización
    if(!token) return res.sendStatus(401);  //unauthorized

    // Si recibo el token, verifico que está bien con jwt
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)   // Forbidden (no coinciden)
        req.user = user;
        // SI la llave es correcta hacemos un next()
        next();
    })
}
```

11. Configurar las rutas en index.routes.js y crear rutas protegidas
```js routes/index.routes.js
import { Router } from "express";
import {  userLogin, createUser } from '../controllers/user.controller.js'
import { authenticateToken as authMiddleware } from '../middlewares/auth.js'
import { getAllUsers, updateUser, deleteUserPermanently, getUserById } from "../controllers/user.controller.js";

const router = Router();
// Rutas especiales
router.post('/register', createUser);
router.post('/login', userLogin);

// Rutas /admin/users
router.get('/admin/users', authMiddleware, getAllUsers); // getAllUsers()
router.get('/admin/users/:id', authMiddleware, getUserById) // getUserById(id)
router.patch('/admin/users/:id', authMiddleware, updateUser); // updateUser(id)
router.delete('/admin/users/:id', authMiddleware, deleteUserPermanently); // deleteUserPermanently(id)

export default router;
```

12. Comprobar con ThunderClient las rutas protegidas.
- Hacer login y copiar el token JWT que devuelve.
- Hacer una petición GET a /admin sin token. Debería devolver 401 Unauthorized. 
- Hacer click en auth y luego en Bearer y pegar el token copiado.
- Si la llave es incorrecta debería devolver 403 Forbidden.
- Si la llave es correcta debería devolver el mensaje de bienvenida.

13. Update del frontend para usar el token JWT en zonas privadas.
En useUser.jsx, en login y register guardar el token que devuelve el backend.
- En el backend, en los controladores de login y register, modificar la respuesta para que devuelva el token JWT junto con la información del usuario.
- Estructura del backend:
```js
const responseAPI = {
    data: null,
    msg: "",
    count: 0,
    status: "ok"
};
```
- Respuesta de data del backend incluyendo el token:
```js
responseAPI.data = { name: user.name, username: user.username, token};
```
- En el contexto useUser.jsx, en login y register, guardar el token en localStorage.
```js
localStorage.setItem("token", response.data.token);
```
- Funciones login, register y logout actualizadas:
```js
const urlBackend = import.meta.env.VITE_BACKEND_URL;
const urlStatic = import.meta.env.VITE_STATIC_URL;

// Funcion register
const register = async (newUser) => {
        try {
            const res = await fetch(`${urlBackend}/register`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newUser),
            });
            const response = await res.json();

            if (response.status === "error") {
                setError(response.msg);
                setUser(null);
                return;
            }
            // El backend me devuelve la info menos el password y guardo en localstorage
            // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token); // Guardar token JWT
            setError(null);
        } catch (error) {
            setError("Hubo un error en el login");
            setUser(null);
        }
    }

     // Funcion login
    const login = async (userData) => {
        try {
            const res = await fetch(`${urlBackend}/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(userData),
            });
            const response = await res.json();

            if (response.status === "error") {
                setError(response.msg);
                setUser(null);
                return;
            }
            // El backend me devuelve la info menos el password y guardo en localstorage
            // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token); // Guardar token JWT
            setError(null);
        } catch (error) {
            setError("Hubo un error en el login");
            setUser(null);
        }
    };

    // Funcion logout
    const logout = () => {
        console.log("Estoy en logout")
        // borrar localstorage
        localStorage.removeItem("user")
        localStorage.removeItem("token"); // Borrar token JWT
        setUser(null)
    }
```

// estoy aqui
# 2ª Fase del Backend del Proyecto Restaurante
En esta segunda fase del backend implementaremos los modelos restantes Menu, Events y Orders con sus respectivas rutas y controladores. También añadiremos funcionalidades adicionales como la gestión de archivos con Multer y la implementación de rutas protegidas según roles de usuario (admin y cliente).

## Lista de tareas backend
- [x] Crear `modelo Menu` data/mongodb.js
- [x] Crear controlador para Menu.
- [x] Crear rutas y rutas protegidas para Menu en index.routes.js
- [x] Crear `modelo Events` data/mongodb.js
- [x] Crear controlador para los eventos.
- [x] Crear rutas y rutas protegidas para Eventos en index.routes.js
- [x] Crear `modelo Orders` data/mongodb.js
- [x] Crear controlador para los pedidos.
- [x] Crear rutas y rutas protegidas para Orders en index.routes.js

1. Crear modelo Menu data/mongodb.js
El modelo Menu tendrá los campos: type (tapas, platos principales, postres...), name (nombre del plato), description (descripción del plato), price (precio del plato), imageUrl (URL de la imagen del plato).
```js data/mongodb.js
// Modelo Menu
const menuSchema = new mongoose.Schema({
    type: { 
        type: String,
        required: true 
    },
    name: { 
        type: String,
        required: true 
    },
    description: { 
        type: String,
        required: true 
    },
    price: { 
        type: Number,
        required: true 
    },
    deletedAt: { 
        type: String,
        default: null  
    }
},
{
    timestamps: true,
    strict: false,
    versionKey: false
});

export const Menu = mongoose.model('Menu', menuSchema);
```

2. Crear controlador para Menu.
```js controllers/menu.controller.js
import { Menu } from "../data/mongobd.js";
import connectDB from "../data/mongobd.js";
// Conexión a la BBDD
connectDB();

const responseAPI = {
    data: null,
    msg: "",
    count: 0,
    status: "ok"
};

// getAllDishes()  Obtiene todos los platos del menuSchema
export const getAllDishes = async (req, res, next) => {
    try {
        const dishes = await Menu.find();
        if (dishes.length === 0) {
            responseAPI.msg = "No se han encontrado platos en el Menú";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Platos del menú recibidos con éxito";
        responseAPI.count = dishes.length;
        responseAPI.data = dishes;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// getDishById(id) Obtiene el plato que se manda desde el body con el id. 
export const getDishById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const dish = await Menu.findById(id);
        if (!dish) {
            responseAPI.msg = "Plato no encontrado";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato encontrado con éxito";
        responseAPI.count = 1;
        responseAPI.data = dish;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// getDishesByType(type) Obtiene todos los platos segun el tipo. 
// Esta funcion es perfecta para filtrar por tipo de plato. 
export const getDishesByType = async (req, res, next) => {
    try {
        const { type } = req.params;
        const dishes = await Menu.find({
            type: { $regex: type, $options: "i" }
        });

        if (dishes.length === 0) {
            responseAPI.msg = `No hay nungun plato de tipo ${type}`;
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato encontrado con éxito";
        responseAPI.count = 1;
        responseAPI.data = dishes;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// createDish(dishData) Crea un nuevo plato. 
export const createDish = async (req, res, next) => {
    try {
        const { type, name, description, price, imageUrl } = req.body;
        const newDish = new Menu({
            type,
            name,
            description,
            price,
            imageUrl
        })
        await newDish.save();
        responseAPI.msg = "Plato creado correctamente";
        responseAPI.count = 1;
        responseAPI.data = newDish;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// updateDish(id) Este va a ser un soft delete 
export const softDeleteDish = async (req, res, next) => {
    try {
        const { id } = req.params;
        const date = new Date();
        const deletedDish = await Menu.findByIdAndUpdate(
            id,           // id del correo que queremos update
            { deletedAt: date },    // las variables que queremos cambiar
            { new: true }         // Devuelve el documento modificado
        );
        if (!deletedDish) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            res.status(404).json(responseAPI);
        }
        responseAPI.msg = `Plato con id ${id} soft deleted`;
        responseAPI.count = 1;
        responseAPI.data = deletedDish;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// updateDish(id) Actualiza un plato del menú.
export const updateDish = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, description, type, imageUrl } = req.body;

        // Actualiza todos los campos mandados por el front
        const updatedDish = await Menu.findByIdAndUpdate(
            id,
            { name:name, price:price, description:description, type:type, imageUrl:imageUrl },
            { new: true }
        );

        if (!updatedDish) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.status = "error";
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato actualizado con éxito";
        responseAPI.status = "ok"
        responseAPI.data = updatedDish;
        responseAPI.count = 1;
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// deleteDish(id). No se recomendable pero es parte del CRUD. 
// Elimina un documento entero de la BBDD.
export const deleteDish = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedDish = await Menu.findByIdAndDelete(id)
        if (!deletedDish) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.count = 0;
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "PLato eliminado correctamente";
        responseAPI.count = 1;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
```

3. Crear rutas para Menu en index.routes.js
```js routes/index.routes.js
import { getAllDishes, createDish, softDeleteDish, updateDish, deleteDish } from "../controllers/menu.controller.js";
import { getDishesByType, getDishById } from "../controllers/menu.controller.js";

// Rutas Menu(dishes)
router.get('/dishes/type/:type', getDishesByType); // getDishesByType(type)
router.get('/dishes/id/:id', getDishById); // getDishById(id)

// Rutas /admin/dishes
router.get('/admin/dishes',authMiddleware, getAllDishes) // getAllDishes()
router.post('/admin/dishes', authMiddleware, createDish) // createDish(dishData)
router.patch('/admin/dishes/:id', authMiddleware, updateDish) // updateDish(id, dishData)
router.delete('/admin/dishes/:id', authMiddleware, deleteDish) // deleteDish(id)
router.get('/admin/dishes/:id', authMiddleware, getDishById); // getDishById(id)
router.patch('/admin/dishes/deletedAt/:id', authMiddleware, softDeleteDish) // softDeleteDish(id)
```

4. Crear modelo Events data/mongodb.js
```js
const eventSchema = new mongoose.Schema({
    title: 
    {
        type: String, 
        required: true 

    },
    description: 
    {
        type: String, 
        required: true 

    },
    date: 
    {
        type: String, 
        required: true 

    },
    time: 
    {
        type: String, 
        required: true 

    },
    deletedAt: {
        type: Date,
        default: null
    },
    image: 
    {
        type: String, 
        required: false,
        default: "imagen.jpg"
    }
}, {
    timestamps: true,
    strict: false,
    versionKey: false
});

export const Event = mongoose.model('Event', eventSchema);
```

5. Controlador para los eventos.
```js controllers/event.controller.js
import { Event } from "../data/mongobd.js";
import connectDB from "../data/mongobd.js";

// Conexión a la BBDD
connectDB();

const responseAPI = {
    data: null,
    msg: "",
    count: 0,
    status: "ok"
};

// getAllEvents()  Obtiene todos los eventos
export const getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        if (events.length === 0) {
            responseAPI.msg = "No se han encontrado eventos";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Eventos obtenidos con éxito";
        responseAPI.count = events.length;
        responseAPI.data = events;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// getEventById(id) Obtiene un evento por su id
export const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);
        if (!event) {
            responseAPI.msg = "Evento no encontrado";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Evento encontrado con éxito";
        responseAPI.count = 1;
        responseAPI.data = event;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// createEvent(eventData) Crea un nuevo evento
export const createEvent = async (req, res, next) => {
    try {
        const { title, description, date, time } = req.body;
        const newEvent = new Event({
            title,
            description,
            date,
            time,
            image: "imagen"
        });
        await newEvent.save();

        responseAPI.msg = "Evento creado correctamente";
        responseAPI.count = 1;
        responseAPI.data = newEvent;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// softDeleteEvent(id) Marca un evento como eliminado (soft delete)
export const softDeleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const date = new Date();
        const deletedEvent = await Event.findByIdAndUpdate(
            id,
            { deletedAt: date },
            { new: true }
        );

        if (!deletedEvent) {
            responseAPI.msg = `Evento con id ${id} no encontrado`;
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }

        responseAPI.msg = `Evento con id ${id} marcado como eliminado`;
        responseAPI.count = 1;
        responseAPI.data = deletedEvent;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// updateEvent(id) Actualiza un evento existente
export const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, date, time, img } = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { title, description, date, time, img },
            { new: true }
        );

        if (!updatedEvent) {
            responseAPI.msg = `Evento con id ${id} no encontrado`;
            responseAPI.status = "error";
            return res.status(404).json(responseAPI);
        }

        responseAPI.msg = "Evento actualizado con éxito";
        responseAPI.status = "ok";
        responseAPI.data = updatedEvent;
        responseAPI.count = 1;
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
```

6. Rutas para Events en index.routes.js
```js routes/index.routes.js
import { getAllEvents, getEventById, createEvent, updateEvent, softDeleteEvent } from "../controllers/events.controller.js"

// Rutas /events
router.get("/events", getAllEvents); // getEvents()

// Rutas /admin/events
router.get("/admin/events", authMiddleware, getAllEvents); // getAllEvents()
router.get("/admin/events/:id", authMiddleware, getEventById); // getEventById(id)
router.post("/admin/events", authMiddleware, createEvent); // createEvent(eventData)
router.patch("/admin/events/:id", authMiddleware, updateEvent); // updateEvent(id, eventData)
router.patch("/admin/events/deletedAt/:id", authMiddleware, softDeleteEvent); // softDeleteEvent(id)

```

7. Crear modelo Orders data/mongodb.js.
El modelo Order tiene los campos: userId (referencia al usuario que hizo el pedido), items (array de objetos con menuId y quantity que hace referencia al menú), totalPrice (precio total del pedido), orderStatus (estado del pedido: pendiente, en preparación, entregado).
```js
// Modelo Pedido
const orderSchema = new mongoose.Schema({
    userId: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    items: [
        {
            menuId: 
            { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Menu', required: true 
            },
            quantity: 
            { 
                type: Number, 
                required: true 
            }
        }
    ],
    totalPrice: 
    {   
        type: Number, 
        required: true 
    },
    orderStatus: 
    {
        type: String, 
        default: 'pending' 
    }
}, {
    timestamps: true,
    strict: false,
    versionKey: false
});

export const Order = mongoose.model('Order', orderSchema);
```

8. Controlador para los pedidos.
```js controllers/order.controller.js
import { Order } from "../data/mongobd.js";
import connectDB from "../data/mongobd.js";

// Conexión a BBDD
connectDB();

const responseAPI = {
    data: null,
    msg: "",
    count: 0,
    status: "ok"
};

export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find()
            .populate("userId", "name username")
            .populate("items.menuId", "name price");

        responseAPI.msg = "Pedidos obtenidos con éxito";
        responseAPI.count = orders.length;
        responseAPI.data = orders;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};


// Obtener todos los pedidos de un usuario
export const getOrdersByUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId }).populate('items.menuId').populate('userId');

        if (orders.length === 0) {
            responseAPI.msg = "No se han encontrado pedidos";
            responseAPI.count = 0;
            responseAPI.status = "error";
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }

        responseAPI.msg = "Pedidos obtenidos con éxito";
        responseAPI.count = orders.length;
        responseAPI.data = orders;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Crear un pedido
export const createOrder = async (req, res, next) => {
    try {
        const { userId, items, totalPrice } = req.body;
        const newOrder = new Order({ userId, items, totalPrice });
        await newOrder.save();

        responseAPI.msg = "Pedido creado correctamente";
        responseAPI.count = 1;
        responseAPI.data = newOrder;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Actualizar un pedido
export const updateOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { items, totalPrice, orderStatus } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { items, totalPrice, orderStatus },
            { new: true }
        );

        if (!updatedOrder) {
            responseAPI.msg = `Pedido con id ${id} no encontrado`;
            responseAPI.status = "error";
            responseAPI.count = 0;
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }

        responseAPI.msg = "Pedido actualizado con éxito";
        responseAPI.status = "ok";
        responseAPI.data = updatedOrder;
        responseAPI.count = 1;
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Soft delete de un pedido
export const deleteOrderPermanently = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id)
        if (!deletedOrder) {
            responseAPI.msg = `Plato con id ${id} no encontrado`;
            responseAPI.count = 0;
            responseAPI.data = null;
            return res.status(404).json(responseAPI);
        }
        responseAPI.msg = "Plato eliminado correctamente";
        responseAPI.count = 1;
        responseAPI.status = "ok"
        res.status(200).json(responseAPI);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
```

9. Rutas para Orders en index.routes.js
```js routes/index.routes.js
// Rutas /events
router.get("/events", getAllEvents); // getEvents()

// Rutas /orders
router.post("/orders", createOrder); // createOrder()
router.get("/orders/all", getAllOrders); // getAllOrders()
router.get("/orders/:id", getOrdersByUser); // getOrdersByUser(id)
router.patch("/orders/:id", authMiddleware, updateOrder); // updateEvent(id, oderData)
router.delete("/orders/:id", authMiddleware, deleteOrderPermanently); // deleteOrderPermanently(id)
```

// estoy aqui
# 2ª Fase del Frontend del Proyecto Restaurante
En esta segunda fase del frontend implementaremos la integración con los nuevos modelos del backend: Menu, Events y Orders. Crearemos hooks personalizados para gestionar el estado y las operaciones relacionadas con estos modelos, y actualizaremos las páginas correspondientes para mostrar los datos al usuario. También implementaremos la funcionalidad del carrito de la compra y la gestión de pedidos con un resumen antes de confirmar.

## Lista de tareas frontend
- [x] Crear hook personalizado `hooks/useMenu.jsx` para enseñar los datos del menú al usuario.
- [x] Abrazar el main.jsx con el MenuProvider para que toda la app tenga acceso al menú.
- [x] Implementacón en la página Menu.jsx junto con los componentes MenuCard.jsx y MenuButtons.jsx.
- [x] Crear hook personalizado `hooks/useEvents.jsx` para enseñar los datos de los eventos al usuario.
- [x] Abrazar el main.jsx con el EventsProvider para que toda la app tenga acceso a los eventos.
- [x] Implementacón en la página Events.jsx junto con el componente EventCard.jsx
- [x] Reutilización del `useMenu` en la página TakeOut.jsx junto con los componentes TakeOutCard.jsx y MenuButtons.jsx.
- [x] Crear el hook personalizado `hooks/useCart.jsx` para gestionar el carrito de la compra.
- [x] Abrazar el main.jsx con el CartProvider para que toda la app tenga acceso al carrito.
- [x] Crear la página Cart.jsx que recibe datos tanto del hook useCart como del useMenu para mostrar los platos añadidos al carrito.
- [x] Implementacion de la pagina summary.jsx para mostrar el resumen del pedido antes de confirmar.

1. Crear hook personalizado `hooks/useMenu.jsx` para gestionar el estado del menú y las operaciones relacionadas.
```js
import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const [filteredDishes, setFilteredDishes] = useState(null);
    const [singleDish, setSingleDish] = useState(null);
    const [error, setError] = useState(null);

    // router.get('/dishes/id/:id', getDishById) // getDishById(id)
    const getSingleDish = async (dishId) => {
        try {
            const res = await fetch(`${urlBackend}/dishes/id/${dishId}`);
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setDishes(null);
                return;
            }
            setSingleDish(response.data);
            setError(null)
            console.log("[getDishById]: Plato encontrado:", response);
        } catch (error) {
            console.log("[getDishById] Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    // router.get('/dishes/type/:type', getDishesByType) // getDishesByType(type);
    const getDishesByType = async (dishType) => {
        try {
            const res = await fetch(`${urlBackend}/dishes/type/${dishType}`);
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg)
                setFilteredDishes(null)
                console.log("[getDishesByType]: Platos encontrados:", response);
            }

            // Filtrar solo los platos activos
            const activeDishes = response.data.filter(dish => !dish.deletedAt);

            setFilteredDishes(activeDishes);
            setError(null);
            console.log("[getDishesByType]: Platos activos encontrados:", activeDishes);
        } catch (error) {
            console.log("[getDishesByType]: Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    return (
        <MenuContext.Provider value={{
            filteredDishes,
            singleDish,
            error,
            getSingleDish,
            getDishesByType
        }}>
            {children}
        </MenuContext.Provider>
    )
};

export const useMenu = () => useContext(MenuContext);
```
2. Abrazar el main.jsx con el MenuProvider para que toda la app tenga acceso
```js
import { MenuProvider } from "@/hooks/useMenu";
--- IGNORE ---
    <UserProvider>
        <MenuProvider>
            <RouterProvider router={router} />
        </MenuProvider>
    </UserProvider>
--- IGNORE ---
```

3. Implementacón en la página Menu.jsx junto con los componentes MenuCard.jsx y MenuButtons.jsx.
```js
import { useState, useEffect } from "react";
import { useMenu } from "@/hooks/useMenu";
import TopPictures from "@/components/TopPictures";
import MenuCard from "@/components/menu/MenuCard";
import MenuButtons from "@/components/menu/MenuButtons";
import { usePageInfo } from "@/hooks/usePageInfo";

const Menu = () => {
    const { filteredDishes, getDishesByType } = useMenu();
    const { pageInfo, fetchPageInfo } = usePageInfo();
    const [selectedType, setSelectedType] = useState("entrantes");
    const [displayDishes, setDisplayDishes] = useState([]);

    useEffect(() => {
        fetchPageInfo("menu");
    }, []);

    // Cargar los platos según el tipo seleccionado
    useEffect(() => {
        if (selectedType) {
            getDishesByType(selectedType);
        }
    }, [selectedType]);

    // Actualizar displayDishes con los platos filtrados
    useEffect(() => {
        setDisplayDishes(filteredDishes || []);
    }, [filteredDishes]);

    return (
        <>
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <MenuButtons setType={setSelectedType} />
            <section className="menu-flex">
                <h2 className="menu-h2">{selectedType}</h2>
                <div className="menu-grid">
                    {displayDishes.map(dish => (
                        <MenuCard key={dish._id} {...dish} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Menu;
```

4. Crear hook personalizado `hooks/useEvents.jsx` para gestionar el estado de los eventos y las operaciones relacionadas.
NOTA: Los eventos tienen un campo deletedAt para hacer soft delete, por lo que en el frontend solo mostraremos los eventos que no tengan ese campo rellenado.
```jsx
import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const [events, setEvents] = useState(null);
    const [error, setError] = useState(null);

    // router.get("/events", getAllEvents) // Obtener todos los eventos
    const getEvents = async () => {
        try {
            const res = await fetch(`${urlBackend}/events`);
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setEvents(null);
                return;
            }
            // Filtrar eventos activos (deletedAt === null)
            const activeEvents = response.data.filter(event => event.deletedAt === null);
            setEvents(activeEvents);
            setError(null);
            console.log("[getEvents]: Eventos encontrados:", activeEvents);
        } catch (error) {
            console.log("[getEvents] Error:", error);
            setError("Hubo un error al obtener los eventos.");
            setEvents(null);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <EventContext.Provider value={{
            events,
            error,
        }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEvents = () => useContext(EventContext);
```

5. Abrazar el main.jsx con el EventsProvider para que toda la app tenga acceso
```js
import { EventProvider } from "@/hooks/useEvents";
--- IGNORE ---
    <UserProvider>
        <EventProvider>
            <RouterProvider router={router} />
        </EventProvider>
    </UserProvider>
--- IGNORE ---
```

6. Implementacón en la página Events.jsx junto con el componente EventCard.jsx
```js
import TopPictures from "@/components/TopPictures";
import EventsCard from "@/components/EventsCard";
import { useEvents } from "@/hooks/useEvents";
import { usePageInfo } from "@/hooks/usePageInfo";
import { useEffect } from "react";


const Events = () => {
    const {events, error} = useEvents();
        const { pageInfo, fetchPageInfo } = usePageInfo();
        useEffect(() => {
            fetchPageInfo("events");
        }, []);
    
    return (
        <>
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <section className="event-flex">
                <div className="event-grid">
                    { events &&
                        events.map((e => 
                            <EventsCard key={e._id} {...e}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Events;
```
```js components/EventsCard.jsx
const EventsCard = ({ title, description, date, time, image }) => {
        const urlStatic = import.meta.env.VITE_STATIC_URL;
    return (
        <article className="events-article">
            <div className="event-container">
                <img className="event-img" src={`${urlStatic}/img/${image}`} alt={title} />
                <div className="event-title">
                    <h2 className="event-h2">{title}</h2>
                    <h3 className="event-date">{date} de {time}</h3>
                </div>
            </div>
            <p className="event-desc">{description}</p>
        </article>
    );
}

export default EventsCard;
```

7. Implementar la funcionalidad en la página TakeOut.jsx junto con los componentes MenuCard.jsx y MenuButtons.jsx. usando el hook useMenu.
NOTA: El componente MenuButtons.jsx ya lo tenemos hecho en el paso 4, así que lo reutilizaremos aquí.
```js
import { useState, useEffect } from "react";
import TopPictures from "@/components/TopPictures";
import MenuButtons from "@/components/menu/MenuButtons";
import TakeOutCard from "@/components/takeout/TakeOutCard";
import { useMenu } from "@/hooks/useMenu";
import { useCarrito } from "@/hooks/useCarrito";
import { usePageInfo } from "@/hooks/usePageInfo";

const TakeOut = ({ userId }) => {
    const { filteredDishes, getDishesByType } = useMenu();
    const [selectedType, setSelectedType] = useState("entrantes");
    const [displayDishes, setDisplayDishes] = useState([]);
    const { items, agregarItem, quitarItem } = useCarrito(userId);
    const { pageInfo, fetchPageInfo } = usePageInfo();

    useEffect(() => {
        fetchPageInfo("takeout");
    }, []);

    // Cargar los platos según el tipo seleccionado
    useEffect(() => {
        if (selectedType) {
            getDishesByType(selectedType);
        }
    }, [selectedType]);

    // Actualizar displayDishes con los platos filtrados
    useEffect(() => {
        setDisplayDishes(filteredDishes || []);
    }, [filteredDishes]);

    return (
        <>
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <MenuButtons setType={setSelectedType} />

            <section className="menu-flex">
                <h2 className="menu-h2">{selectedType}</h2>
                <div className="menu-grid">
                    {displayDishes.map(dish => (
                        <TakeOutCard
                            key={dish._id}
                            item={dish}
                            cantidad={items[dish._id]?.quantity || 0}
                            agregarItem={agregarItem}
                            quitarItem={quitarItem}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default TakeOut;
```
NOTA: El componente TakeOutCard.jsx es similar al MenuCard.jsx pero con botones para agregara al carrito.
```js components/takeout/TakeOutCard.jsx
const TakeOutCard = ({ item, cantidad, agregarItem, quitarItem }) => {
    return (
        <article className="menu-card">
            <div className="card">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-price">${item.price}</p>
            </div>
            <p className="card-desc">{item.description}</p>
            <div className="counter">
                Añadido al carrito: <span>{cantidad}</span>
            </div>
            <div className="cart-buttons">
                <button className="cart-button" onClick={() => agregarItem(item)}>
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
};

export default TakeOutCard;
```

8. Crear el hook personalizado `hooks/useCart.jsx` para gestionar el carrito de la compra.
NOTA: El carrito de la compra se gestiona en el frontend y al hacer checkout se crea un pedido en el backend con los items del carrito. 
Hay que tener en cuenta que el carrito se vacía al hacer checkout correctamente.
```js
import { createContext, useContext, useState } from "react";
import { useUser } from "@/hooks/useUser";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const { user } = useUser(); // Obtengo el usuario logeado
    const [items, setItems] = useState({}); // Estado que almacena los items en el carrito
    const [totalItems, setTotalItems] = useState(0); // Total de items en el carrito
    const [totalPrice, setTotalPrice] = useState(0); // Precio total del carrito
    const [error, setError] = useState(null); // Estado para errores
    const urlBackend = import.meta.env.VITE_BACKEND_URL; // URL del backend desde variables de entorno

    // Función para calcular totales (cantidad total y precio total)
    const calcularTotales = (nuevoItems) => {
        let totalCantidad = 0;
        let totalDinero = 0;

        for (const key in nuevoItems) {
            const item = nuevoItems[key];
            totalCantidad += item.quantity;
            totalDinero += item.item.price * item.quantity;
        }

        setTotalItems(totalCantidad);
        setTotalPrice(totalDinero);
    };

    // Agregar item al carrito
    const agregarItem = (menuItem) => {
        setItems(prev => {
            const currentQuantity = prev[menuItem._id]?.quantity || 0;
            const nuevoItems = {
                ...prev,
                [menuItem._id]: { item: menuItem, quantity: currentQuantity + 1 }
            };
            calcularTotales(nuevoItems);
            return nuevoItems;
        });
    };

    // Quitar item del carrito
    const quitarItem = (menuId) => {
        setItems(prev => {
            const item = prev[menuId];
            if (!item) return prev;

            const nuevaCantidad = item.quantity - 1;
            let nuevoItems;

            if (nuevaCantidad <= 0) {
                const { [menuId]: _, ...rest } = prev;
                nuevoItems = rest;
            } else {
                nuevoItems = { ...prev, [menuId]: { ...item, quantity: nuevaCantidad } };
            }

            calcularTotales(nuevoItems);
            return nuevoItems;
        });
    };

    // Limpiar carrito
    const limpiarCarrito = () => {
        setItems({});
        setTotalItems(0);
        setTotalPrice(0);
    };

    // Crear un array de items a partir del objeto items para enviar al backend
    const carritoArray = Object.values(items).map(({ item, quantity }) => ({
        menuId: item._id,
        quantity,
        item // Mantener referencia al item completo
    }));

    // Checkout: crea un pedido en el backend con los items del carrito
    const checkout = async () => {
        if (!user || !user._id) {
            setError("Usuario no definido");
            return null;
        }

        if (carritoArray.length === 0) {
            setError("El carrito está vacío");
            return null;
        }

        setError(null);
        // Realizar la petición al backend para crear el pedido
        // Usamos fetch para hacer la petición POST
        // Enviamos el carrito y el usuario al backend
        try {
            const res = await fetch(`${urlBackend}/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user._id,
                    items: carritoArray,
                    totalPrice
                })
            });

            const data = await res.json();

            if (data.status === "ok") {
                // Aquí puedes limpiar el carrito tras crear el pedido
                limpiarCarrito();
                return data.data; // Devolver el pedido creado
            } else {
                setError(data.msg || "Error al crear pedido");
                return null;
            }
        } catch (err) {
            setError(err.message);
            return null;
        }
    };

    return (
        <CarritoContext.Provider value={{
            items,
            totalItems,
            totalPrice,
            error,
            agregarItem,
            quitarItem,
            limpiarCarrito,
            checkout
        }}>
            {children}
        </CarritoContext.Provider>
    );
};
export const useCarrito = () => useContext(CarritoContext);
```

9. Abrazar el main.jsx con el CartProvider para que toda la app tenga acceso
Muy importante poner el cartProvider dentro del userProvider para tener acceso al userId.
```js
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { OrdersProvider } from './context/OrdersContext';

const App = () => {
    return (
        <UserProvider>
            <CartProvider>
                    <Main />
            </CartProvider>
        </UserProvider>
    );
};
```

10. Crear la página Cart.jsx que recibe datos tanto del hook useCart como del useMenu para mostrar los platos añadidos al carrito.
```js
import { useNavigate, Link } from "react-router-dom";
import { useCarrito } from "@/hooks/useCarrito";

const Cart = ({ userId }) => {
    const navigate = useNavigate();
    // Obtener datos y funciones del hook useCarrito
    const {
        carritoArray,
        totalItems,
        totalPrice,
        agregarItem,
        quitarItem,
        limpiarCarrito,
        checkout,
        loading,
        error
    } = useCarrito(userId);

    // Función para manejar el checkout y redirigir a la página de resumen. Al apretar al botón "Realizar Pedido" se ejecuta esta función y se guarda el pedido en la BBDD.
    const handleCheckout = async () => {
        const orderCreated = await checkout();
        if (orderCreated) {
            // Redirigir a la página de resumen del pedido y pasamos los datos del pedido creado en un state para poder mostrarlos en la página summary. 
            navigate("/summary", { state: { order: orderCreated } });
        }
    };

    return (
        <section className="cart-flex">
            <h2 className="cart-title">Carrito de Compras</h2>
            {carritoArray.length === 0 ? (
                <p className="cart-empty">El carrito está vacío</p>
            ) : (
                <ul className="cart-ul">
                {/* hacemos un map sobre el carritoArray para mostrar los productos guardados de la pagina takeout.jsx */}
                    {carritoArray.map(producto => (
                        <li key={producto.menuId} className="cart-li">
                            <span className="cart-info">
                                {producto.item?.name} x {producto.quantity} = $
                                {producto.item?.price * producto.quantity || 0}
                            </span>
                            {/* Botones para modificar la cantidad dentro del carrito. Funcionalidad del useCarrito */}
                            <div className="cart-buttons">
                                <button
                                    onClick={() => quitarItem(producto.menuId)}
                                    className="cart-smallButton"
                                >
                                    -
                                </button>
                                <p>{producto.quantity}</p>
                                <button
                                    onClick={() => agregarItem(producto.item)}
                                    className="cart-smallButton"
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                    <li className="cart-summary">
                        <h4>Total Items: {totalItems}</h4>
                    </li>
                    <li className="cart-summary">
                        <h4>Total: ${totalPrice}</h4>
                    </li>
                </ul>
            )
            }
            {/* Mostrar mensaje de error si existe */}
            {error && <p className="cart-error">{error}</p>}
            <div className="cart-buttons">
                <button
                    onClick={handleCheckout}
                    disabled={loading || carritoArray.length === 0}
                    className="cart-button"
                >
                    {loading ? "Procesando..." : "Realizar Pedido"}
                </button>

                {carritoArray.length > 0 && (
                    <button className="cart-button" onClick={limpiarCarrito}>
                        Limpiar Carrito
                    </button>
                )}
            </div>
            <Link to="/takeout" className="cart-a">
                Volver al menú
            </Link>
        </section >
    );
};

export default Cart;
```

11. Implementacion de la pagina summary.jsx para mostrar el resumen del pedido antes de confirmar.
```js
import { useLocation, Link } from "react-router-dom";

const Summary = () => {
    const location = useLocation();
    // useLocation nos permite acceder al state pasado por navigate en la página Cart.jsx
    const { order } = location.state || {}; // obtenemos el pedido pasado por navigate

    if (!order) {
        return (
            <div>
                <h2>No hay pedido para mostrar</h2>
                <Link to="/takeout">Volver al menú</Link>
            </div>
        );
    }

    return (
        <div className="cart-flex">
            <h2 className="cart-title">¡Gracias por tu pedido!</h2>
            <p className="summary-text">Resumen del pedido:</p>
            {/** Sección de resumen del pedido. mapeamos los items del pedido */}
            <ul className="cart-ul">
                {order.items.map((item, index) => (
                    <li key={index} className="summary-item">
                        {item.item.name} x {item.quantity} = ${item.quantity * item.item.price}
                    </li>
                ))}
            </ul>
            <h3>Total: ${order.totalPrice}</h3>
            <Link to="/takeout">
                <button className="cart-a">Volver al menú</button>
            </Link>
        </div>
    );
};

export default Summary;
```

// estoy aqui
# 3ª Fase del Frontend del Proyecto Restaurante-
En esta tercera fase del frontend implementaremos las funcionalidades del administrador para gestionar los usuarios, platos, eventos y pedidos. Crearemos un los hooks personalizados para gestionar las operaciones administrativas y rutas privadas, además de componentes reutilizables para las tablas y formularios de administración. Hay que tener en cuenta que estas páginas y funcionalidades solo estarán accesibles para usuarios con rol de administrador.

- [x] Crear hook personalizado y privado `hooks/useOrders.jsx` para gestionar los pedidos.
- [x] Abrazar el main.jsx con el OrdersProvider para que toda la app tenga acceso a los pedidos.
- [x] Crear hook personalizado `hooks/useAdmin.jsx` para gestionar las operaciones administrativas y rutas privadas.
- [x] Orden final del main.jsx para que los providers funcionen bien.
- [x] Table.jsx componente reutilizable para las tablas de admin.
- [x] Input.jsx componente reutilizable para los formularios de admin.
- [x] Select.jsx componente reutilizable para los formularios de admin.
- [x] Pagina AdminUsers.jsx para gestionar los usuarios (CRUD).
- [x] Componente del modal UserModal para crear/editar usuarios.
- [x] Pagina AdminDishes.jsx para gestionar los platos (CRUD).
- [x] Componente del modal DishModal para crear/editar platos.
- [x] Pagina AdminEvents.jsx para gestionar los eventos (CRUD).
- [x] Componente del modal EventModal para crear/editar eventos.
- [x] Pagina AdminOrders.jsx para gestionar los pedidos (CRUD).
- [x] Componente del modal OrderModal para crear/editar pedidos. (incluye la implementación de subida de imágenes pero está comentada por ahora por que con vercel da problemas).
- [x] BACKEND: Multer para la subida de imágenes en los eventos. Middleware y ruta.

1. Crear hook personalizado y privado `hooks/useOrders.jsx` para gestionar el estado de los pedidos y las operaciones relacionadas.
```js
import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

// El hook recibe el userId para obtener los pedidos de ese usuario
export const OrderProvider = ({ children, userId }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const urlBackend = import.meta.env.VITE_BACKEND_URL;

    // Obtener todos los pedidos (solo para admin)
    const getAllOrders = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${urlBackend}/orders/all`);
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(data.data);
            } else {
                setError(data.msg || "Error cargando pedidos");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Obtener los pedidos de un usuario por su ID
    const getOrderById = async () => {
        if (!userId) return;
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${urlBackend}/orders/${userId}`);
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(data.data);
            } else {
                setOrders([]);
                setError(data.msg || "Error al obtener pedidos");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Crear un nuevo pedido
    const createOrder = async (order) => {
        setError(null);
        try {
            const res = await fetch(`${urlBackend}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            });
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(prev => [...prev, data.data]);
            } else {
                setError(data.msg || "Error al crear pedido");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    // Actualizar el estado de un pedido
    const updateOrderStatus = async (orderId, status) => {
        setError(null);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/orders/${orderId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ orderStatus: status })
            });
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(prev => prev.map(o => o._id === data.data._id ? data.data : o));
            } else {
                setError(data.msg || "Error al actualizar pedido");
            }
            getAllOrders();
        } catch (err) {
            setError(err.message);
        }
    };

    // Eliminar un pedido permanentemente (solo para admin)
    const deleteOrderPermanently = async (orderId) => {
        setError(null);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/orders/${orderId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    }
                });
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(prev => prev.filter(o => o._id !== orderId));
            } else {
                setError(data.msg || "Error al eliminar pedido");
            }
            getAllOrders();
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch orders when userId changes
    useEffect(() => {
        getAllOrders();
    }, []);

    // Fetch orders for the specific user
    useEffect(() => {
        getOrderById();
    }, [userId]);

    return (
        <OrderContext.Provider value={{ orders, loading, error, getOrderById, createOrder, updateOrderStatus, deleteOrderPermanently }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
```

2. Abrazar el main.jsx con el OrdersProvider para que toda la app tenga acceso
```js
import { OrdersProvider } from "@/hooks/useOrders";
--- IGNORE ---
    <UserProvider>
        <OrdersProvider>
            <RouterProvider router={router} />
        </OrdersProvider>
    </UserProvider>
--- IGNORE ---
```


4. Crear hook personalizado `hooks/useAdmin.jsx` para gestionar las operaciones administrativas y rutas privadas.
```js
import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const urlStatic = import.meta.env.VITE_STATIC_URL;
    const [dishes, setDishes] = useState(null);
    const [events, setEvents] = useState(null);
    const [dish, setDish] = useState(null)
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null)

    // ***************  USERS CRUD *******************
    // router.get('/admin/users', authMiddleware, getAllUsers); // getAllUsers()
    const getAllUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/users`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            setUsers(response.data);
            setError(null);
        } catch (error) {
            console.error("[getAllUsers] Error:", error);
            setError("Hubo un error al obtener los usuarios.");
            setUsers([]);
        }
    };

    const getUserById = async (userId) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/users/${userId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            return response.data;
        } catch (error) {
            console.error("[getUserById] Error:", error);
            setError("Hubo un error al obtener el usuario.");
            return null;
        }
    };

    const updateUser = async (id, newData) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/users/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newData),
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            await getAllUsers();
            setError(null);
        } catch (error) {
            console.error("[updateUser] Error:", error);
            setError("Error al actualizar el usuario.");
        }
    };

    const deleteUserPermanently = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            await getAllUsers();
            setError(null);
        } catch (error) {
            console.error("[deleteUserPermanently] Error:", error);
            setError("Error al borrar el usuario.");
        }
    };


    // ***************  Menu CRUD *******************
    // router.get('/admin/dishes',authMiddleware, getAllDishes) // getAllDishes()
    const getAllDishes = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}` // Enviar el token JWT en el header
                }
            });
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setDishes(null);
                return;
            }
            setDishes(response.data);
            setError(null);
            console.log("[getAllDishes] Platos encontrados:", response);
        } catch (error) {
            console.log("[getAllDishes] Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    // useEffect(() => {
    //     getAllDishes();
    //     getAllUsers();
    //     getAllEventsAdmin();
    // }, []);

    // router.post('admin/dishes', authMiddleware, createDish) // createDish(dishData)
    const createDish = async (newDish) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newDish),
            });
            const response = await res.json();

            if (response.status === "error") {
                setError(response.msg);
                setDish(null);
                return;
            };
            // El backend se encarga de guardar el nuevo plato en la BBDD. 
            setDish(response.data);
            setError(null);
            getAllDishes();
        } catch (error) {
            setError("Hubo un error al intentar crear el plato.");
            setDish(null);
        }
    }

    // router.get('/admin/dishes/id/:id', authMiddleware, getDishById); // getDishById(id)
    const getDishById = async (dishId) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes/${dishId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);
            return response.data; // Retorna los datos para el frontend
        } catch (error) {
            console.error("[getDishById] Error:", error);
            setError("Hubo un error al obtener el plato.");
            return null;
        }
    };

    // router.patch('/admin/dishes/deletedAt/:id', authMiddleware, updateDishdeletedAt) // updateDish(id)
    const softDeleteDish = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes/deletedAt/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const response = await res.json();
            if (response.status === "ok") {
                getAllDishes(); // refresca la tabla
            } else {
                console.error(response.msg);
            }
        } catch (error) {
            setError("Error al actualizar el plato");
        }
    }

    // router.patch('/admin/dishes/:id', authMiddleware, updateDish) // updateDish(id, dishData)
    const updateDish = async (id, newData) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newData),
            });

            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                return;
            }
            getAllDishes();
            setError(null);
        } catch (error) {
            setError("Error al actualizar el plato");
        }
    }

    // router.delete('/admin/dishes/:id', authMiddleware, deleteDish) // deleteDish(id)
    const deleteDish = async (id) => {
        try {
            const res = await fetch(`${urlBackend}/admin/dishes/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                return;
            }
            getAllDishes();
            setError(null);
        } catch (error) {
            setError("Error al borrar el plato");
        }
    }

    // ***************  EVENTS CRUD *******************
    const getAllEventsAdmin = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/events`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            setEvents(response.data);
            setError(null);
        } catch (error) {
            console.error("[getAllEventsAdmin] Error:", error);
            setError("Hubo un error al obtener los eventos.");
            setEvents([]);
        }
    };

    const getEventById = async (eventId) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/events/${eventId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            return response.data;
        } catch (error) {
            console.error("[getEventById] Error:", error);
            setError("Hubo un error al obtener el evento.");
            return null;
        }
    };


    const createEvent = async (eventData) => {
    try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${urlBackend}/admin/events`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(eventData),
        });

        const response = await res.json();
        if (response.status === "error") throw new Error(response.msg);

        await getAllEventsAdmin(); // refresca la lista
        setError(null);
    } catch (error) {
        console.error("[createEvent] Error:", error);
        setError("Error al crear el evento.");
    }
};

    const updateEvent = async (id, newData) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/events/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newData),
            });

            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);

            await getAllEventsAdmin(); // refresca la lista de eventos
            setError(null);
        } catch (error) {
            console.error("[updateEvent] Error:", error);
            setError("Error al actualizar el evento.");
        }
    };

    // Soft delete de un evento
    const softDeleteEvent = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/events/deletedAt/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const response = await res.json();
            if (response.status === "ok") {
                getAllEventsAdmin(); 
            } else {
                console.error(response.msg);
            }
        } catch (error) {
            setError("Error al eliminar el evento.");
        }
    };

    return (
        <AdminContext.Provider value={{
            users, dishes, dish, events, error,
            getAllDishes, getAllUsers, getAllEventsAdmin,
            getDishById, updateDish, softDeleteDish, createDish,
            getUserById, updateUser, deleteUserPermanently,
            getEventById, updateEvent, softDeleteEvent, createEvent
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdmin = () => useContext(AdminContext);
```

4. Orden final del main.jsx para que los providers funcionen bien.
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/css/css.css'
import '@/css/newform.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/libs/routes/routes'
import { UserProvider } from '@/hooks/useUser'
import { MenuProvider } from '@/hooks/useMenu'
import { AdminProvider } from '@/hooks/useAdmin'
import { OrderProvider } from '@/hooks/useOrders'
import { CarritoProvider } from '@/hooks/useCarrito'
import { EventProvider } from '@/hooks/useEvents'
import { PageInfoProvider } from '@/hooks/usePageInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AdminProvider>
        <MenuProvider>
          <OrderProvider>
            <CarritoProvider>
              <EventProvider>
                <PageInfoProvider>
                  <RouterProvider router={router} />
                </PageInfoProvider>
              </EventProvider>
            </CarritoProvider>
          </OrderProvider>
        </MenuProvider>
      </AdminProvider>
    </UserProvider>
  </StrictMode>,
)
```

5. Table.jsx componente reutilizable para las tablas de admin.
Se pasan las columnas y los datos como props y las funciones onUpdate y onDelete para manejar las acciones de actualizar y eliminar provenientes del padre. Tambien se maneja el estilo para los elementos soft deleted.
```js
const Table = ({ data, columns, onUpdate, onDelete }) => {
    if (!data || data.length === 0) return <p>No hay información disponible</p>;

    // Separar los datos activos y soft deleted
    const activeItems = data.filter(item => !item.deletedAt);
    const deletedItems = data.filter(item => item.deletedAt);

    // Los une en un solo array con los activos primero
    const sortedData = [...activeItems, ...deletedItems];

    return (
        <table className="table">
            <thead>
                {/** Aquí se añaden las celdas de los encabezados */}
                <tr className="table-tr">
                    {columns.map(col => <th key={col} className="table-th">{col}</th>)}
                    <th className="table-th">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {/** Aquí se mapean los elementos de la tabla */}
                {sortedData.map(item => (
                    <tr
                        key={item._id}
                        className="table-tr"
                        style={{
                            // Estilo para elementos soft deleted
                            color: item.deletedAt ? "gray" : "black",
                            textDecoration: item.deletedAt ? "line-through" : "none",
                        }}
                    >
                    {/** Aquí se añaden las celdas de datos */}
                        {columns.map(col => (
                            <td key={col} className="table-td">{item[col] || ""}</td>
                        ))}
                    {/** Aquí se añade la columna de acciones que pasa las funciones de actualización y eliminación */}
                        <td className="table-td">
                            {!item.deletedAt && (
                                <div className="modal-buttons">
                                    <button className="form-button actualizar" onClick={() => onUpdate(item._id)}>Actualizar</button>
                                    <button className="form-button eliminar" onClick={() => onDelete(item._id)}>Eliminar</button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
```
6. Input.jsx componente reutilizable para los formularios de admin.
Recibe toda la información incluyendo clases CSS como props para poder reutilizarlo en diferentes formularios.
```js
const Input = ({divClassName, labelClassName, spanLabel, label, inputClassName, type, name, value, onChange, placeholder, error, inputError}) =>{
    return (
        <div className={divClassName}>
            <label className={labelClassName}>
                <span className={spanLabel}>{label}</span>
                <input 
                    className={inputClassName}
                    type={type} 
                    name={name}
                    value={value} 
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
            {error && <i className={`${inputError} show`}>{error}</i>}
        </div>
    )
};

export default Input;
```

7. Select.jsx componente reutilizable para los formularios de admin.
Recibe toda la información incluyendo clases CSS como props para poder reutilizarlo en diferentes formularios.
```js
const Select = ({divClassName, selectClassName, labelClassName, spanLabel, name, label, firstOptionLabel, value, onChange, lista=[{value:0, label:"no hay items"}], inputError, error}) => {
    return (
        <div className={divClassName}>
            {label && <label htmlFor={name} className={labelClassName}>
                <span className={spanLabel}>{label}</span></label>}
            <select 
                className={selectClassName}
                name={name} 
                id={name}
                value={value}
                onChange={onChange}
                >
                    <option value="">{firstOptionLabel}</option>
                    {
                        lista.map( ({value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))
                    }
            </select>
            {error && <i className={`${inputError} show`}>{error}</i>}
        </div>
    )
}

export default Select;
```
```js
// modalButtons.jsx para los botones de los modales.
import React from "react";

const ModalButtons = ({ onClose, onSubmit }) => {
    return (
        <div className="modal-buttons">
            <button className="btn-cancel" onClick={onClose}>Cancelar</button>
            <button className="btn-submit" onClick={onSubmit}>Guardar</button>
        </div>
    );
};

export default ModalButtons;
```

8. Pagina AdminUsers.jsx para gestionar los usuarios (CRUD).
```js
import { useEffect, useState } from "react";
import Table from "@/components/Table";
import UserModal from "@/components/modals/UserModal";
import { useAdmin } from "@/hooks/useAdmin";
const AdminUsers = () => {
    const { users, getUserById, updateUser, deleteUserPermanently, getAllUsers } = useAdmin();
    const isAdminList = [
        { value: "true", label: "true" },
        { value: "false", label: "false" },
    ];
    // Estado para almacenar un usuario vacío para inicializar el modal
    const emptyUser = { name: "", username: "", street: "", city: "", cp: "", isAdmin: "false" };
    // Estado para controlar si el modal está abierto o cerrado
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(emptyUser);
    useEffect(()=> {
        getAllUsers()
    },[])
    // Función que se ejecuta cuando se hace click en "Actualizar" de un usuario
    const handleUpdateClick = async (userId) => {
        const user = await getUserById(userId);
        if (user) {
            // Si el usuario existe, se setea en el estado editingUser
            setEditingUser(user);
            // Abrir el modal para editar el usuario
            setIsModalOpen(true);
        }
    };
    // Función que se ejecuta al enviar el modal con los datos del usuario
    const handleSubmit = async (userData) => {
        if (userData._id) {
            await updateUser(userData._id, userData);
        }
        // Cerrar el modal
        setIsModalOpen(false);
        // Resetear
        setEditingUser(emptyUser);
    };
    return (
        <section className="tables-flex">
            <Table
                data={users} // Datos a mostrar
                columns={["name", "username"]} // Columnas a mostrar
                onUpdate={handleUpdateClick} // Función al hacer click en actualizar
                onDelete={deleteUserPermanently} // Función al hacer click en eliminar
            />
            <UserModal
                isOpen={isModalOpen} // Controla si el modal está abierto
                onClose={() => setIsModalOpen(false)} // Función para cerrar el modal
                onSubmit={handleSubmit} // Función al enviar los datos del modal
                initialData={editingUser} // Datos iniciales del modal (usuario a editar)
                isAdminList={isAdminList} // Lista de opciones para el campo isAdmin
            />
        </section>
    );
};
```

9. Componente `UserModal` que se encarga de mostrar un formulario para crear o editar usuarios. Este modal se utiliza en la página `AdminUsers.jsx` y se le pasan las propiedades necesarias para su funcionamiento.
```js
import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const UserModal = ({ isOpen, onClose, onSubmit, initialData, isAdminList }) => {
    // Estado local para almacenar los datos del formulario
    const [formData, setFormData] = useState(initialData);

    // Estado para manejar errores de validación en cada campo
    const [errors, setErrors] = useState({});

    // Cada vez que cambian los datos iniciales (nuevo usuario o usuario a editar),
    // se reinicia el formulario y se borran los errores
    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    // Maneja los cambios en los inputs y select
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el valor del campo modificado
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpia el error de ese campo si lo había
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de página

        // Validación de los campos requeridos
        const newErrors = {};
        if (!formData.name?.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.username) newErrors.username = "El email es obligatorio";
        if (!formData.street?.trim()) newErrors.street = "La calle es obligatoria";
        if (!formData.city?.trim()) newErrors.city = "La ciudad es obligatoria";
        if (!formData.cp?.trim()) newErrors.cp = "El código postal es obligatorio";
        if (formData.isAdmin === undefined || formData.isAdmin === null) newErrors.isAdmin = "Debes seleccionar uno";

        // Si hay errores, se setean y se detiene el envío
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Si todo es correcto, se llama a la función onSubmit pasada como prop
        onSubmit(formData);
    };

    // Si el modal no está abierto, no renderiza nada
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                {/* Título dinámico según si es edición o nuevo usuario */}
                <h2 className="modal-h2">{formData._id ? "Editar Usuario" : "Nuevo Usuario"}</h2>

                <div className="modal-body">
                    {/* Input para el nombre */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="name"
                        label="Nombre*"
                        type="text"
                        value={formData.name}
                        onChange={handleOnChange}
                        placeholder="Introduce tu nombre"
                        error={errors.name}
                        inputError="input--error"
                    />

                    {/* Input para el email */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="username"
                        label="Email*"
                        type="text"
                        value={formData.username}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.username}
                        inputError="input--error"
                    />

                    {/* Input para la dirección */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="street"
                        label="Dirección*"
                        type="text"
                        value={formData.street}
                        onChange={handleOnChange}
                        placeholder="Introduce tu dirección y número"
                        error={errors.street}
                        inputError="input--error"
                    />

                    {/* Input para la ciudad */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="city"
                        label="Ciudad*"
                        type="text"
                        value={formData.city}
                        onChange={handleOnChange}
                        placeholder="Introduce tu ciudad"
                        error={errors.city}
                        inputError="input--error"
                    />

                    {/* Input para el código postal */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="cp"
                        label="Código Postal*"
                        type="text"
                        value={formData.cp}
                        onChange={handleOnChange}
                        placeholder="Introduce el código postal"
                        error={errors.cp}
                        inputError="input--error"
                    />

                    {/* Select para definir si es admin */}
                    <Select
                        divClassName="form-labels"
                        selectClassName="select"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="isAdmin"
                        label="Administrador"
                        value={formData.isAdmin}
                        onChange={handleOnChange}
                        lista={isAdminList} // Opciones true/false
                        firstOptionLabel="Selecciona una opción"
                        error={errors.isAdmin}
                        inputError="input--error"
                    />
                </div>

                {/* Botones del modal: guardar y cerrar */}
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default UserModal;
```

10. Pagina AdminOrders.jsx para gestionar los pedidos (CRUD).
```js
import { useState } from "react";
import Table from "@/components/Table";
import OrderModal from "@/components/modals/OrderModal";
import { useOrder } from "@/hooks/useOrders";

const AdminOrders = () => {
    const { orders, updateOrderStatus, deleteOrderPermanently } = useOrder();
    const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto
    const [editingOrder, setEditingOrder] = useState(null); // Orden que se está editando

    // Lista de posibles estados de las órdenes
    const statusList = [
        { value: "pending", label: "Pending" },
        { value: "preparing", label: "En preparación" },
        { value: "completed", label: "Completado" },
        { value: "cancelled", label: "Cancelado" }
    ];

    // Formatea las órdenes para mostrarlas en la tabla
    const formattedOrders = orders.map(o => ({
        _id: o._id,
        user: o.userId?.name || "Sin usuario",
        email: o.userId?.username || "Sin email",
        items: o.items.map((i, index) => (
            <span key={index}>
                {i.menuId?.name || "Plato desconocido"} (x{i.quantity})
                <br />
            </span>
        )),
        totalPrice: o.totalPrice,
        orderStatus: o.orderStatus,
        createdAt: new Date(o.createdAt).toLocaleString(),
    }));

    // Abrir modal para actualizar el estado de una orden
    const handleUpdateClick = (orderId) => {
        const order = formattedOrders.find(o => o._id === orderId);
        if (order) {
            setEditingOrder(order);
            setIsModalOpen(true);
        }
    };

    // Maneja el submit del modal y actualiza la orden
    const handleModalSubmit = async (updatedOrder) => {
        await updateOrderStatus(updatedOrder._id, updatedOrder.orderStatus);
        setIsModalOpen(false);
        setEditingOrder(null);
    };

    return (
        <section className="tables-flex">
            {/* Tabla de órdenes */}
            <Table
                data={formattedOrders}
                columns={["email", "orderStatus"]}
                onUpdate={handleUpdateClick}
                onDelete={deleteOrderPermanently}
            />

            {/* Modal para actualizar orden */}
            <OrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
                initialData={editingOrder}
                statusList={statusList}
            />
        </section>
    );
};

export default AdminOrders;
```

11. Componente `OrderModal` que se encarga de mostrar un formulario para actualizar el estado de los pedidos. Este modal se utiliza en la página `AdminOrders.jsx` y se le pasan las propiedades necesarias para su funcionamiento.
```js
import { useState, useEffect } from "react";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const OrderModal = ({ isOpen, onClose, onSubmit, initialData, statusList }) => {
    const [formData, setFormData] = useState(initialData || {}); // Estado del formulario
    const [errors, setErrors] = useState(""); // Errores de validación

    // Actualiza el formulario cuando cambian los datos iniciales
    useEffect(() => {
        setFormData(initialData || {});
        setErrors({});
    }, [initialData]);

    // Maneja cambios en los inputs
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Validación y envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (formData.orderStatus === undefined || formData.orderStatus === null) newErrors.orderStatus = "Debes seleccionar uno";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit(formData); // Llamada al submit pasado por props
    };

    if (!isOpen) return null; // No renderizar si modal está cerrado

    // Campos que se muestran en el modal (solo lectura)
    const displayFields = [
        { label: "Usuario", value: formData.user },
        { label: "Email", value: formData.email },
        { label: "Platos", value: formData.items },
        { label: "Total", value: `$${formData.totalPrice}` },
        { label: "Estado actual", value: formData.orderStatus },
        { label: "Fecha de creación", value: formData.createdAt },
    ];

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">Detalles del Pedido</h2>

                {/* Información de la orden */}
                <div className="modal-body modal-info">
                    {displayFields.map((field, index) => (
                        <div key={index} className="modal-info-row">
                            <strong>{field.label}:</strong> <span>{field.value || "—"}</span>
                        </div>
                    ))}
                </div>

                {/* Selector de estado para el administrador */}
                <Select
                    divClassName="form-labels"
                    selectClassName="select"
                    labelClassName="form-label"
                    spanLabel="input-label"
                    name="orderStatus"
                    label="Administrador"
                    value={formData.orderStatus}
                    onChange={handleOnChange}
                    lista={statusList}
                    firstOptionLabel="Selecciona una opción"
                    error={errors.orderStatus}
                    inputError="input--error"
                />

                {/* Botones de submit y cerrar */}
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default OrderModal;
```

12. Pagina AdminMenu.jsx para gestionar los menús (CRUD).
```js
import { useState, useEffect } from "react";
import Table from "@/components/Table";
import DishModal from "@/components/modals/DishModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminMenu = () => {
    const { dishes, createDish, updateDish, getDishById, softDeleteDish, getAllDishes } = useAdmin();

    // Cargar todos los platos al montar el componente
    useEffect(()=>{
        getAllDishes();
    },[]);
    
    // Tipos de platos
    const typeList = [
        { value: "entrantes", label: "entrantes" },
        { value: "arroces", label: "arroces" },
        { value: "pescados", label: "pescados" },
        { value: "carnes", label: "carnes" },
        { value: "postres", label: "postres" },
        { value: "bebidas", label: "bebidas" },
        { value: "vinos", label: "vinos" }
    ];

    const emptyDish = { name: "", price: "", description: "", type: "", imageUrl: "https://picsum.photos/200" };

    const [isModalOpen, setIsModalOpen] = useState(false); // Control del modal
    const [editingDish, setEditingDish] = useState(emptyDish); // Plato que se está editando o creando

    // Carga datos vacíos para crear un plato
    const handleCreateClick = () => {
        setEditingDish(emptyDish);
        setIsModalOpen(true);
    }

    // Editar plato: obtiene datos desde el backend
    const handleUpdateClick = async (dishId) => {
        const dish = await getDishById(dishId);
        if (dish) {
            setEditingDish(dish);
            setIsModalOpen(true);
        }
    };

    // Guardar cambios (crear o actualizar)
    const handleSubmit = async (dishData) => {
        if (dishData._id) {
            await updateDish(dishData._id, dishData);
        } else {
            await createDish(dishData);
        }
        setIsModalOpen(false);
        setEditingDish(emptyDish);
    };

    return (
        <section className="tables-flex">
            <div className="modal-buttons">
                <p>Insertar un nuevo plato: </p>
                <button className="form-button actualizar" onClick={handleCreateClick}>Nuevo</button>
            </div>

            {/* Tabla de platos */}
            <Table
                data={dishes}
                columns={["name", "price"]}
                onUpdate={handleUpdateClick}
                onDelete={softDeleteDish}
                actions={(dish) => (
                    <>
                        <button className="button" onClick={() => handleUpdateClick(dish._id)}>Update</button>
                        <button className="button delete" onClick={() => softDeleteDish(dish._id)}>Eliminar</button>
                    </>
                )}
            />

            {/* Modal para crear/editar plato */}
            <DishModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingDish}
                typeList={typeList}
            />
        </section>
    );
}

export default AdminMenu;
```

13. Componente `DishModal` que se encarga de mostrar un formulario para crear o editar platos. Este modal se utiliza en la página `AdminMenu.jsx` y se le pasan las propiedades necesarias para su funcionamiento.
```js
import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const DishModal = ({ isOpen, onClose, onSubmit, initialData, typeList }) => {
    const [formData, setFormData] = useState(initialData); // Estado del formulario
    const [errors, setErrors] = useState({}); // Errores de validación

    // Actualiza el formulario al cambiar los datos iniciales
    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    // Maneja cambios en los inputs
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Validación y envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name?.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.price || Number(formData.price) <= 0) newErrors.price = "El precio debe ser mayor a 0";
        if (!formData.type) newErrors.type = "Debe seleccionar una categoría";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData); // Llamada al submit pasado por props
    };

    if (!isOpen) return null; // No renderizar si modal está cerrado

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">{formData._id ? "Editar Plato" : "Nuevo Plato"}</h2>

                {/* Cuerpo del modal con inputs */}
                <div className="modal-body">
                    {/* Input para nombre */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="name"
                        label="Nombre*"
                        type="text"
                        value={formData.name}
                        onChange={handleOnChange}
                        placeholder="Nombre del plato"
                        error={errors.name}
                        inputError="input--error"
                    />
                    {/* Input para precio */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="price"
                        label="Precio *"
                        type="number"
                        value={formData.price}
                        onChange={handleOnChange}
                        placeholder="Precio"
                        error={errors.price}
                        inputError="input--error"
                    />
                    {/* Input para descripción */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="description"
                        label="Descripción*"
                        type="text"
                        value={formData.description}
                        onChange={handleOnChange}
                        placeholder="Descripción"
                        error={errors.description}
                        inputError="input--error"
                    />
                    {/* Selector de tipo de plato */}
                    <Select
                        divClassName="form-labels"
                        selectClassName="select"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="type"
                        label="Administrador"
                        value={formData.type}
                        onChange={handleOnChange}
                        lista={typeList}
                        firstOptionLabel="Selecciona una opción"
                        error={errors.type}
                        inputError="input--error"
                    />
                </div>

                {/* Botones de submit y cerrar */}
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default DishModal;
```

14. Pagina AdminEvents.jsx para gestionar los eventos (CRUD).
```js
import { useState, useEffect } from "react";
import Table from "@/components/Table";
import EventModal from "@/components/modals/EventModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminEvents = () => {
    const { events, getEventById, updateEvent, createEvent, softDeleteEvent, getAllEventsAdmin } = useAdmin();

    const emptyEvent = { title: "", description: "", date: "", time: "", image: "" };
    const [isModalOpen, setIsModalOpen] = useState(false); // Control del modal
    const [editingEvent, setEditingEvent] = useState(emptyEvent); // Evento que se está editando
    const [isCreating, setIsCreating] = useState(false); // Controla si se está creando un evento

    // Cargar eventos al montar el componente
    useEffect(() => {
        getAllEventsAdmin();
    }, [])

    // Crear nuevo evento
    const handleCreateClick = () => {
        setEditingEvent(emptyEvent);
        setIsCreating(true);
        setIsModalOpen(true);
    };

    // Editar evento existente
    const handleUpdateClick = async (eventId) => {
        const event = await getEventById(eventId);
        if (event) {
            setEditingEvent(event);
            setIsCreating(false);
            setIsModalOpen(true);
        }
    };

    // Guardar cambios del evento
    const handleSubmit = async (eventData) => {
        // Forzar valor por defecto si image está vacío
        const dataToSend = {
            ...eventData,
            image: eventData.image || "imagen.jpg"
        };
        if (isCreating) {
            await createEvent(dataToSend); // crear nuevo evento
        } else if (dataToSend._id) {
            await updateEvent(dataToSend._id, dataToSend); // actualizar existente
        }
        setIsModalOpen(false);
        setEditingEvent(emptyEvent);
    };

    return (
        <section className="tables-flex">
            <div className="modal-buttons">
                <p>Crear evento:</p>
                <button className="form-button actualizar" onClick={handleCreateClick}>nuevo</button>
            </div>

            {/* Tabla de eventos */}
            <Table
                data={events}
                columns={["title", "date", "time"]}
                onUpdate={handleUpdateClick}
                onDelete={softDeleteEvent}
            />

            {/* Modal para crear/editar evento */}
            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingEvent}
            />
        </section>
    );
};

export default AdminEvents;
``` 

15. Componente `EventModal` que se encarga de mostrar un formulario para crear o editar eventos. Este modal se utiliza en la página `AdminEvents.jsx` y se le pasan las propiedades necesarias para su funcionamiento. Incluye manejo de imagen (comentado por problemas con Vercel).
```js
import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import ModalButtons from "@/components/modals/ModalButtons";

const EventModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const [formData, setFormData] = useState(initialData);
    // const [imageFile, setImageFile] = useState(null);
    const [errors, setErrors] = useState({});

     // Actualiza el formulario al cambiar los datos iniciales
    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    // CON VERCEL NO FUNCIONA
    // const uploadImage = async (file) => {
    //     try {
    //         // Aquí va el código original de subida si hay archivo
    //         const formData = new FormData();
    //         formData.append("image", file);

    //         const res = await fetch(`${urlBackend}/upload`, {
    //             method: "POST",
    //             body: formData
    //         });

    //         const response = await res.json();
    //         if (response.status === "error") {
    //             throw new Error(response.msg);
    //         }
    //         console.log("Imagen subida:", response.data);
    //         return response.data.url;

    //     } catch (error) {
    //         console.error("Error al subir la imagen:", error);
    //         // Si hay error, se envia una imagen por defecto
    //         return "https://img.freepik.com/vector-gratis/concepto-feliz-cumpleanos_23-2148484501.jpg";
    //     }
    // };

    // Maneja cambios en los inputs y errores
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Validación y envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.title?.trim()) newErrors.title = "El título es obligatorio";
        if (!formData.description?.trim()) newErrors.description = "La descripción es obligatoria";
        if (!formData.date?.trim()) newErrors.date = "La fecha es obligatoria";
        if (!formData.time?.trim()) newErrors.time = "La hora es obligatoria";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // CON VERCEL NO FUNCIONA
        // // Si hay imagen nueva, la subimos antes de crear el evento
        // let imageUrl = formData.image || null;
        // if (imageFile) {
        //     const uploadedUrl = await uploadImage(imageFile);
        //     if (!uploadedUrl) {
        //         setErrors({ image: "Error al subir la imagen" });
        //         return;
        //     }
        //     imageUrl = uploadedUrl;
        // }


        // Forzar imagen por defecto si está vacía
        const dataToSubmit = {
            ...formData,
            image: formData.image || "imagen.jpg"
        };

        // Llamada al submit pasado por props
        onSubmit(dataToSubmit);
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">{formData._id ? "Editar Evento" : "Nuevo Evento"}</h2>
                {/* Cuerpo del modal con inputs */}
                <div className="modal-body">
                    {/* Input para el título */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="title"
                        label="Título*"
                        type="text"
                        value={formData.title}
                        onChange={handleOnChange}
                        placeholder="Nombre del evento"
                        error={errors.title}
                        inputError="input--error"
                    />
                    {/* Input para la descripción */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="description"
                        label="Descripción*"
                        type="text"
                        value={formData.description}
                        onChange={handleOnChange}
                        placeholder="Descripción"
                        error={errors.description}
                        inputError="input--error"
                    />
                    {/* Input para la fecha */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="date"
                        label="Fecha (dd/mm/aaaa)*"
                        type="text"
                        value={formData.date}
                        onChange={handleOnChange}
                        placeholder="Fecha"
                        error={errors.date}
                        inputError="input--error"
                    />
                    {/* Input para el horario */}
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="time"
                        label="Horario*"
                        type="text"
                        value={formData.time}
                        onChange={handleOnChange}
                        placeholder="Hora del evento"
                        error={errors.time}
                        inputError="input--error"
                    />
                    {/* Input para imagen comentado CON VERCEL NO FUNCIONA */}
                    {/* <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="image"
                        label="Image*"
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        error={errors.image}
                        inputError="input--error"
                    /> */}
                </div>
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default EventModal;
```

16. middleware y ruta en el backend para la subida de imágenes usando Multer.
```js routes/routes.js
import { upload } from "../middlewares/multer.js";
// Upload de archivos con multer
router.post('/upload', upload.single('image'), (req, res, next) => {
    try {
        res.status(200).json({
            msg: "Archivo subido correctamente",
            file: req.file,
            body: req.body,
            peso: `${Math.round(req.file.size / 1024)} Kbytes`,
            url: `${DOMAIN}${PORT}/uploads/${req.file.filename}`
        });
    } catch (e) {
        res.status(500).json({error: "Error en el servidor"})
    }
});

export default router;
```
```js middleware/multer.js
import multer from "multer";
import path from 'path';

// Subida de archivos con multer ej: "image-unixTimeStamp-655466764.png"
export const storage = multer.diskStorage({
    // Destino de los archivos subidos
    destination: function (req, fille, cb) {
        cb(null, 'public/uploads/')
    },
    // Nombre del archivo subido
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname)
        const uniqueSuffix = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');
        // ej: "avatar-unixTimeStamp-655466764.png"
        cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`)
    }
});

export const upload = multer({storage:storage});  
```
```js index.js (server)
import path from 'path'
import { __dirname } from './config/config.js';
// Si usas Multer para manejar cargas de archivos.
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
```

// estoy aquí
# Ultimos cambios realizados
- [x] Header.jsx
- [x] usePageInfo.jsx
- [x] TopPictures.jsx

1. Header.jsx 
El header segun el user que haya logueado muestra un nav diferente (MainHeader, UserHeader, AdminHeader).
```js
import { useUser } from "@/hooks/useUser";
import MainHeader from "@/components/header/MainHeader";
import UserHeader from "@/components/header/UserHeader";
import AdminHeader from "@/components/header/AdminHeader";
import { NavLink } from "react-router-dom";


const Header = () => {
    const { user, logout } = useUser();
    const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;

    return (
        <header className="header-container">
            <div className="header-imgdiv">
                <NavLink to="/" >
                    <img src={`${VITE_FRONTEND_IMG}/logo.png`} alt="logo" className="header-img" />
                </NavLink>
            </div>
            {/* Segun si el User existe, no existe o es Admin enseña un nav diferente.  */}
            {!user && <MainHeader />}
            {(user && !user.admin) && <UserHeader user={user} />}
            {(user && user.admin) && <AdminHeader user={user} />}
        </header>

    );
}

export default Header;
```
```js
import { NavLink, Link } from "react-router-dom";
// Aquí se muestran las opciones que solo estan avaiable cuando el user NO está conectado. 
// Boton de login/takeout NO página TakeOut. 
const MainHeader = () => {

    return (
        <div className="header-inner">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/menu" className="nav-a">MENU</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <Link to="/login" className="home-button">TakeOut</Link>
                <Link to="/login" className="home-button">Login</Link>
            </div>
        </div>
    );
}

export default MainHeader;
```
```js
import { useUser } from "@/hooks/useUser";
import { NavLink, Link } from "react-router-dom";

// Aqui se muestran solo las funciones de los controllers del back que son privadas y necesita authorization
// Para leer/cambiar/borrar el menu, ordenes y users (no Password). Un boton para cada opcion en el nav. 
const AdminHeader = ({user}) => {
    const {logout} = useUser();

    return (
        <div className="header-inner">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/admin/users" className="nav-a">USERS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/menu" className="nav-a">MENU</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/orders" className="nav-a">ORDERS</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <p className="header-user">{user.name}</p>
                <Link onClick={logout} className="home-button">Salir</Link>
            </div>
        </div>
    );
};

export default AdminHeader;
```
```js
import { NavLink, Link } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
// Aquí se muestran todas las opciones del nav más la opcion de takeout. 
// Tambien muestra el boton del carrito, logout y el saludo. 
const UserHeader = ({ user }) => {
    const { logout } = useUser();

    return (
        <div className="header-inner">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/menu" className="nav-a">MENU</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/takeOut" className="nav-a">TAKEOUT</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/cart" className="nav-a">carrito</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <p className="header-user">{user.name}</p>
                <Link onClick={logout} className="home-button">Salir</Link>
            </div>
        </div>
    );
}

export default UserHeader;
```

2. Implemetacion de un json pagesInfo.json para leer la informacion estática de la pagina. 
```js
{
    "pagesInfo": [
        {
            "pageName": "home",
            "title": "los arroces de lucía",
            "subtitle": "Descubre un rincón donde la buena mesa y el ambiente se encuentran. Disfruta de platos tradicionales con un toque moderno, ingredientes frescos y una experiencia culinaria que te hará volver.",
            "image": "paella.jpg"
        },
        {
            "pageName": "menu",
            "image": "menu.jpg"
        },
        {
            "pageName": "events",
            "title": "NUESTROS EVENTOS",
            "subtitle": "Celebra con nosotros tus momentos más especiales. Organizamos cenas privadas, eventos temáticos, y celebraciones únicas en un entorno acogedor y elegante.",
            "image": "grupos.jpg"
        },
        {
            "pageName": "takeout",
            "image": "takeout.jpg"
        }
    ],
    "homeDesign": [
        {
            "title": "Nuestro Menú",
            "link": "/menu",
            "button": "Menú",
            "image": "menu.jpg"
        },
        {
            "title": "Para llevar",
            "link": "/takeout",
            "button": "Ordenar",
            "image": "takeout.jpg"
        },
        {
            "title": "eventos",
            "link": "/events",
            "button": "eventos",
            "image": "grupos.jpg"
        }
    ]
}
```
```js usePageInfo.jsx
import pagesInfoData from "@/data/pagesInfo.json";
// context/PageInfoContext.jsx
import { createContext, useContext, useState } from "react";

const PageInfoContext = createContext();

export function PageInfoProvider({ children }) {
    const VITE_FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;
    const [pageInfo, setPageInfo] = useState(null);
    const [homeInfo, setHomeInfo] = useState(null);
    const [error, setError] = useState(null);

    // Función para obtener la información de la página
    const fetchPageInfo = async (pageName) => {
        try {
            const respuesta = await fetch(VITE_FRONTEND_URL);
            if (!respuesta.ok) {
                throw new Error(`Error ${respuesta.status}: No se pudo cargar la información`);
            }
            const data = await respuesta.json();
            const pageData = data.pagesInfo.find((page) => page.pageName === pageName);
            if (pageData) {
                setPageInfo(pageData);
            } else {
                throw new Error("Página no encontrada");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchHomeInfo = async () => {
    try {
        const respuesta = await fetch(VITE_FRONTEND_URL);
        if (!respuesta.ok) 
            throw new Error(`Error ${respuesta.status}: No se pudo cargar la información`);

        const data = await respuesta.json();
        setHomeInfo(data.homeDesign);
    } catch (error) {
        setError(error.message);
    }
};

    return (
        <PageInfoContext.Provider value={{ pageInfo, fetchPageInfo, error, homeInfo, fetchHomeInfo}}>
            {children}
        </PageInfoContext.Provider>
    );
}

export const usePageInfo = () => useContext(PageInfoContext);
```

3. TopPictures.jsx
Cambia la imagen y los textos de la parte superior segun la pagina que se visite.
Ejemplo: {pageInfo && <TopPictures pageInfo={pageInfo} />}
```js
const TopPictures = ({ pageInfo }) => {
    const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;
    const { pageName, title, subtitle, image, homeImages } = pageInfo || {};

    if (!pageInfo) return null; 

    return (
        <>
            <div className="top-div">
                <img
                    className="top-img"
                    src={`${VITE_FRONTEND_IMG}/${image}`}
                    alt={title || pageName || "imagen"}
                />
                <h1 className="top-h1">{pageName}</h1>
            </div>

            {(title || subtitle) && (
                <div className="top-titles">
                    {title && <h2 className="top-h2">{title}</h2>}
                    {subtitle && <p>{subtitle}</p>}
                </div>
            )}
        </>
    );
};

export default TopPictures;
```