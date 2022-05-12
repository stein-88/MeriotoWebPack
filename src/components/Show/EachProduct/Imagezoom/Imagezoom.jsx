import React from 'react'
import defaultimg from '@images/imgindisponivel.jpg'

const Imagezoom = ({ theimage }) => (
    <div className="container">
        <div className="row">
            <div className="col-12 p-0">
                <section className="text-center bg-dark">
                    <img className="w-100 img-fluid" src={theimage || defaultimg} alt="can be anything of your choice" />
                </section>
            </div>
        </div>
    </div>
)

export default Imagezoom
