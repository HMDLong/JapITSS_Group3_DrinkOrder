import React from "react";

function OrderItems({item, handleRemove, onSum}){
    onSum(item);

    return(
        <tr key={item.key}>
            <td>
                <figure className="image is-32x32 is-square">
                <img src={item.image_src}
                     alt={item.name}
                     width='100' height='100'
                ></img>
                </figure>
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
            <td><button className="button is-danger is-outlined is-fullwidth"
                        onClick={handleRemove}>
                 <span className="icon">
                     <i className="fa-solid fa-trash-can"></i>
                 </span>
            </button></td>
        </tr>
    );
}

export default OrderItems;