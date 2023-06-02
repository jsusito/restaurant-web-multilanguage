export function GenericForm(props){

    return (
        <div className="container">    
            <div className="row justify-content-center">    
                <div className="col-auto">            
                    <form className="g-3" onSubmit={props.sendForm}>
                        <div className="row  justify-content-center">
                            <div className="col-12">
                                <h6 className="form-reserva text-center mt-2">{props.header}</h6>
                            </div>
                            <div className="col-12">
                                <h2 className="form-reserva text-center mt-2">{props.title}</h2>
                            </div>
                            
                                {props.children}

                            </div>            
                    </form>
             </div>
            </div>
        </div>
    );
}