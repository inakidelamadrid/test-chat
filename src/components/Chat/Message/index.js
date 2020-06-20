import React from 'react'
import styles from './styles.module.scss'

const ChatMessage = ({ avatarSrc, datetime, text }) => (
  <div className={styles.message}>
    <img className={styles.avatar} src={avatarSrc} />
    <div className={styles.datetime}>{datetime}</div>
    <p>{text}</p>
  </div>
)
export default ChatMessage
