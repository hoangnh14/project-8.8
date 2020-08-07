import React, {useState, useEffect} from 'react';
import {Row, Col, Pagination} from 'antd';
import axios from 'axios';
import './style.scss'
import {Card} from 'antd';
import { Modal } from 'antd';
import {useSelector} from "react-redux";
import apiUrls from "../../constants/api";
import {apiUrl} from "../../constants/api";



export default function Index() {
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [productsDetail, setProductsDetail] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [name, setName] = useState('Iphone 11 Pro Max')

    const nameProduct = useSelector(state => state.listProduct.nameProduct)

    console.log('AAAA',name)
    useEffect(() => {
        setName(nameProduct)
    }, [nameProduct])

    useEffect(() => {
        getList(name)

    }, [currentPage, pageSize, name])


    const getList = (name) => {
        const api = apiUrl+apiUrls.getList;
        const url = api+`?page=${currentPage}&limit=${pageSize}&name=${name}`;
        axios.get(url)
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }

    const getDetail = (pid) => {
        const url = `https://5f1fcb4dfba6d400169d4393.mockapi.io/products?pid=${pid}`;
        axios.get(url)
            .then(res => {
                setProductsDetail(res.data);
            })
            .catch(error => console.log(error));
    }

    const showModal = (pid) => {
        setVisible(true);
        getDetail(pid);
        console.log(visible);
    };

    const handleCancel = () => {
        setVisible(false);
        getList(name);

    };

return (
        <div className="product">
            <Row gutter={[32, 32]}>
                {products.map(product =>
                    <Col span={6}>
                        <Card bordered={false}  onClick={() => {
                            showModal(product.pid)
                        }}>
                            <img src={product.image}/>
                            <br/>

                            <p

                            >{product.name}-{product.capacity}GB</p>

                            <p className="highlight">Price: {product.price}$</p>
                        </Card>

                    </Col>
                )}


            </Row>
            <Pagination
                style={{float: 'right'}}
                defaultCurrent={1} total={21}
                pageSize={8}
                onChange={(page, pageSize) => {
                    setCurrentPage(page);
                    setPageSize(pageSize);

                }}


            />



            <Modal
                title="Basic Modal"
                visible={visible}
                onCancel={handleCancel}
            >
                {productsDetail.map(productDetail =>
                    <div>
                        <img src={productDetail.image}/>
                        <p>{productDetail.name}</p>
                    </div>
                )}
            </Modal>

        </div>
    );
}