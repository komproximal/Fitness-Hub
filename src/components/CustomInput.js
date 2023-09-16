import React from 'react';

const CustomInput = (props) => {
    const { type, name, placeholder, classname, value, onChange, onBlur } = props;
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={`form-control ${classname}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

export default CustomInput;