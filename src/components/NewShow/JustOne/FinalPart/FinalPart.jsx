import React from 'react'
// import { v4 as uuidv4 } from 'uuid'
import schema from './data'

const FinalPart = ({ ...props }) => {
    const { novoloop } = schema
    return (
        <div className="col-4">
            {novoloop && novoloop.length > 0
                && novoloop.map((ele, ind) => {
                    if (!ele) return null
                    let finalValue = props[ele.refer]
                    if (ele.yesORno) finalValue = props[ele.refer] ? 'yes' : 'no'
                    if (ele.special) finalValue = <a href={props[ele.refer]} target="_blank" rel="noreferrer">{ele.schema}</a>
                    if (!finalValue) return null
                    return (
                        <p
                            key={`keynovolooping${ind + 1}`}
                            className="mb-0"
                        >
                            <small>
                                <strong data-test="12elements">
                                    {ele.schema === 'API_URL' ? finalValue : ele.schema}
                                    {' '}
                                </strong>
                                {ele.schema !== 'API_URL' && finalValue}
                            </small>
                        </p>
                    )
                })}
        </div>
    )
}

export default FinalPart
