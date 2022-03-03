import React from 'react';


const SettingField = ({
    value,
    onChange,
    placeholder,
    type,
}) => (
    <input
        className='settings__input'
        value={value}
        onChange={onChange}
        type={type} required
        placeholder={placeholder}
    />
);

export default SettingField;