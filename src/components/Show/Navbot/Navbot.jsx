import React from 'react'
import Btn from '@generics/Btn'
import schema from './data'

const Navbot = ({ toBottom, backAndShow }) => {
    if (!schema || !toBottom) return null
    const { register, bottom } = schema
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <section className="w-100 pb-4">
                        {register
                            && (
                                <Btn
                                    text={register}
                                    onClick={() => {
                                        if (backAndShow) return backAndShow(true)
                                        window.location.href = '/registerproduct'
                                        return null
                                    }}
                                />
                            )}
                        {bottom
                            && <Btn onClick={toBottom} text={bottom} />}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Navbot
