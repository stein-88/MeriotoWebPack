import React from 'react'
import schema from './data'

const Title = ({ idserver }) => {
    if (!schema) return null
    const { titleedi, titlereg, subconst } = schema
    return (
        <section className="w-100 py-5 text-center">
            <div className="container">
                <div className="row">
                    {titleedi && titlereg
                        && (
<div className="col-6">
                            <section className="w-100">
                                <p
                                    data-test={!idserver ? titlereg : `${titleedi} - ${idserver}`}
                                    className="h1"
                                >
{!idserver ? titlereg : `${titleedi} - ${idserver}`}
                                </p>
                            </section>
</div>
)}
                    {subconst
                        && (
<div className="col-6">
                            <section className="w-100">
                                <p className="h1">{subconst}</p>
                            </section>
</div>
)}
                </div>
            </div>
        </section>
    )
}

export default Title
