export function Alert(props){

    return(
        <div className="alert alert-warning alert-dismissible fade show msg-alert d-flex align-items-center justify-content-center" role="alert">
        <p className="fw-bold">{props.msg}</p>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => props.handleClick}
        ></button>
      </div>
    );
}