import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import New from './New';
import Login from './Login';
import SidebarMenu from './SidebarMenu';
import Conversations from './Conversations';

import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react';

class Dashboard extends Component {
  state = { visible: false };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  componentWillMount() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    const id = params.get('doc_id');
    localStorage.setItem('doc_id', id);
  }

  render() {
    const { visible } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Sidebar.Pushable>
          <Sidebar animation="push" vertical visible={visible} as={Menu}>
            <SidebarMenu toggle={this.toggleVisibility} />
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
            {/* <Route exact path="/dashboard" component={Overview} /> */}
            <Route
              exact
              path="/dashboard/conversations"
              component={Conversations}
            />
            {/* 
  <Route exact path="/dashboard/conversations/list" component={List} />
  <Route exact path="/dashboard/conversations/edit" component={Edit} /> */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Dashboard;
