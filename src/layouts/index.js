import React from 'react';
import 'antd/dist/antd.css';
import './index.scss'
import {Layout} from 'antd';
import Head from "./header";
import Side from "./sider";
import { renderRoutes } from 'react-router-config';




const { Header, Content, Footer } = Layout;

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state= {index : 1};
    }
    render() {
        const {route}= this.props;
        return (

            <Layout>
                <Header className="header">
                    <Head />
                </Header>
                <Content style={{ padding: '40px' }}>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

                        <Content style={{ padding: '0 60px', height: "auto" }}>
                            {renderRoutes(route.routes)}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center'} }>Created by ©Hoang NH</Footer>
            </Layout>
        );
    }
}

export default Index;