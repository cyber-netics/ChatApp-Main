import React, { Component } from 'react';
import { connect } from 'react-redux';

// Partials
import Navigation from '../Partials/Navigation';
import SideBar from '../Partials/SideBar';
import SideChat from '../Partials/SideChat';

// Redux actions
import { navTab } from '../Store/action/interface';
import {
  getFriends,
  getChat,
} from '../Store/action/chat';

// Components
import { Container } from '../Components/Common';

class Home extends Component {
  componentDidMount() {
    this.props.getFriendList();
    this.props.getChatList();
  }

  render() {
    return (
      <Container>
        <Navigation
          toggleTheme={this.props.toggleTheme}
          toggleNavTab={this.props.toggleNavTab}
          activeNavTab={this.props.activeNavTab}
        />
        <SideBar
          active={this.props.activeNavTab}
          friends={this.props.friendList}
          chats={this.props.chatList}
        />
        <SideChat />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeNavTab: state.ui.tab,
    friendList: state.data.friendList,
    chatList: state.data.chatList,
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    toggleNavTab: (tab) => dispatch(navTab(tab)),
    getFriendList: () => dispatch(getFriends()),
    getChatList: () => dispatch(getChat()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(Home);
