import React from 'react'
import GenInput from '@generics/GenInput'
import { readyimg, handleAll } from '@utils'
import schema from './data'
import s from './Looppart.scss'

const Looppart = ({
    backdoAll,
    getimg,
    allValues,
    removeimg,
}) => {
    const { theimage } = allValues || {}
    if (!schema) return null
    const {
        delet, upimg, fileinp, inp,
    } = schema
    const {
        type, place, accept, refer,
    } = fileinp

    return (
        <section className="w-100">
            {inp && inp.length > 0
                && inp.map((ele, i) => (
                    <div key={`regproducasdsatinp${i + 1}`} className="row py-4">
                        <div className="col-6">
                            <section className="w-100 py-2">
                                <p className={s.textinp}>{ele.place}</p>
                            </section>
                        </div>
                        <div className="col-6">
                            <GenInput
                                type={ele.type}
                                value={allValues[ele.refer] || ''}
                                onChange={(e) => handleAll(e, backdoAll)}
                                id={ele.refer}
                                customClass={`${s.theinpstyle} ${(ele.refer === 'theamount' || ele.refer === 'theprice') && allValues[ele.refer] < 1 ? s.someerro : ''}`}
                            />
                        </div>
                    </div>
                ))}
            <div className="row py-4">
                <div className="col-6">
                    <p className={s.textinp}>{place}</p>
                </div>
                <div className="col-6">
                    {!theimage
                        ? (
                            <section className="w-100">
                                <label className={`${s.btnstyle} ${s.likeinp} ${s.rightto}`} htmlFor={refer}>{upimg}</label>
                                <GenInput
                                    id={refer}
                                    type={type}
                                    onChange={(e) => readyimg(e.target.files[0], getimg)}
                                    accept={accept}
                                    customClass={s.theinpstyle}
                                />
                            </section>
                        )
                        : (
                            <section
                                onClick={removeimg}
                                aria-hidden="true"
                                className={`${s.btnstyle} w-100 ${s.likeinp} ${s.rightto}`}
                            >
                                <span>{delet}</span>
                            </section>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Looppart
