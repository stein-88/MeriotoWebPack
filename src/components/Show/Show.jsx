import React, { useState, useEffect } from 'react'
import SpinnerGen from '@generics/SpinnerGen'
import {
 doingAll, totop, tobottom, sleep,
} from '@utils'
import { REACT_APP_API_URL } from '@constant'
import $ from 'jquery'
import EachProduct from './EachProduct'
import Navbot from './Navbot'
import Navfooter from './Navfooter'
import Result from '../Result'
import RegProduct from '../RegProduct'
import schema from './data'

const Show = ({ backAndShow, handleContent, receivingOBJ }) => {
    const [isSucess, setIsSucess] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState(false)
    const [allProducts, setAllProducts] = useState(undefined)
    const [edition, setEdition] = useState(false)

    const editINreg = async (obj) => {
        const { id } = obj || {}
        if (receivingOBJ) return receivingOBJ(obj)
        window.location.href = `/editproduct?productid=${id}`
        return setEdition(true)
    }

    const fLoad = async () => {
        const goingWork = await doingAll(
            `${REACT_APP_API_URL}/products`,
            'get',
)
        if (!goingWork) {
            setIsLoading(false)
            setFeedback(true)
            return setIsSucess(false)
        }
        setIsLoading(false)
        setFeedback(false)
        setAllProducts(goingWork)
        return totop()
    }

    const deletefetch = async (id) => {
        if (!schema || !id) return null
        const goingWork = await doingAll(
            `${REACT_APP_API_URL}/products/${id}`,
            'delete',
)
        if (!goingWork) {
            const { error4 } = schema
            handleContent(
                <section className="w-100 text-white text-center py-5 bg-dark">
                    <p className="h1">{error4}</p>
                </section>,
            )
            await sleep(300)
            return $('#modalrefer').modal('show')
        }
        return window.location.reload()
    }

    useEffect(() => {
        fLoad()
        console.log('esse é o show quando nasce')
    }, [])

    if (!schema || !handleContent) return null
    if (isLoading) return <SpinnerGen resizing />
    if (feedback) return <Result isSucess={isSucess} />
    if (edition) return <RegProduct isEdit />
    return (
        <section className="w-100 bg-dark py-5 text-white">
            <Navbot toBottom={tobottom} backAndShow={backAndShow} />
            <EachProduct
                allProducts={allProducts}
                handleContent={handleContent}
                deletefetch={deletefetch}
                editINreg={editINreg}
            />
            <Navfooter toTop={totop} />
        </section>
    )
}

export default Show
