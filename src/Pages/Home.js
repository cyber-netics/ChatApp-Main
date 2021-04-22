import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Container } from '../Components/Shared';
import Navigation from '../Components/Navigation';
// Partials
import SideBar from '../Partials/SideBar';
import SideChat from '../Partials/SideChat';

// Redux actions
import { navTab } from '../Store/action/interface';

class Home extends Component {
  render() {
    return (
      <Container>
        <Navigation
          toggleTheme={this.props.toggleTheme}
          toggleNavTab={this.props.toggleNavTab}
          activeNavTab={this.props.activeNavTab}
        />
        <SideBar />
        <SideChat />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeNavTab: state.ui.tab,
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    toggleNavTab: (tab) => dispatch(navTab(tab)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(Home);
