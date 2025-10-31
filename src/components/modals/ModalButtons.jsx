const ModalButtons = ({onClose, handleSubmit}) => {
    return (
        <div className="modal-buttons">
            <button className="form-button cancel" onClick={onClose}>Cancelar</button>
            <button className="form-button guardar" onClick={handleSubmit}>Guardar</button>
        </div>
    );
}

export default ModalButtons;