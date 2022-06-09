import React from "react";


function OrderItems({item, handleRemove}){
    return(
        <div className="panel-block" key={item.key}>
            <div className="panel">
                <div className="panel-block">{item.name}</div>
                <div className="panel-block">{item.quantity}</div>
                <button className="button is-link is-outlined is-fullwidth" onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default OrderItems;