import React from 'react'
import load from '@images/loading.svg'
import s from './SpinnerGen.scss'

const SpinnerGen = ({ resizing, customClass }) => (
        <section className={`w-100 text-center ${resizing ? s.sizing : 'py-5'}`}>
            <section className={`${`w-100 ${customClass || ''}`} ${resizing ? s.vertiCenter : ''}`}>
                <img src={load} alt="wait to load" />
            </section>
        </section>
    )

export default SpinnerGen
