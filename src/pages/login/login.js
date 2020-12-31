import React, { Component } from 'react';
import { Radio, Input } from 'antd'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import './login.less'
import image from '../../assets/images/login.png'

import { reqLogin } from '../../redux/action'

class Login extends Component {

    state = {
        phone: '15957186843',
        password: '123456',
        identityType: 1
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val.target.value
        })  
    }

    handleClick = () => {
        this.props.reqLogin(this.state)
    }

    render() {
        const {phone, password, identityType} = this.state
        const { id } = this.props.userMsg
        if(id){
            return <Redirect to = '/'></Redirect>
        }
        return (
            <div id="login">
                <div className="container">
                    <div className="left">
                        <img src={image} alt=""/>
                    </div>
                    <div className="right">
                        <p>库联注册/登录</p>
                        <div className="phone">
                            <span>用 户</span>
                            <input type="text" value={phone} onChange={val => {this.handleChange('phone', val)}}/>
                        </div>
                        <div className="password">
                            <span>密 码</span>
                            <input type="password" value={password} onChange={val => {this.handleChange('password', val)}}/>
                        </div>
                        <div className="identity">
                            <span className="indentitySpan">身 份</span>
                            <Radio.Group value={identityType} onChange={val => {this.handleChange('identityType', val)}}>
                                <Radio value={1}>供应商</Radio>
                                <Radio value={2}>销售商</Radio>
                            </Radio.Group>
                        </div>
                        <div className="submit" onClick={this.handleClick}>
                            <span>注册登录</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userMsg: state.userMsg
})

const mapDispatchToProps = {
    reqLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
