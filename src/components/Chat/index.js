import React, { useState } from 'react'
import styles from './styles.module.scss'
import Message from './Message'

////const addMessage = ({
////text,
////avatarSrc = 'https://placeimg.com/50/50/people?1',
////}) => {
//attention: this is not a pure function since we generate the timestamp.
////}

const Chat = (props) => {
  const [messages, setMessages] = useState([
    {
      src: 'https://placeimg.com/50/50/people?1',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?2',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?3',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?1',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?2',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?3',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?1',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?2',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
    {
      src: 'https://placeimg.com/50/50/people?3',
      datetime: '23/03/2016 20:40',
      text: 'A message text',
    },
  ])

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        {messages.map((message, index) => (
          <Message
            key={`${index}-{message.src}`}
            avatarSrc={message.src}
            datetime={message.datetime}
            text={message.text}
          />
        ))}
      </div>
      <form className={styles.sendMessageForm}>
        <input type="text" placeholder="Ciao" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat
