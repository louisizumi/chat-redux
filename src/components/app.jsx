import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = (props) => {
  return (
    <div>
      <div className="grid-container">
        <div className="sidebar-workspaces">
          <h3 className="workspace" id="workspace--active">LW</h3>
          {/* <h3 className="workspace">SL</h3> */}
        </div>
        <ChannelList channelParam={props.match.params.channel} />
        <MessageList channelParam={props.match.params.channel} />
      </div>
    </div>
  );
};

export default App;
