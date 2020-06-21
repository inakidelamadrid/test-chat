import React, { useCallback, useEffect, useRef, useState } from 'react'
import moment from 'moment'
import styles from './styles.module.scss'
import Message from './Message'

const buildMessage = ({
  text,
  src = 'https://placeimg.com/50/50/people?1',
}) => {
  //attention: this is not a pure function since we generate the timestamp.
  const now = moment()
  const formatted = now.format('DD/MM/YYYY hh:mm')

  return {
    datetime: formatted,
    src,
    text,
  }
}

const Chat = (props) => {
  const chatWrapperRef = useRef()
  const chatContentRef = useRef()

  console.log('Wrapper Offsetheight', chatWrapperRef.current?.offsetHeight)
  console.log('Content Offsetheight', chatContentRef.current?.offsetHeight)

  console.log('Wrapper Scrollheight', chatWrapperRef.current?.scrollHeight)
  console.log('Content scrollHeight', chatContentRef.current?.scrollHeight)
  console.log('Content scrollTop', chatContentRef.current?.scrollTop)

  const [currentMessageText, setCurrentMessageText] = useState('')

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

  const appendMessage = useCallback(
    (evt) => {
      evt.preventDefault()
      const newMessage = buildMessage({ text: currentMessageText })
      setMessages([...messages, newMessage])
      setCurrentMessageText('')
    },
    [currentMessageText, messages, setCurrentMessageText, setMessages]
  )

  const onCurrentMessageTextChange = (evt) =>
    setCurrentMessageText(evt.target.value)

  const scrollTop = () => {
    const chatContentDom =
      chatContentRef && chatContentRef.current ? chatContentRef.current : null
    if (chatContentDom) chatContentDom.scrollTop = chatContentDom.scrollHeight
  }

  useEffect(() => {
    scrollTop()
  }, [scrollTop])

  return (
    <div className={styles.container} ref={chatWrapperRef}>
      <div className={styles.chatContainer} ref={chatContentRef}>
        {messages.map((message, index) => (
          <Message
            key={`${index}-{message.src}`}
            avatarSrc={message.src}
            datetime={message.datetime}
            text={message.text}
          />
        ))}
      </div>
      <form className={styles.sendMessageForm} onSubmit={appendMessage}>
        <input
          onChange={onCurrentMessageTextChange}
          placeholder="Ciao"
          type="text"
          value={currentMessageText}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat
