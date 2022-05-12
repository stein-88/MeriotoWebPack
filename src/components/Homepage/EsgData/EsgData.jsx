import React from 'react'
import schema from './data'

const EsgData = () => {
    const { titulo, text } = schema
    return (
        <div className="row">
            <div className="col-12 text-muted">
                {titulo && <h2 className="h1 pt-5">{titulo}</h2>}
                {text && text.length > 0 && text.map((ele, i) => (
                    <p key={`esg ${i + 1}`} className="h3 my-4">{ele}</p>
                ))}
            </div>
        </div>
    )
}

export default EsgData
