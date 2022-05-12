import React, { useState } from 'react'
import Btn from '@generics/Btn'
import SpinnerGen from '@generics/SpinnerGen'
import { sleep } from '@utils'
import $ from 'jquery'
import schema from './data'

const Confirmation = ({ deletefetch, id }) => {
    const [isLoading, setIsLoading] = useState(false)

    const isLoad = () => setIsLoading(true)

    if (!schema) return null
    const { yes, no, confirm } = schema
    if (isLoading) return <SpinnerGen resize />
    return (
        <section
            className="w-100 p-5 bg-dark text-center text-white"
        >
            <p className="h4 py-3">{confirm}</p>
            <Btn
                text={yes}
                onClick={async () => {
                    isLoad()
                    await sleep(300)
                    return deletefetch(id)
                }}
            />
            <Btn onClick={() => $('#modalrefer').modal('hide')} text={no} />
        </section>
    )
}

export default Confirmation
