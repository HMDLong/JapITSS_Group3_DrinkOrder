import React from "react";

function Sale({total}) {
    const sales = [
        {price: 1500, rate: 0.05},
        {price: 2500, rate: 0.1},
        {price: 4000, rate: 0.2}
    ];
    let sale;
    if (total >= sales[0].price && total < sales[1].price)
        sale = sales.at(0);
    else if (total >= sales[1].price && total < sales[2].price)
        sale = sales.at(1);
    else if (total >= sales[2].price)
        sale = sales.at(2);
    else return;

        return (
            <tfoot>
            <tr>
                <td colSpan='4' className='is-size-6'>合計は{sale.price}円以上ので、{sale.rate*100}%割引</td>
                <td>{-total*sale.rate}</td>
                <td></td>
            </tr>
            <tr>
                <th colSpan='4'>支払い</th>
                <td>{total-total*sale.rate}</td>
                <td></td>
            </tr>
            </tfoot>


    )
}

export default Sale;