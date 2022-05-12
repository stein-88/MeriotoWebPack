import React from 'react'
import Cardgen from '@generics/Cardgen'
import { sleep } from '@utils'
import $ from 'jquery'
import schema from './data'
import Imagezoom from './Imagezoom'
import Confirmation from './Confirmation'
import s from './EachProduct.scss'

const EachProduct = ({
 allProducts, handleContent, editINreg, deletefetch,
}) => {
    const clickImg = async (img) => {
        if (!handleContent || !img) return null
        handleContent(<Imagezoom theimage={img} />)
        await sleep(300)
        return $('#modalrefer').modal('show')
    }
    // juntar em 1 depois
    const deleteClick = async (obj) => {
        if (!handleContent || !obj) return null
        handleContent(<Confirmation deletefetch={deletefetch} id={obj.id} />)
        await sleep(300)
        return $('#modalrefer').modal('show')
    }

    const thesub = (price, amount) => {
        if (!price || !amount || !schema) return null
        const { uni } = schema
        const finalAmount = Number(amount > 0 ? amount : 0)
        const finalPrice = Number(price > 0 ? price : 0).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
        return `${finalPrice} ${uni} ${finalAmount}`
    }

    if (!schema || !handleContent) return null
    const { edit, delet, errornot } = schema
    if (!allProducts || !allProducts.length) {
 return (
        <section className={`w-100 ${s.sizing}`}>
            <h2 className="text-center py-5">{errornot}</h2>
        </section>
    )
}
    return (
        <section className={`w-100 ${s.sizing}`}>
            <div className="container">
                <div className="row">
                    {allProducts && allProducts.length > 0
                        && allProducts.map((ele, i) => {
                            if (!ele) return null
                            const finalOBJ = {
                                ...ele,
                                obj: ele,
                                thetitle: ele.theproduct,
                                thesubtitle: thesub(ele.theprice, ele.theamount),
                            }
                            return (
                                <div key={`eachproductshowlist${i + 1}`} className="col-3">
                                    <Cardgen
                                        {...finalOBJ}
                                        clickDaImg={clickImg}
                                        botao={[
                                            {
                                                text: edit,
                                                click: editINreg,
                                            },
                                            {
                                                text: delet,
                                                click: (id) => deleteClick(id, true),
                                            },
                                        ]}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default EachProduct
