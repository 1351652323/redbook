import React from 'react';
import { TabBar } from 'antd-mobile';
import { Route, Switch, useHistory, useLocation, MemoryRouter as Router, } from 'react-router-dom';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, } from 'antd-mobile-icons';
import styles from './MainTabs.module.less';
import Home from './router/Home/Home';
import Edit from './router/Edit/Edit';
import Todo from './router/Todo/Todo';
import PersonalCenter from './router/PersonalCenter/PersonalCenter';
const Bottom = () => {
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const setRouteActive = (value) => {
        history.push(value);
        console.log(styles.app)
    };
    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/message',
            title: '消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '我的',
            icon: <UserOutline />,
        },
    ];
    return (<TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title}/>))}
    </TabBar>);
};
export default () => {
    return (<Router initialEntries={['/home']}>
        <div className={styles.app}>
            <div className={styles.body}>
                <Switch>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/todo'>
                        <Todo />
                    </Route>
                    <Route exact path='/message'>
                        <Edit />
                    </Route>
                    <Route exact path='/me'>
                        <PersonalCenter />
                    </Route>
                </Switch>
            </div>
            <div className={styles.bottom}>
                <Bottom />
            </div>
        </div>
    </Router>);
};



