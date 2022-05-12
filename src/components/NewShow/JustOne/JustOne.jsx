import React from 'react'
import MidlePart from './MidlePart'
import FinalPart from './FinalPart'
import Fpart from './Fpart'

const JustOne = ({ ...props }) => (
        <div className="row">
            <Fpart {...props} />
            <MidlePart {...props} />
            <FinalPart {...props} />
        </div>
    )

export default JustOne
