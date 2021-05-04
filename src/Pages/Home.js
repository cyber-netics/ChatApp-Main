import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from 'Components/Common';
import Metadata from 'Components/Metadata';

import Navigation from 'Partials/Navigation';
import SideBar from 'Partials/SideBar';
import WorkBench from 'Partials/WorkBench';
import SideDrawer from 'Partials/SideDrawer';

import * as content from './content';
import { navTab, toggleDrawer } from 'Store/action/ui';
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
      drawerState,
      toggleDrawer,
    } = this.props;

    const {
      title,
      description,
      path,
    } = content.metadata;

    return (
      <Container>
        <Metadata
          path={path}
          title={title}
          description={description}
        />

        <Navigation
          toggleTheme={toggleTheme}
          toggleNavTab={toggleNavTab}
          activeNavTab={activeNavTab}
          toggleDrawer={toggleDrawer}
        />

        <SideBar
          active={activeNavTab}
          toggleDrawer={toggleDrawer}
          select={this.props[activeNavAction]}
          data={this.props.data[activeNavTab]}
        />

        <WorkBench
          current={activeNavTab}
          data={this.props.data.messages}
        />

        <SideDrawer
          drawer={drawerState}
          toggle={toggleDrawer}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeNavTab: state.ui.nav.name,
    activeNavAction: state.ui.nav.action,
    drawerState: state.ui.drawer,
    data: state.data,
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    toggleNavTab: (tab) => dispatch(navTab(tab)),
    getFriendList: () => dispatch(getFriends()),
    getChatList: () => dispatch(getChat()),
    getMessage: (id) => dispatch(getMessage(id)),
    toggleDrawer: (s, c) => dispatch(toggleDrawer(s, c)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(Home);
