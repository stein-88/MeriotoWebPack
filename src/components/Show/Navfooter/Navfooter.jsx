import React from 'react'
import Btn from '@generics/Btn'
import schema from './data'

const Navfooter = ({ toTop }) => {
    if (!schema || !schema.totop || !toTop) return null
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-12">
                    <Btn hableButtom onClick={toTop} text={schema.totop} />
                </div>
            </div>
        </div>
    )
}

export default Navfooter
