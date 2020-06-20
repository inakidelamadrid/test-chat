import React from 'react'
import styles from './styles.module.scss'
import Message from './Message'

const Chat = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <Message
          avatarSrc="https://placeimg.com/50/50/people?1"
          datetime="23/03/2016 20:40"
          text="A message text"
        />
      </div>
      <form className={styles.sendMessageForm}>
        <input type="text" placeholder="Ciao" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat
