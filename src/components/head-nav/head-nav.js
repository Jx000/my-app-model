import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'

const {Item} = Breadcrumb

class HeadNav extends Component {

    render() {
        // console.log(this.props.location)
        // const {name} = this.props.location.state
        return (
            <div>
                <Breadcrumb>
                    <Item>首页</Item>
                    <Item>供应商</Item>
                    {/* <Item>{name}</Item> */}
                </Breadcrumb>

            </div>
        )
    }
}

export default withRouter(HeadNav)
