import React, { Component } from 'react'
import { connect } from 'react-redux'

class SupplierCommodityList extends Component {
    render() {
        return (
            <div>
                商品列表
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierCommodityList)
