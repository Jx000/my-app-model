
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'

import './main.less'

import LeftMenu from '../../components/left-menu/left-menu'
import HeadNav from '../../components/head-nav/head-nav';
import SupplierOrderList from '../supplier/order/list';
import SupplierCommodityList from '../supplier/commodity/list';
import AddCommodity from '../supplier/add-commodity/add-commodity';


const { Header, Sider, Content } = Layout;

class Main extends Component {
    render() {
        const { identityType } = this.props.state
        return (
            <Layout>
                <Sider className="left-menu" theme="light">
                    <LeftMenu identityType={identityType}/>
                </Sider>
                <Layout>
                    <Header className="head-nav">
                        <HeadNav></HeadNav>
                    </Header>
                    <Content className="container">
                        <Switch>
                            <Route path="/supplier/order/list" component={SupplierOrderList}></Route>
                            <Route path="/supplier/commodity/list" component={SupplierCommodityList}></Route>
                            <Route path="/supplier/add-commodity/add-commodity/:id" component={AddCommodity}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.userMsg
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
