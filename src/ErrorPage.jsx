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