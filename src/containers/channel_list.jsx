import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, getMessages } from '../actions';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.getMessages(nextProps.selectedChannel);
    }
  }

  handleClick(channel) {
    this.props.selectChannel(channel);
  }

  render() {
    const { channels, selectedChannel } = this.props;
    return (
      <div className="sidebar-channels">
        <h1>Le Wagon</h1>
        <div className="channels">
          <div className="sidebar__header">
            <h2>Channels</h2>
          </div>
          {
            channels.map((channel) => {
              if (channel === selectedChannel) {
                return (
                  <div className="channel" id="channel--active" key={channel} onClick={() => this.handleClick(channel)}>
                    <h4>#{channel}</h4>
                  </div>
                );
              }
              return (
                <div className="channel" key={channel} onClick={() => this.handleClick(channel)}>
                  <h4>#{channel}</h4>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectChannel, getMessages },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
