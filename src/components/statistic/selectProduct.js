import React, {useEffect, useState} from 'react';
import axios from "axios";
import Select from "antd/es/select";
import {Option} from "antd";
import {useDispatch} from "react-redux";
import {statisticByName} from "../../actions";



export default function SelectProduct() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const productName = 'Iphone XR'

    useEffect(() => {
        getList()

    },[])
    console.log(products)
    const getList = () => {
        const url = `https://5f1fcb4dfba6d400169d4393.mockapi.io/productname`;
        axios.get(url)
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }
    const { Option } = Select;

    function onChange(value) {

        dispatch(statisticByName(value))
    }



    return (
        <div>
            <Select defaultValue={productName} style={{ width: 180 }} onChange={onChange}>
                {products.map( product =>
                    <Option value={product.name}>{product.name} {onChange(product.name)}</Option>

                )}

            </Select>

        </div>
    )
};

