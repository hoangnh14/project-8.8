import React, {useEffect, useState} from 'react';
import {Menu} from "antd";
import "./style.scss"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import routes from "../../constants/routes";
import {listByName} from "../../actions";
import SubMenu from "antd/es/menu/SubMenu";
import axios from "axios";

export default function Head() {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getList()
    }, [])
    const getList = () => {


        const url = `https://5f1fcb4dfba6d400169d4393.mockapi.io/productname`;
        axios.get(url)
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }


    return (
        <div className="head">
            <div className="logo" style={{backgroundColor: '#001529'}}/>


            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>

                <SubMenu title="Iphone">
                    {products.map(product =>
                        <Menu.Item key={product.id}
                        >
                            <Link to={`${routes.listProductByName}/${product.id}`} onClick={() => dispatch(listByName(`${product.name}`))}>
                                {product.name}
                            </Link>
                        </Menu.Item>
                    )}



                </SubMenu>


                <SubMenu title="iPad"></SubMenu>
                <SubMenu title="Macbook"></SubMenu>
                <SubMenu title="Watch"></SubMenu>
                <SubMenu title="TV"></SubMenu>
                <SubMenu title="Music"></SubMenu>
                <Menu.Item key="2">
                    <Link to={routes.statistic}>
                        Statistic
                    </Link>
                </Menu.Item>


            </Menu>
        </div>
    );
};

