import React, { Component } from 'react';
import { Container } from '../Components/Shared';

import Navigation from '../Components/Navigation';
import SideBar from '../Partials/SideBar';
import SideChat from '../Partials/SideChat';

class Home extends Component {
  render() {
    return (
      <Container>
        <Navigation
          toggleTheme={this.props.toggleTheme}
        />
        <SideBar />
        <SideChat />
      </Container>
    );
  }
}

export default Home;
