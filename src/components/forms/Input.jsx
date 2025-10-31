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