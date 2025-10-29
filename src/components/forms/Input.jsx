const Input = ({name, label, type="text", value, onChange, error, className, debug=false}) =>{
    return (
        <div className={className}>
            <label>
                {label}
                <input 
                    type={type} 
                    name={name}
                    value={value} 
                    onChange={onChange}
                />
            </label>
            {error &&  <p style={ {color:'red'} }>  {error}</p> }
            {debug && <span style={{color:'orange'}}>V: {JSON.stringify(value)}</span>}
        </div>
    )
};

export default Input;