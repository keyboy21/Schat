import { Text } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed'

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar rounded source={{ uri: 'https://cryptologos.cc/logos/chatcoin-chat-logo.png' }} />
      <ListItem.Content>
        <ListItem.Title>
          <Text className='font-extrabold'>{chatName}</Text>
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          <Text>qweqwewqewqeeeeeeee</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem