import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Cascader, Select, Button, Table, Space, Image } from 'antd';

import SearchCondition from '../../../components/search-condition/search-condition';

import { reqCommodityList } from '../../../redux/action'

const { Option } = Select;
const { Column } = Table;
class SupplierCommodityList extends Component {

    state = {
        searchParam: {
            keyword: '',
            supplierKeyword: '',
            commodityBrandId: '',
            commodityClassificationId: [],
            status: ''
        },
        dataSource: [],
        optionsSort: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
              }
            ]
        }],
        optionsBrand: [{
            key: 0,
            value: '衣服'
        },{
            key: 1,
            value: '裤子'
        }],
        optionsStatus: [{
            key: 0,
            value: '审核中'
        },{
            key: 1,
            value: '审核通过'
        },{
            key: 2,
            value: '审核未通过'
        },{
            key: 3,
            value: '上架'
        },{
            key: 4,
            value: '下架'
        }]
    }

    handleChange = (name, val) => {
        let state = {...this.state}
        state['searchParam'][name] = val.target.value
        this.setState({
            ...state
        })
    }

    handleChange1 = (value) => {
        console.log(value)
    }

    handleChange2 = (val) => {
        console.log(val)
    }

    handleSearch = () => {
        this.props.reqCommodityList(this.state.searchParam)
    }

    handleClick = (text) => {
        console.log(text)
    }

    componentDidMount(){
        this.props.reqCommodityList()
    }

    render() {
        const { optionsSort, optionsBrand, optionsStatus } = this.state
        const { keyword } = this.state.searchParam
        let dataSource = this.state.dataSource
        dataSource = this.props.commodityListData
        return (
            <div>
                <SearchCondition>
                    <Input placeholder="商品货号/名称" value={keyword} allowClear onChange={(keyword) => {this.handleChange('keyword', keyword)}}/>
                    <Input placeholder="供应商" allowClear/>
                    <Cascader options={optionsSort} placeholder="商品分类" allowClear onChange={this.handleChange1}/>
                    <Select placeholder="商品品牌" allowClear onChange={this.handleChange2}>
                        {
                            optionsBrand.map(item => 
                                (<Option key={item.key} value={item.value}>{item.value}</Option>)
                            )
                        }
                    </Select>
                    <Select placeholder="商品状态" allowClear>
                        {
                            optionsStatus.map(item => 
                                (<Option key={item.key} value={item.value}>{item.value}</Option>)
                            )
                        }
                    </Select>
                    <Button type="primary" onClick={this.handleSearch}>搜索</Button>
                </SearchCondition>
                <Table dataSource={dataSource} rowKey="id" bordered>
                    <Column title="商品货号" dataIndex="identifier" key="商品货号" align="center"/>
                    <Column title="商品图片" dataIndex="defaultImageUrl" key="商品图片" align="center" render={(defaultImageUrl) => (
                        <Image width={80} src={defaultImageUrl}/>
                    )}/>
                    <Column title="供应商货号" dataIndex="supplierCommodityIdentifier" key="供应商货号" align="center"/>
                    <Column title="商品名称" dataIndex="name" key="商品名称" align="center"/>
                    <Column title="供应商" dataIndex="supplierName" key="供应商" align="center"/>
                    <Column title="销量" dataIndex="salesQuantity" key="销量" align="center"/>
                    <Column title="操作" key="操作" dataIndex="status" align="center" render={(text, record) => (
                        <Space>
                            {
                                text === 3 ? (<Button type="primary" onClick={() => this.handleClick(text)}>下架</Button>) : text === 4 ? (<Button type="primary" onClick={() => this.handleClick(text)}>上架</Button>) : null
                            }
                        </Space>
                    )}/>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    commodityListData: state.commodityListData
})

const mapDispatchToProps = {
    reqCommodityList
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierCommodityList)
