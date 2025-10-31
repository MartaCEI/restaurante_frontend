const Table = ({ data, columns, onUpdate, onDelete }) => {
    if (!data || data.length === 0) return <p>No hay información disponible</p>;

    // Separar activos y soft deleted
    const activeItems = data.filter(item => !item.deletedAt);
    const deletedItems = data.filter(item => item.deletedAt);

    // Unir con los eliminados al final
    const sortedData = [...activeItems, ...deletedItems];

    return (
        <table className="table">
            <thead>
                <tr className="table-tr">
                    {columns.map(col => <th key={col} className="table-th">{col}</th>)}
                    <th className="table-th">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map(item => (
                    <tr
                        key={item._id}
                        className="table-tr"
                        style={{
                            color: item.deletedAt ? "gray" : "black",
                            textDecoration: item.deletedAt ? "line-through" : "none",
                        }}
                    >
                        {columns.map(col => (
                            <td key={col} className="table-td">{item[col] || ""}</td>
                        ))}
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
