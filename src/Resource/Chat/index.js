import React from 'react';

import Header from './Components/Header';
import Messages from './Components/Messages';
import Footer from './Components/Footer';

const Chat = ({ data }) => {
  return (
    <>
      <Header user={data.user} />
      <Messages messages={data.chat} />
      <Footer />
    </>
  );
};

export default Chat;
