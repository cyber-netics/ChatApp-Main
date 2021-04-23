import React, { Component } from 'react';
import { connect } from 'react-redux';

// Partials
import Navigation from '../Partials/Navigation';
import SideBar from '../Partials/SideBar';
import SideChat from '../Partials/SideChat';

// Redux actions
import { navTab } from '../Store/action/interface';

// Components
import { Container } from '../Components/Common';

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
