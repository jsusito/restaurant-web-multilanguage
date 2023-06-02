export function ConfirmSendForm({textConfirm, textInfo}){
    return (
        <>
            <div className="col-12 w-50">
                <h3 className="form-reserva w-100 text-center" >{textConfirm}</h3>
            </div>
            <p className="parrafo-reserva">{textInfo}</p>
        </>
    );
}