import React from "react";

function OrderItems({item, handleRemove, onAdd, onReduce}){

    return(
        <tr key={item.key}>
            <td>
                <figure className="image is-square">
                <img src={item.image_src}
                     alt={item.name}
                     width='50' height='50'
                ></img>
                </figure>
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <button className="button is-small is-responsive is-primary" onClick={onAdd}>
                    <span className="icon">
                        <i className="fa-solid fa-plus"></i>
                    </span>
                </button>
                <span className='m-small'>{" " + item.quantity + " "}</span>
                <button className="button is-small is-responsive is-primary" onClick={onReduce}>
                    <span className="icon">
                        <i className="fa-solid fa-minus"></i>
                    </span>
                </button>
            </td>
            <td>{item.price * item.quantity}</td>
            <td><button className="button is-danger is-outlined is-fullwidth"
                        onClick={()=>{handleRemove(item)}}>
                 <span className="icon">
                     <i className="fa-solid fa-trash-can"></i>
                 </span>
            </button></td>
        </tr>
    );
}

export default OrderItems;