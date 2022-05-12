import React from 'react'
import schema from './data'
import s from './Header.scss'

const Header = () => {
    const { botao, titulo } = schema
    const { link, text } = botao
    return (
        <header>
            <section className={`${s.bgblack} w-100 py-4 mb-5`}>
                <section className={s.imgheader} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-white">
                            {titulo && <h2 className="py-4 h1">{titulo}</h2>}
                            {link && text && (
                                <a className={s.botaoreg} href={link}>
                                    <strong>{text}</strong>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header
