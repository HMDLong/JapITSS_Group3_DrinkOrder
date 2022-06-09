import { useState, useEffect } from 'react';

const STORAGE_KEY = 'drink-order';

function useStorage() {
    const [orders, setOrders] = useState([]);

    /* 副作用を使う */
    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        } else {
            setOrders(JSON.parse(data));
        }
    }, []);



    const putOrders = orders => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
        setOrders(orders);
    };

    const clearOrders = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        setOrders([]);
    };

    return [orders, putOrders, clearOrders];
}

export default useStorage;