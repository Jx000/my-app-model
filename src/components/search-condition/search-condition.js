import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Space } from 'antd'

import './search-condition.less'

export class SearchCondition extends Component {
    render() {
        return (
            <div className="search-condition">
                <Space>
                    {this.props.children}
                </Space>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCondition)
