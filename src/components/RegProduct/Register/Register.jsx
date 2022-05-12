import React from 'react'
import Preview from './Preview'
import Looppart from './Looppart'

const Register = (props) => (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Looppart {...props} />
                </div>
                <div className="col-6">
                    <Preview {...props} />
                </div>
            </div>
        </div>
    )

export default Register
