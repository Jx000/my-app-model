import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { Form, Input, Button,  } from 'antd'

const { Item } = Form

export class CommodityInfo extends Component {

    static propTypes = {
        current: PropTypes.number.isRequired 
    }

    render() {
        return (
            <Form name="basic">
                <Item label="供应商货号">
                    <Input />
                </Item>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommodityInfo)
