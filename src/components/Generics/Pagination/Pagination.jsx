import React from 'react'
// import { v4 as uuidv4 } from 'uuid'
import s from './Pagination.scss'

const Pagination = ({
    count, perPage, setSelectPage, selectedPage, pageToShow,
}) => {
    const decreIncre = (param, referPage) => {
        if (!param || !referPage) return null
        const finalValue = param === 'soma' ? selectedPage + 1 : selectedPage - 1
        if (finalValue < 1 || finalValue > referPage || !setSelectPage) return null
        return setSelectPage(finalValue)
    }

    const finalArray = (pagination, totalLength, defaultPage) => {
        if (
            !pagination
            || !pagination.length
            || !totalLength
            || !defaultPage
            || !selectedPage
        ) return null
        const halfPage = defaultPage / 2
        let startIndex = 0
        let endIndex = defaultPage
        const higherORhalf = selectedPage >= totalLength - halfPage
        if (higherORhalf) {
            startIndex = totalLength - defaultPage
            endIndex = totalLength
        }
        if (!(higherORhalf) && selectedPage > halfPage) {
            startIndex = Math.floor(selectedPage - halfPage)
            endIndex = Math.floor(selectedPage + halfPage)
        }
        return pagination.slice(startIndex, endIndex)
    }

    if (!count || !perPage || !setSelectPage) return null
    const totalPage = Math.ceil(count / perPage)
    let defaultPage = 6
    if (pageToShow && pageToShow > totalPage) defaultPage = totalPage
    if (pageToShow && pageToShow < totalPage) defaultPage = pageToShow
    let arrayFinal = Array(totalPage).fill('x').map((_, ind) => ind + 1)
    const totalLength = arrayFinal.length
    if (totalLength > defaultPage) arrayFinal = finalArray(arrayFinal, totalLength, defaultPage)
    if (!arrayFinal || !arrayFinal.length) return null
    return (
        <section className="w-100 text-center">
            <ul className="pagination">
                <li
                    onClick={() => decreIncre('sub', totalLength)}
                    aria-hidden="true"
                    className={`page-item page-link ${s.cursorPointer}`}
                >
                    {'<'}
                </li>
                <li
                    onClick={() => setSelectPage(1)}
                    aria-hidden="true"
                    className={`page-item page-link ${s.cursorPointer}`}
                >
                    {'<<'}
                </li>
                {arrayFinal.map((ele, ind) => (
                    <li
                        key={`paginationkey${ind + 1}`}
                        aria-hidden="true"
                        onClick={() => setSelectPage(ele)}
                        className={`page-item page-link ${s.cursorPointer} ${selectedPage === ele ? s.active : ''}`}
                    >
                        {ele}
                    </li>
                ))}
                <li
                    onClick={() => setSelectPage(totalLength)}
                    aria-hidden="true"
                    className={`page-item page-link ${s.cursorPointer}`}
                >
                    {'>>'}
                </li>
                <li
                    onClick={() => decreIncre('soma', totalLength)}
                    aria-hidden="true"
                    className={`page-item page-link ${s.cursorPointer}`}
                >
                    {'>'}
                </li>
            </ul>
        </section>
    )
}

export default Pagination
