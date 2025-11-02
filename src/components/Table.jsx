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