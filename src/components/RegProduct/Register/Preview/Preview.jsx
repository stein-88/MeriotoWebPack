import React from 'react'
import Btn from '@generics/Btn'
import Cardgen from '@generics/Cardgen'
import { validChar } from '@utils'
import schema from './data'

const Preview = ({
    allValues,
    fetchsubmit,
    backAndShow,
    resetAllstates,
}) => {
    const {
        theamount, theprice, theimage, theproduct,
    } = allValues || {}
    if (!schema) return null
    const {
        sub, check, reset, uni,
    } = schema
    const disabledbtn = !(theamount > 0 && validChar(theproduct) && theprice > 0)

    return (
        <section className="bg-dark py-4 w-100">
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                    <Cardgen
                        thetitle={theproduct}
                        theimage={theimage}
                        thesubtitle={`${Number(theprice > 0 ? theprice : 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} ${uni} ${theamount > 0 ? Number(theamount) : 0}`}
                    />
                </div>
                <div className="col-3" />
            </div>
            <section className="w-100 text-center py-5">
                {sub
                    && (
                        <Btn
                            onClick={() => fetchsubmit()}
                            text={sub}
                            disabledbtn={disabledbtn}
                        />
                    )}
                {check
                    && <Btn onClick={() => backAndShow()} text={check} />}
                {reset
                    && <Btn onClick={resetAllstates} text={reset} />}
            </section>
        </section>
    )
}
// precisa de loop
export default Preview
