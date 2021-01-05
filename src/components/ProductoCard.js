import React from 'react'

export const ProductoCard = ({ img, titulo, precio }) => {

    return (
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" alt='' src={ img } title={ titulo } />
                <div className="card-body">
                    <h5 className="card-title">{ titulo }</h5>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{ precio }</small>
                </div>
            </div>
        </div>
    )
}


    
        
        
    