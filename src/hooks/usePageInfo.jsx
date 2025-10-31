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
