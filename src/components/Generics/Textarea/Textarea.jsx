import React from 'react'

const Textarea = ({
 placeholder, value, onChange, id,
}) => {
    if (!id || !onChange) return null
    return (
        <textarea
            className="w-100"
            placeholder={placeholder}
            value={value || ''}
            onChange={(ev) => onChange(ev)}
            id={id}
        />
    )
}

export default Textarea
