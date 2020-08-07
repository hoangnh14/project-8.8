import React from 'react';
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";
import routes from "../../constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {listByName} from "../../actions";


export default function Side() {
    const dispatch = useDispatch();
    return (

            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu key="sub1" title="Iphone 11">
                        <Menu.Item key="1">

                            <Link to={routes.listProductByName} onClick={() => dispatch(listByName('Iphone 11 Pro Max'))}>
                                Iphone 11 Pro Max
                            </Link>

                            </Menu.Item>
                        <Menu.Item key="2"

                        >

                            Iphone 11 Pro</Menu.Item>
                        <Menu.Item key="3">Iphone 11</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub2" title="Iphone XS">
                        <Menu.Item key="5">Iphone XS Max</Menu.Item>
                        <Menu.Item key="6">Iphone XS</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3"  title="Iphone X/XR">
                        <Menu.Item key="9">Iphone X</Menu.Item>
                        <Menu.Item key="10">Iphone XR</Menu.Item>

                    </SubMenu>
                </Menu>
            </Sider>

    );
};

