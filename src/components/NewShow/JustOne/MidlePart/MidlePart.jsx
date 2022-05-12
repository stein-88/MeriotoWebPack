import React from 'react'
// import uuid from 'uuid'
import schema from './data'

const MidlePart = ({ ...props }) => {
    if (!schema) return null
    const { novoloop } = schema
    if (!novoloop || !novoloop.length) return null
    return (
        <div className="col-4">
            {novoloop.map((ele, ind) => {
                if (!ele || !props[ele.refer]) return null
                let finalValue = props[ele.refer]
                if (ele.forjson) finalValue = JSON.stringify(finalValue)
                if (ele.subRefer) finalValue = finalValue[ele.subRefer]
                if (!finalValue) return null
                return (
                    <p key={`keymidlepart${ind + 1}`}>
                        <small>
                            <strong>{ele.schema}</strong>
                            {' '}
                            {finalValue}
                        </small>
                    </p>
                )
            })}
        </div>
    )
}

export default MidlePart
