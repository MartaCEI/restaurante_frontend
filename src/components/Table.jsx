
const Table = ({ data, columns, onUpdate, onDelete }) => {
    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

    return (
        <table className="table">
            <thead>
                <tr className="table-tr">
                    {columns.map(col => <th key={col} className="table-th">{col}</th>)}
                    <th className="table-th">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr
                        key={item._id}
                        className="table-tr"
                        style={{
                            color: item.deletedAt ? "gray" : "black",
                            textDecoration: item.deletedAt ? "line-through" : "none"
                        }}
                    >
                        {columns.map(col => <td key={col} className="table-td">{item[col] || ""}</td>)}
                        <td className="table-td">
                            {!item.deletedAt && <button className="button" onClick={() => onUpdate(item._id)}>Update</button>}
                            {!item.deletedAt && <button className="button delete" onClick={() => onDelete(item._id)}>Eliminar</button>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;