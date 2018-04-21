import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class SidebarMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item name="home">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item name="gamepad">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item name="camera">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </div>
    );
  }
}

export default SidebarMenu;
