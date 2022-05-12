import React from 'react'
import defaultimg from '@images/imgindisponivel.jpg'
import Btn from '../Btn'
import s from './Cardgen.scss'

const Cardgen = ({
    theimage, thetitle, thesubtitle, botao, clickDaImg, obj,
}) => (
    <section className="w-100 my-3">
        <section className={`w-100 pb-3 ${s.card}`}>
            <section className="w-100 pb-3">
                <img
                    className={`img-fluid ${s.sizeimg} ${theimage ? s.cursorPointer : ''}`.trim()}
                    src={theimage || defaultimg}
                    alt="can be anything"
                    aria-hidden="true"
                    onClick={() => {
                        if (!clickDaImg) return null
                        return clickDaImg(theimage)
                    }}
                />
                {thetitle && <p className="h4 pt-2">{thetitle}</p>}
                {thesubtitle && <p className="h5 pt-2">{thesubtitle}</p>}
            </section>
            <section className="w-100">
                {botao && botao.length > 0
                    && botao.map((ele, i) => (
                        <span key={`btnmoderno${i + 1}`}>
                            <Btn
                                data-test="botao"
                                text={ele.text}
                                disabledbtn={ele.disabledbtn}
                                onClick={() => ele.click(obj)}
                            />
                        </span>
                    ))}
            </section>
        </section>
    </section>
)

export default Cardgen
