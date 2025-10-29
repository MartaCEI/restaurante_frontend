import Table from "@/components/Table";
import { useAdmin } from "@/hooks/useAdmin";
import { useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";

const AdminMenu = () => {
    const menu = {
        type: "",
        name: "",
        description: "",
        price: "",
        imageUrl: "https://picsum.photos/200"
    }
    const typeList = [{ value: "entrantes", label: "entrantes" },
    { value: "arroces", label: "arroces" },
    { value: "pescados", label: "pescados" },
    { value: "carnes", label: "carnes" },
    { value: "postres", label: "postres" },
    { value: "bebidas", label: "bebidas" },
    { value: "vinos", label: "vinos" }];

    const { dishes, createDish } = useAdmin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newDish, setNewDish] = useState(menu);
    const [errores, setErrores] = useState({});

    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if (!newDish.name) objetoErrores.name = "Debes ingresar un nombre";
        if (!newDish.description) objetoErrores.description = "Debes ingresar un description";
        if (!newDish.price) objetoErrores.price = "Debes ingresar un price";
        if (isAdulto && !newDish.type) objetoErrores.type = "Debes seleccionar una ocupación";
        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();
        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if (Object.keys(listaErrores).length === 0) {
            createDish(newDish);
        } else {
            setErrores(listaErrores);
        }
        setIsModalOpen(false);
        setNewDish(menu);
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        // setFormData({ ...formData, [name]:value });
        setNewDish(prevData => ({ ...prevData, [name]: value }))
        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores(prevErrores => ({ ...prevErrores, [name]: "" }))
    }

    return (
        <section className="tables-flex">
            <div>
                <p>Insertar un nuevo plato</p>
                <button className="button" onClick={() => setIsModalOpen(true)}>Insertar</button>
            </div>
            <Table data={dishes} columns={["name", "price"]} />

            {
                isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2 className="modal-h2">Nuevo Plato</h2>
                            {/* input de Nombre */}
                            <Input
                                name="name"
                                label="Nombre:"
                                type="text"
                                value={newDish.name}
                                onChange={handleOnChange}
                                error={errores.name}
                                className="input"
                            />

                            {/* input de la descripcipn  */}
                            <Input
                                name="price"
                                label="price:"
                                type="number"
                                value={newDish.price}
                                onChange={handleOnChange}
                                className="input"
                                error={errores.price}
                            />

                            {/* input del precio  */}
                            <Input
                                name="description"
                                label="Descripción:"
                                type="text"
                                value={newDish.description}
                                onChange={handleOnChange}
                                className="input"
                                error={errores.description}
                            />
                            {/* select de rango de edad  */}
                            <Select
                                name="type"
                                label="Categoría"
                                firstOptionLabel="Seleccione la categoría"
                                value={newDish.type}
                                onChange={handleOnChange}
                                lista={typeList}
                                error={errores.type}
                                className="input"
                            />
                            <div className="modal-buttons">
                                <button className="button cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                                <button className="button create" onClick={handleSubmit}>Crear</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );
}

export default AdminMenu;