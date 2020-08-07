import React, {useEffect, useState} from 'react';
import apiUrls, {apiUrl} from "../../constants/api";
import axios from "axios";
import {useSelector} from "react-redux";

export default function ListAll() {

    const [products, setProducts] = useState([]);
    const name = useSelector(state => state.listProduct.nameProduct)

    useEffect(() => {
        getList(name)

    }, [])

    const getList = (name) => {

        const api = apiUrl+apiUrls.getList;
        const url = api+`?name=${name}`;
        axios.get(url)
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            abcasd
        </div>
    )
};

