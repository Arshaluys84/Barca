import { Col, Menu, Row, Layout, Button } from 'antd';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    const { Header } = Layout;
    return (
        <Header className="header">
            <div className="logo" />
            <Row>
                <Col span={8}><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/Users" > BarcaLovers </Link>
                    </Menu.Item>
                </Menu></Col>
                <Col span={4}><div className={s.headerImg}>
                    <img src="https://s1.1zoom.me/big0/980/Logo_Emblem_Footbal_FC_Barcelona_Barca_Emblem_589404_1280x800.jpg" alt="Barca" />
                </div>
                </Col>
                <Col span={12}>
                    <div className={s.loginBlock}>
                        {props.isAuth ?
                            <div>    {props.login}<Button onClick={props.logout}>Log out</Button>
                            </div>
                            : <NavLink to="/login">Login</NavLink>}
                    </div>
                </Col>
            </Row>
        </Header>
    )
}
export default Header;
