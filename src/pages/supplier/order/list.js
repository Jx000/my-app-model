import React, { Component } from 'react'
import { connect } from 'react-redux'

class SupplierOrderList extends Component {
    render() {
        return (
            <div>
                订单列表
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierOrderList)
