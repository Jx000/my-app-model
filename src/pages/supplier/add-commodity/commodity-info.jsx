import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './add-commodity.less'

import { Form, Input, Button, Cascader, Select, DatePicker, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Item } = Form
const {Option} = Select

export class CommodityInfo extends Component {

    static propTypes = {
        current: PropTypes.number.isRequired 
    }

    state = {
        imgUrl: '',
        loading: false,
        initialValues: {
            identifier: 'KL001',
            name: '上衣'
        }
    }

    render() {
        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 3}
        }
        const BtnLayout = {
            wrapperCol: { offset: 2},
        }
        const options = []

        const {imgUrl, loading} = this.state
        const uploadButton = (
            <div>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        const onFinish = (values) => {
            console.log(values)
        }

        return (
            <Form initialValues={this.state.initialValues}  name="basic" {...layout} onFinish={onFinish} scrollToFirstError={true}>
                <Item required label="供应商货号" name="identifier" rules={[{required: true, message: '请输入供应商货号'}]}>
                    <Input />
                </Item>
                <Item required label="商品名称" name="name" rules={[{required: true, message: '请输入商品名称'}]}>
                    <Input />
                </Item>
                <Item required label="商品分类" rules={[{required: true, message: '请输入商品名称'}]}>
                    <Cascader options={options} placeholder="请选择分类" />
                </Item>
                <Item required label="商品分类" rules={[{required: true, message: '请输入商品名称'}]}>
                    <Select>
                        <Option value="jack">Jack</Option>
                    </Select>
                </Item>
                <Item required label="适用人群" rules={[{required: true, message: '请选择适用人群'}]}>
                    <Select>
                        <Option value="jack">Jack</Option>
                    </Select>
                </Item>
                <Item required label="标箱说明" rules={[{required: true, message: '请输入标箱说明'}]}>
                    <Input />
                </Item>
                <Item required label="商品材质" rules={[{required: true, message: '请输入商品材质'}]}>
                    <Input />
                </Item>
                <Item required label="上市年份" rules={[{required: true, message: '请选择上市年份'}]}>
                    <DatePicker placeholder="请选择年份" picker="year" />
                </Item>
                <Item required label="商品主图" rules={[{required: true, message: '请上传商品主图'}]}>
                    <Upload listType="picture-card" className="avatar-uploader" showUploadList={false} action="">
                        {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Item>
                <Item {...BtnLayout}>
                    <Button type="primary" htmlType="submit">下一步</Button>
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
