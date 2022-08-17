import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed'
import { getChatMessages } from '../hooks/Firebase.hooks';


const CustomListItem = ({ id, chatName, enterChat }) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChatMessages(id, setMessages)

  }, [])

  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar rounded source={{ uri: 'https://cryptologos.cc/logos/chatcoin-chat-logo.png' }} />
      <ListItem.Content>
        <ListItem.Title>
          <Text className='font-extrabold'>{chatName}</Text>
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          {messages[0]?.data.displayName} : {messages[0]?.data.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem