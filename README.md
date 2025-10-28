# 1ª Fase del Frontend del Proyecto Restaurante
En esta primera fase del Frontend del Proyecto Restaurante, nos centraremos en establecer la estructura básica de la aplicación utilizando Vite con React y React Router Dom. Implementaremos un sistema de rutas para navegar entre diferentes páginas, crearemos componentes esenciales como el Header y Footer, y diseñaremos formularios básicos para el Login y Registro de usuarios, asi como, una ruta privada para el usuario autenticado. Una vez que el Login y Registro estén funcionales, podremos avanzar hacia la integración con el backend y la implementación de tokens JWT para la autenticación segura de usuarios.

## Lista de tareas frontend
Nuestro Front tendrá:
Páginas: Home Pública, TakeOut Privada, menu publica, carrito Privada, Registro Pública, Login Pública, ADMIN Privada para gestionar el menú y compras de los clientes.
Crear carpetas pages, components, hooks, lib, css, lib/routes.

- [x] Crear Front con Vite-React + React-Router-Dom
- [x] Alias @ para Vite `vite.config.js`
- [x] Instalar TailwindCSS (script cdn + tailwind.config.js)
- [x] Organizacion de carpetas (pages, components, hooks, lib, css, lib/routes)
- [x] Borro los css ya que vamos a usar uno propio
- [x] Creo mi propio archivo restaurante.css y lo importo en main.js
- [x] Crear pagina de error 404.
- [x] Crear Páginas: (Prueba para navegación páginas básicas)
        [x]<Layout>  // Cambiamos App.js por Layout.js
        [x]<Home> (Página de inicio)
        [x]<TakeOut> (TakeOut de recetas)
        [x]<Menu> (Hay 3 habitaciones)
        [x]<Cart> (Tu carrito de compras)
        [x]<Login> (comprobar usuario)
        [x]<Register> (Registro)
        [x]<Admin> (Privada - Gestión del restaurante)
        [x]<IndividualProduct> (Detalle producto)
        [x]<Events> (Eventos especiales)
        [x]<Reservations> (Reservas de mesa)
- [x] Crear Layout (Header + Outlet + Footer)
- [x] Configurar Rutas de React-Router-Dom lib/routes/routes.js
- [x] Configurar main.js con React-Router-Dom <RouterProvider router={router} />
- [x] Crear Componentes:
        [x]<Header> (Navegación)
        [x]<Footer> (Información del restaurante)
- [x] Crear CSS del header y footer básico y provisional. (no responsive ni adaptativo)
- [x] Formulario de Login.
- [x] Formulario de Registro.
- [x] Creamos un contexto de usuarios utilizando useContext para manejar el estado de autenticación y su hook personalizado `hooks/useUser.js`.
- [x] Creamos las funciones de login, register y logout provisionales y simulamos guardar los datos con localStorage.
- [X] Vinculamos el contexto de usuario con los formularios y el header.
- [X] Proteger ruta privada <PrivateRoute>
- [X] Crear Variables de entorno para VITE
- [x] Crear los fetch para Login y Registro
- [x] Token con JWT y guardarlo en LocalStorage (Explicado en el backend)
- [x] Upload de Archivos.

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

4. Organizacion de carpetas (pages, components, hooks, lib, css, lib/routes)
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

5. Borro los css ya que vamos a usar uno propio y creo mi propio archivo restaurante.css y lo importo en main.jsx. Este reset evita problemas de overflow horizontal. Y el borde-boxing para que los paddings y margenes no aumenten el tamaño de los contenedores. Tambien limita las imagenes, tablas y sliders al 100% del contenedor padre. Y sin margenes ni paddings por defecto.
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

6. Crear pagina errorPage.
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

7. Crear pages básicas (Home, Menu, Carrito, Login, Register, Admin, ect) para pruebas de navegación.
```js
const Home = () => {
    return (
        <>Soy Home</>
    );
}

export default Home;
```

8. Crear Layout (Header + Outlet + Footer)
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

9. Configurar Rutas de React-Router-Dom lib/routes/routes.jsx
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

10. Configurar main.jsx con React-Router-Dom <RouterProvider router={router} />
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

11. Crear Componentes Header y Footer (Básicos). Pero incluyendo Link y NavLink de react-router-dom.
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
12. Css del header y footer básico y provisional. (no responsive ni adaptativo)
```css
/* ----- Header ----- */
.header,
.footer {
    width: 100%;
    background-color: rgb(48, 48, 48);
    color: white;
    padding: 20px 20px;
    overflow-x: hidden;
}

.header-container {
    margin: auto;
    max-width: 75rem;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    align-items: center;
}

.header-imgdiv {
    width: 6.25rem;
    height: 6.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img {
    width: 100%;
    height: auto;
}

.header-inner {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
}

.nav {}

.nav-ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.nav-li {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-a {
    text-decoration: none;
    color: white;
    font-weight: 600;
}

.nav-a.active {
    border-bottom: 2px solid burlywood;
    padding-bottom: 0.25rem;
}

.nav-a:hover {
    border-bottom: 2px solid burlywood;
    padding-bottom: 0.25rem;
}

.header-social {}

.social {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.social-ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.social-li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
}

.social-img {
    width: 100%;
    height: auto;
}

.social-button {
    text-transform: uppercase;
    font-weight: 600;
    background-color: burlywood;
    color: aliceblue;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 1rem;
}

/* ----- Footer ----- */
.footer-container {
    margin: auto;
    max-width: 48rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    padding: 2rem 0;
}


.footer-right,
.footer-center,
.footer-left {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    gap: 1rem;
}

.footer-title {
    font-size: 1.5rem;
}

.footer-content {
    font-size: 1rem;
}

.footer-ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.footer-li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
}
```

13. Formulario de Login.
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

14. Formulario de Registro.
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

15. Crear Css básico para formularios.
```css
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0,
0, 0.1);
}

.label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: #333;
}

.input {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.button {
    padding: 0.75rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.button:hover {
    background-color: #45a049;
}

.button.disabled,
.button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
} 
```

16. Crear contexto de usuario con useContext y hook personalizado `hooks/useUser.js`.
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

17. Crear las funciones de login, register y logout provisionales y simulamos guardar los datos con localStorage.
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

18. Proteger ruta privada <PrivateRoute>
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

19. Vincular el contexto de usuario con los formularios y el header.
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

20. Crear Variables de entorno para VITE
Crear un archivo .env, .env.example y .env.production en la raíz del proyecto. Asegurarse que no se suben las variables sensibles a GitHub (.gitignore)
```jsx
// Accede a la carpeta pública donde se sirven los archivos estáticos del backend
VITE_STATIC_URL = "http://localhost:3000"
// URL del backend para las peticiones API
VITE_BACKEND_URL = "http://localhost:3000/api/v1"
```

21. (ESTE PASO VA DESPUES DE HABER CREADO LOS CONTROLADORES DEL BACKEND PARA SABER QUE INFORMACIÓN SE RECIBE.) Creación de los fetch del frontend para usar el token JWT en zonas privadas.
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
Ejemplo de ruta privada usando el token JWT.
Ruta privada /admin/users, mandar el token en el 'headers'/"Authorization": `Bearer ${token}`.
```js
const fetchAdminData = async () => {
    try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${URL}/admin/users`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}` // Enviar el token JWT en el header
            }
        });
        const response = await res.json();
        console.log("Datos privados de admin:", response.data);
    } catch (error) {
        console.log("Error al acceder a datos privados de admin:", error);
    }
}

fetchAdminData();
```

# 2ª Fase del Frontend del Proyecto Restaurante

## Lista de tareas frontend
- [x] Crear hook personalizado `hooks/useMenu.jsx` para gestionar el estado del menú y las operaciones relacionadas.
- [x] Abrazar el main.jsx con el MenuProvider para que toda la app tenga acceso al menú.
- [x] Crear la funcionalidad de fetch para obtener el menú desde el backend y guardarlo en el contexto del menú.
- [x] Mostrar el menú dinámicamente en la página Menu utilizando los datos del contexto del menú.
- [ ] Implementar la funcionalidad de añadir productos al carrito desde la página Menu.
- [ ] Implementar la funcionalidad de carga de imágenes en el backend y conectar con el frontend.
- [ ] Crear hook personalizado `hooks/useAdmin.jsx` para gestionar las operaciones administrativas y rutas privadas.
- [ ] Implementar la funcionalidad de gestión del menú en la página Admin (CRUD de platos).
- [ ] Implementar la funcionalidad de gestión de pedidos en la página Admin (ver y actualizar el estado de los pedidos).

1. Crear hook personalizado `hooks/useMenu.jsx` para gestionar el estado del menú y las operaciones relacionadas.
```js
const MenuContext = createContext();

export const MenuProvider = ({children}) => {
    return (
        <MenuContext.Provider value={{}}>
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

3. Crear la funcionalidad de fetch para obtener el menú desde el backend y guardarlo en el contexto del menú.
```js
const urlBackend = import.meta.env.VITE_BACKEND_URL;
const urlStatic = import.meta.env.VITE_STATIC_URL;

const [dishes, setDishes] = useState(null);
const [filteredDishes, setFilteredDishes] = useState(null);
const [singleDish, setSingleDish] = useState(null);
const [error, setError] = useState(null);

// router.get('/dishes', getAllDishes) // getAllDishes()
const getAllDishes = async () => {
    try {
        const res = await fetch(`${URL}/dishes`);
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

useEffect(()=>{
    getAllDishes();
},[]);

// router.get('/dishes/:id', getDishById) // getDishById(id)
const getDishById = async (dishId) => {
    try {
        const res = await fetch(`${urlBackend}/dishes/${dishId}`);
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

// router.get('/dishes/:type', getDishesByType) // getDishesByType(type);
const getDishesByType = async (dishType) => {
    try {
        const res = await fetch(`${urlBackend}/dishes/${dishType}`);
        const response = await res.json();
        if (response.status === "error") {
            setError(response.msg)
            setFilteredDishes(null)
            console.log("[getDishesByType]: Platos encontrados:", response);
        }
        setFilteredDishes(response.data);
        setError(null);
    } catch (error) {
        console.log("[getDishesByType]: Error:", error);
        setError("Hubo un error al obtener los platos.");
        setDishes(null);
    }
}

return (
    <MenuContext.Provider value={{
                            dishes,
                            filteredDishes,
                            singleDish,
                            error,
                            getDishById,
                            getDishesByType
                        }}>
        {children}
    </MenuContext.Provider>
)
```

4. Mostrar el menú dinámicamente en la página Menu utilizando los datos del contexto del menú.
```jsx pages/Menu.jsx
import { useState, useEffect } from "react";
import { useMenu } from "@/hooks/useMenu";
import TopPictures from "@/components/TopPictures";
import MenuCard from "@/components/MenuCard";
import MenuButtons from "@/components/MenuButtons";

const Menu = () => {
    const { filteredDishes, getDishesByType } = useMenu();
    const [selectedType, setSelectedType] = useState("entrantes");
    const [displayDishes, setDisplayDishes] = useState([]);

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
            <TopPictures />
            <MenuButtons setType={setSelectedType} />

            <section className="menu-flex">
                <h2 className="dish-h2">{selectedType}</h2>
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
```jsx components/MenuCard.jsx
const MenuCard = ({ _id, name, description, price }) => {
    return (
        <article className="menu-card">
            <div className="card">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">{price}</p>
            </div>
            <p className="card-desc">{description}</p>
        </article>
    );
}

export default MenuCard;
```
```jsx components/MenuButtons.jsx
const MenuButtons = ({ setType }) => {
    const types = ["entrantes", "arroces", "pescados", "carnes", "postres", "bebidas", "vinos"];

    return (
        <section className="menu-buttons">
            {types.map((type, index) => (
                <button key={index} onClick={() => setType(type)} className="menu-button">
                    {type === null ? "Menu" : type}
                </button>
            ))}
        </section>
    );
};

export default MenuButtons;
```
```jsx components/MenuCard.jsx
const MenuCard = ({ _id, name, description, price }) => {
    return (
        <article className="menu-card">
            <div className="card">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">{price}</p>
            </div>
            <p className="card-desc">{description}</p>
        </article>
    );
}

export default MenuCard;
```
