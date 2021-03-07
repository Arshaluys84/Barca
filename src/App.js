import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
//import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import store from './redux/redux-store'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import React from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader';
import { WithSuspense } from './hoc/withSuspense';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Layout>

        <HeaderContainer />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/Profile" > Profile </Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/News" > News </Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/Login" > Login </Link></Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Menu">
                  <Menu.Item key="1"><div > <Link to="/Profile" > Profile </Link> </div></Menu.Item>
                  <Menu.Item key="2"><div ><Link to="/Dialogs" > Messages </Link> </div></Menu.Item>
                  <Menu.Item key="3"><div > <Link to="/Users" > Find Users </Link>  </div></Menu.Item>

                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Others">
                  <Menu.Item key="5"> <div><Link to="/News" > News </Link></div> </Menu.Item>
                  <Menu.Item key="6"><div> <Link to="/Music" > Music </Link></div></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Settings">
                  <Menu.Item key="9"><div > <Link to="/Settings" > Settings </Link> </div> </Menu.Item>
                  <Menu.Item key="10"> <div > <Link to="/Login" > Login </Link> </div>  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/Dialogs" render={WithSuspense(DialogsContainer)} />
              <Route path="/Users" render={() => <UsersContainer />} />
              <Route path="/News" render={() => <News />} />
              <Route path="/Music" render={() => <Music />} />
              <Route path="/Settings" render={() => <Settings />} />
              <Route path="/Login" render={() => <Login />} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ASoft ©2021 Created by Arsh</Footer>
      </Layout>

    );
  }
};
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
const MainApp = (props) => {

  return <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>

}
export default MainApp;
// <div className="App">
      //   
      //   <Navbar />
      //   <div className="AppContent">
      //     <Route path="/Profile/:userId?" render={()=><ProfileContainer

      //      />}/> 
      //        <Route path="/Dialogs" render={WithSuspense ( DialogsContainer)} 
      //       //  {()=>{
      //       // return  <React.Suspense fallback={<Preloader/>}>

      //       //  <DialogsContainer  />

      //       //  </React.Suspense>}} 
      //       />  

      //      <Route path="/Users" render={()=><UsersContainer/>} />
      //      <Route path="/News" render={()=><News/>} />
      //     <Route path="/Music" render={()=><Music/>} />
      //     <Route path="/Settings" render={()=><Settings/>} /> 
      //     <Route path="/Login" render={()=><Login/>} /> 
      //   </div>
      // </div>
      //  </BrowserRouter>
      // <div className={s.item}>
      //  <NavLink to="/News" activeClassName={s.activeLink}> News </NavLink>
      // </div>
      // <div className={s.item}>
      //  <NavLink to="/Music" activeClassName={s.activeLink}> Music </NavLink>
      // </div>
      // <div className={s.item}>
      //   <NavLink to="/Settings" activeClassName={s.activeLink}> Settings </NavLink>
      // </div>
      // <div className={s.item}>
      //   <NavLink to="/Login" activeClassName={s.activeLink}> Login </NavLink>
      // </div>