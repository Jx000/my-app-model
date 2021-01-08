import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Steps } from 'antd'

import CommodityInfo from './commodity-info'
import CommodityAttr from './commodity-attr'
import CommodityDetail from './commodity-detail'

import './add-commodity.less'

const { Step } = Steps

export class AddCommodity extends Component {

    state = {
        current: 0
    }

    render() {
        const {current} = this.state

        let StepContent
        if(current == 0){
            (StepContent = <CommodityInfo current={current}/>)
        }else if(current == 1){
            (StepContent = <CommodityAttr />)
        }else{
            (StepContent = <CommodityDetail />)
        }
        return (
            <div className="add-commodity">
                <Steps current={current}>
                    <Step title="第一步" />
                    <Step title="第二步" />
                    <Step title="第三步" />
                </Steps>
                <div>
                    {StepContent}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommodity)
