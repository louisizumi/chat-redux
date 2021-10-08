import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends React.Component {
  componentWillMount() {
    this.getMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.getMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  getMessages = () => {
    this.props.getMessages(this.props.channelParam);
  }

  render() {
    const messages = this.props.messages;
    return (
      <div className="chat">
        <div className="chat__header">
          <h1><i className="fab fa-slack-hash" />{this.props.channelParam}</h1>
        </div>
        <div className="chat__messages" ref={(list) => { this.list = list; }}>
          {
            messages.map((message) => {
              return <Message message={message} key={message.created_at} />;
            })
          }
        </div>
        <MessageForm channelParam={this.props.channelParam} />
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
    messages: state.messages
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
