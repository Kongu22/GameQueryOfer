import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Shop() {
    const params = useParams();
    const [shopAr, setShopAr] = useState([]);

    useEffect(() => {
        const doApi = async () => {
            const url = "http://fs1.co.il/bus/shop.php";
            const resp = await fetch(url);
            const data = await resp.json();
            console.table(data);
            const filter_ar = data.filter(item => item.cat === params["catname"]);
            setShopAr(filter_ar);
        };

        doApi();
    }, [params]); // doApi не нужно добавлять сюда, т.к. функция определена внутри useEffect

    return (
        <div className='container'>
            <nav >
                <Link to="/shop/food" className="text-dark fw-bold me-3">Food</Link>
                <Link to="/shop/clothing" className="text-dark fw-bold me-3">Clothing</Link>
                <Link to="/shop/animals" className="text-dark fw-bold">Animals</Link>
            </nav>    
            <h2>Shop: {params["catname"]}</h2>
            <ul>
                {shopAr.map(item => {
                    return (
                        <li key={item.id}>{item.name} | {item.price} NIS</li>
                    );
                })}
            </ul>
        </div>
    );
}
