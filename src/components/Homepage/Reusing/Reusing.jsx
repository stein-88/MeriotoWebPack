import React from 'react'
import img1 from '@images/homeimg1.svg'
import img2 from '@images/homeimg2.png'
import img3 from '@images/homeimg3.png'
import schema from './data'

const Reusing = () => {
    const { titulo } = schema
    return (
        <div className="row">
            <div className="col-12">
                <h2 className="h1 mt-5 py-4 text-muted">{titulo}</h2>
                <section className="pt-4 text-center w-100">
                    <img className="img-fluid" src={img1} alt="companies" />
                    <img className="img-fluid" src={img2} alt="companies" />
                    <img className="img-fluid" src={img3} alt="companies" />
                </section>
            </div>
        </div>
    )
}

export default Reusing
