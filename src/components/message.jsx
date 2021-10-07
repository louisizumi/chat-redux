import React from 'react';

const Message = (props) => {
  const { id, author, content } = props.message;
  return (
    <div className="message-flex">
      <div className="profile-picture">
        <img src={`https://source.unsplash.com/random/32x32?sig=${id}`} alt={author} />
      </div>
      <div className="message__content">
        <p className="message__user">{author}</p>
        <p className="message__text">{content}</p>
      </div>
    </div>
  );
};

export default Message;
