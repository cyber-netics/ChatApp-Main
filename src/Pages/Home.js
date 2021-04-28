import React, { Component } from 'react';
import { connect } from 'react-redux';

// Partials
import Navigation from '../Partials/Navigation';
import SideBar from '../Partials/SideBar';
import WorkBench from '../Partials/WorkBench';

// Components
import { Container } from '../Components/Common';

// Redux actions
import { navTab } from '../Store/action/ui';

import {
  getFriends,
  getChat,
  getMessage,
} from '../Store/action/data';

class Home extends Component {
  componentDidMount() {
    this.props.getFriendList();
    this.props.getChatList();
  }

  render() {
    const {
      toggleTheme,
      toggleNavTab,
      activeNavTab,
      activeNavAction,
    } = this.props;

    return (
      <Container>
        <Navigation
          toggleTheme={toggleTheme}
          toggleNavTab={toggleNavTab}
          activeNavTab={activeNavTab}
        />
        <SideBar
          active={activeNavTab}
          select={this.props[activeNavAction]}
          data={this.props.data[activeNavTab]}
        />
        <WorkBench
          data={this.props.data.messages}
          current={activeNavTab}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeNavTab: state.ui.nav.name,
    activeNavAction: state.ui.nav.action,
    data: state.data,
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    toggleNavTab: (tab) => dispatch(navTab(tab)),
    getFriendList: () => dispatch(getFriends()),
    getChatList: () => dispatch(getChat()),
    getMessage: (id) => dispatch(getMessage(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(Home);
