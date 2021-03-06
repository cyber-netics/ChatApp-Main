import React, { Component } from 'react';
import { connect } from 'react-redux';

import { metadata } from './content';
import PageWrapper from 'Components/Page';

import Navigation from 'Partials/Navigation';
import SideBar from 'Partials/SideBar';
import WorkBench from 'Partials/WorkBench';
import SideDrawer from 'Partials/SideDrawer';
import ModalMenu from 'Partials/Modal';

import {
  toggleNavTab,
  toggleDrawer,
  toggleTheme,
  toggleModal,
} from 'Store/action/ui';

import {
  getFriends,
  getChat,
  getMessage,
  getUserProfile,
} from 'Store/action/data';

class HomePage extends Component {
  // Initial fetch
  componentDidMount() {
    this.props.initFetch.getFriendList();
    this.props.initFetch.getChatList();
  }

  render() {
    const { uiState, uiHandlers, dataState, apiHandlers } =
      this.props;

    const { toggleDrawer, toggleModal } = uiHandlers;

    return (
      <PageWrapper metadata={metadata}>
        <Navigation
          uiState={uiState}
          dataState={dataState}
          uiHandlers={uiHandlers}
          apiHandlers={apiHandlers}
        />

        <SideBar
          activeTab={uiState.navTab}
          apiHandlers={apiHandlers}
          toggleDrawer={toggleDrawer}
          toggleModal={toggleModal}
          data={dataState.tabContext}
        />

        <WorkBench
          activeTab={uiState.navTab}
          data={dataState.barContext}
        />

        <SideDrawer
          toggle={toggleDrawer}
          drawer={uiState.drawer}
          profile={dataState.profile}
        />

        <ModalMenu
          modal={uiState.modal}
          toggle={toggleModal}
        />
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { ui, data } = state;
  return {
    uiState: {
      navTab: ui.nav.tab,
      drawer: ui.drawer,
      modal: ui.modal,
    },
    dataState: {
      // gets data based on nav/tab selection
      tabContext: data[ui.nav.tab],
      // gets data based on nav/tab and sidebar sel.
      barContext: data[ui.nav.action],
      profile: data.profile,
      masterUser: data.masterUser,
    },
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    initFetch: {
      getChatList: () => dispatch(getChat()),
      getFriendList: () => dispatch(getFriends()),
    },
    apiHandlers: {
      getMessage: (id) => dispatch(getMessage(id)),
      getUserProfile: (id) => dispatch(getUserProfile(id)),
    },
    uiHandlers: {
      toggleTheme: (mode) => dispatch(toggleTheme(mode)),
      toggleNavTab: (tab) => dispatch(toggleNavTab(tab)),
      toggleModal: (m, c) => dispatch(toggleModal(m, c)),
      toggleDrawer: (s, c) => dispatch(toggleDrawer(s, c)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(HomePage);
