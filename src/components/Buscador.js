import React from 'react';

const Buscador = () => {
    return(
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control-lg" placeholder="Busca tu imagen, Ej.: Futbol" />
                </div>
            </div>
        </form>
    )
}

export default Buscador;