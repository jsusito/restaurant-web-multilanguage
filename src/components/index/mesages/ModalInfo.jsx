import { useState } from 'react'
export function ModalInfo(props){

    const [showModal, setShowModal] = useState(false);

    return(
     <>
      <button type="button" className="text-danger btn btn-light" onClick={()=>{setShowModal(true)}}>
         X
      </button>
      {showModal && <div className="modal fade show d-flex align-items-center justify-content-center ">
        <div className="modal-dialog">
          <div className="modal-content d-flex align-items-center justify-content-center">
            <div className="modal-header">
              <h5 className="modal-title mb-2 text-dark" id="staticBackdropLabel">{props.title}</h5>
             
            </div>
            <div className="modal-body">
              {props.bodyMsg}
            </div>
            <div className="modal-footer mt-2">
              <button type="button" className="btn btn-secondary btn-sm me-1" data-bs-dismiss="modal" onClick={()=>setShowModal(false)}>Cancelar</button>
              <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                onClick={()=>{
                  setShowModal(false);
                  props.handleOnClick()}}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
      }
     </>
    );
}