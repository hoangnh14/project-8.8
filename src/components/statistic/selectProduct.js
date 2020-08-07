import React, {useEffect, useState} from 'react';
import apiUrls, {apiUrl} from "../../constants/api";
import axios from "axios";
import Select from "antd/es/select";
import {Option} from "antd";
import {useDispatch} from "react-redux";
import statistic from "../../reducers/statistic";
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


    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select phone"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                defaultValue={productName}


                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {products.map( product =>
                    <Option value={product.name}>{product.name} {onChange(product.name)}</Option>

                )}


            </Select>
        </div>
    )
};

