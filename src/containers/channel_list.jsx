import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMessages } from '../actions';

class ChannelList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelParam !== this.props.channelParam) {
      this.props.getMessages(nextProps.channelParam);
    }
  }

  render() {
    const { channels, channelParam } = this.props;
    return (
      <div className="sidebar-channels">
        <h1>Le Wagon</h1>
        <div className="channels">
          <div className="sidebar__header">
            <h2>Channels</h2>
          </div>
          {
            channels.map((channel) => {
              if (channel === channelParam) {
                return (
                  <Link to={`/${channel}`}>
                    <div className="channel" id="channel--active" key={channel} >
                      <h4>#{channel}</h4>
                    </div>
                  </Link>
                );
              }
              return (
                <Link to={`/${channel}`}>
                  <div className="channel" key={channel} >
                    <h4>#{channel}</h4>
                  </div>
                </Link>
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
    { getMessages },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
