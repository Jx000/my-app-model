import React, { Component } from 'react'
import { Menu } from 'antd'
import PropTypes from 'prop-types'
import { ProfileTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import nav from '../../navbar/navbar.json'


const {SubMenu, Item} = Menu;


export default class LeftMenu extends Component {

    static propTypes = {
        identityType: PropTypes.number.isRequired
    }

    render() {
        const {supplier, sellers} = nav
        return (
            <Menu mode="inline">
                {
                    this.props.identityType === 1 ? supplier.map(list => 
                        (
                            <SubMenu key={list.name} title={list.name} icon={<ProfileTwoTone twoToneColor="#5cdbd3"/>}>
                                {
                                    list.children.map(listChild => 
                                        (   
                                            <Item key={listChild.name}>
                                                <Link to={{
                                                    pathname: listChild.url,
                                                    state: { name: listChild.name }
                                                }}>
                                                    {listChild.name}
                                                </Link>
                                            </Item>
                                        )
                                    )
                                }
                            </SubMenu>  
                        )
                    ) : sellers.map(list => 
                        (
                            <SubMenu key={list.name} title={list.name} icon={<ProfileTwoTone twoToneColor="#5cdbd3"/>}>
                                {
                                    list.children.map(listChild => 
                                        (<Item key={listChild.name}>{listChild.name}</Item>)
                                    )
                                }
                            </SubMenu>  
                        )
                    )
                }
            </Menu>
        )
    }
}
