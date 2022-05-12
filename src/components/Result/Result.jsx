import React, { useState, useEffect } from 'react'
import Btn from '@generics/Btn'
import { getURLParameters } from '@utils'
import schema from './data'
import s from './Result.scss'

const Result = ({
    isSucess, backAndShow, fetchsubmit, allValues,
}) => {
    const [tryplease, setTryplease] = useState(false)

    const istry = () => {
        const { productid } = getURLParameters()
        if (productid && !isSucess) return setTryplease(true)
        return null
    }

    const reTryReg = () => {
        if (!allValues.theprice) {
            const { productid } = getURLParameters()
            window.location.href = `/editproduct?productid=${productid}`
            return null
        }
        return fetchsubmit()
    }

    useEffect(() => {
        istry()
    }, [])

    if (!schema) return null
    const {
        regp, lisp, error, sucess, editp,
    } = schema
    if (!regp || !lisp || !error || !sucess) return null
    return (
        <section className={`w-100 py-5 bg-dark text-center ${s.scrennsize}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Btn
                            text={regp}
                            onClick={() => {
                                if (backAndShow) return backAndShow(true)
                                window.location.href = '/registerproduct'
                                return null
                            }}
                        />
                        <Btn
                            text={lisp}
                            onClick={() => {
                                if (backAndShow) return backAndShow()
                                window.location.href = '/showproduct'
                                return null
                            }}
                        />
                        {!isSucess && tryplease
                            && (
                                <Btn
                                    onClick={reTryReg}
                                    text={editp}
                                />
                            )}
                        <section className="h1 w-100 py-5 text-white text-center">
                            <p>{isSucess ? sucess : error}</p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Result
