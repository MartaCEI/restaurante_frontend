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
