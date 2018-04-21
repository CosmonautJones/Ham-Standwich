import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import New from './components/New';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SidebarMenu from './components/SidebarMenu';

import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react';

class App extends Component {
  state = { visible: false };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { visible } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Route exact path="/" component={Login} />
        <Sidebar.Pushable>
          <Sidebar animation="push" vertical visible={visible} as={Menu}>
            <Route exact path="/" component={Login} />
            <Route
              path="/dashboard"
              component={SidebarMenu}
              toggle={this.toggleVisibility}
            />
          </Sidebar>
          <Sidebar.Pusher>
            <Menu
              secondary
              style={{
                marginTop: '10px',
                marginLeft: '110px',
                marginRight: '3em',
              }}
            >
              <Menu.Item
                name="Menu"
                icon="list layout"
                onClick={this.toggleVisibility}
              />
            </Menu>

            <Route
              exact
              path="/dashboard/conversations/new"
              component={New}
              style={{ margin: '5em' }}
            />
            {/* <Route exact path="/dashboard/overview" component={Overview} />
        <Route
          exact
          path="/dashboard/conversations"
          component={Conversations}
        />
        <Route exact path="/dashboard/conversations/list" component={List} />
        <Route exact path="/dashboard/conversations/edit" component={Edit} /> */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
