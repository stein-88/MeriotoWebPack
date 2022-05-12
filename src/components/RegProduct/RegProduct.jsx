import React, { useState, useEffect } from 'react'
import SpinnerGen from '@generics/SpinnerGen'
import { sleep, doingAll, getURLParameters } from '@utils'
import { REACT_APP_API_URL } from '@constant'
import Title from './Title'
import Register from './Register'
import Result from '../Result'
import Show from '../Show'

const RegProduct = ({ handleContent, isEdit }) => {
    const [allValues, setAllvalues] = useState({
        theamount: undefined,
        theprice: undefined,
        theproduct: undefined,
        theimage: undefined,
    })
    const [idserver, setTdserver] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState(false)
    const [isSucess, setIsSucess] = useState(false)
    const [pagetwo, setPagetwo] = useState(false)

    const receivingOBJ = async (obj) => {
        setIsLoading(true)
        const {
            id, theamount, theprice, theproduct, theimage,
        } = obj || {}
        window.history.pushState(null, null, `/editproduct?productid=${id}`)
        await sleep(500)
        setTdserver(id)
        setAllvalues({
            theamount,
            theprice,
            theproduct,
            theimage,
        })
        setPagetwo(false)
        return setIsLoading(false)
    }

    const setAgain = async (productid) => {
        if (!productid) return null
        const goingWork = await doingAll(`${REACT_APP_API_URL}/products/${productid}`, 'get')
        await sleep(500)
        if (!goingWork || !goingWork.id) {
            setIsLoading(false)
            setFeedback(true)
            return setIsSucess(false)
        }
        const {
            theimage, theamount, theprice, theproduct, id,
        } = goingWork
        setAllvalues({
            theamount,
            theprice,
            theproduct,
            theimage,
        })
        setTdserver(id)
        return setIsLoading(false)
    }

    useEffect(() => {
        if (isEdit) {
            const { productid } = getURLParameters()
            return setAgain(productid)
        }
        return setIsLoading(false)
    }, [])

    const fetchsubmit = async () => {
        setIsLoading(true)
        await sleep(500)
        const goingWork = await doingAll(
            `${REACT_APP_API_URL}/products/${idserver || ''}`,
            `${idserver ? 'put' : 'post'}`,
            allValues,
        )
        if (!goingWork || !goingWork.id) {
            setIsLoading(false)
            setFeedback(true)
            return setIsSucess(false)
        }
        setIsLoading(false)
        setFeedback(true)
        return setIsSucess(true)
    }

    const resetAllstates = () => setAllvalues({
        theamount: undefined,
        theprice: undefined,
        theproduct: undefined,
        theimage: undefined,
    })

    const removeimg = () => setAllvalues({
        ...allValues,
        theimage: undefined,
    })

    const getimg = (img) => {
        if (!img) return null
        return setAllvalues({
            ...allValues,
            theimage: img,
        })
    }

    const backdoAll = (obj) => {
        if (!obj) return null
        return setAllvalues({
            ...allValues,
            ...obj,
        })
    }

    const backAndShow = async (reg) => {
        setIsLoading(true)
        await sleep(1000)
        window.history.pushState(null, null, `${reg ? '/registerproduct' : '/showproduct'}`)
        setAllvalues({
            theamount: undefined,
            theprice: undefined,
            theproduct: undefined,
            theimage: undefined,
        })
        setPagetwo(!reg)
        setFeedback(false)
        setIsSucess(false)
        return setIsLoading(false)
    }

    if (isLoading) return <SpinnerGen resizing />
    if (pagetwo) {
        return (
            <Show
                receivingOBJ={receivingOBJ}
                handleContent={handleContent}
                backAndShow={backAndShow}
            />
        )
    }
    if (feedback) {
        return (
            <Result
                isSucess={isSucess}
                fetchsubmit={fetchsubmit}
                backAndShow={backAndShow}
                allValues={allValues}
            />
        )
    }
    return (
        <section className="w-100 text-center">
            <Title idserver={idserver} />
            <Register
                allValues={allValues}
                backdoAll={backdoAll}
                getimg={getimg}
                removeimg={removeimg}
                fetchsubmit={fetchsubmit}
                backAndShow={backAndShow}
                resetAllstates={resetAllstates}
            />
        </section>
    )
}

export default RegProduct
