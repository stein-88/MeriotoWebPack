import React from 'react'
import s from './Modal.scss'

/* <button
type="button"
className="btn
btn-primary"
data-toggle="modal"
data-target="#exampleModalCenter"
>
 Launch demo modal
</button>  */
// $('#modalrefer').modal('show') mostra oq tiver esse ID ai
// $('#modalrefer').modal('hide') mostra oq tiver esse ID ai
const Modal = ({ content }) => {
    if (!content) return null
    return (
        <div className="modal fade" id="modalrefer" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className={`modal-header ${s.noneborder}`}>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-0">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
