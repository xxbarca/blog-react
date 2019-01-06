import React from 'react'
import { Button, Icon } from 'antd'
import { Link, NavLink } from 'react-router-dom'

import './NavTop.scss'

class NavTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'home'
        }
    }

    render() {
        return (
            <div id='navTop'>
                <ul className='nav'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>
                            <Icon type="home" />首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/hot'>
                            <Icon type="fire" />热门
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/timeline'>
                            <Icon type="fire" />时间线
                        </NavLink>
                    </li>
                </ul>
                <div className='btn'>
                    <Button type="primary" className='login'>
                        <Icon type="login" />登陆
                    </Button>
                    <Button type="danger" className='logout'>
                        <Icon type="logout" />注册
                    </Button>
                </div>
            </div>
        );
    }
}

export default NavTop