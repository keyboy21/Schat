import { useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Icon } from '@rneui/themed';
import CustomListItem from '../Components/CustomListItem'
import { auth } from '../utils/firebase';
import { SignOut, getChats } from '../hooks/Firebase.hooks';


const Home = ({ _, navigation }) => {

  const [chats, setchats] = useState([])

  useEffect(() => {
    getChats().then((chats) => setchats(
      chats.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))
    ))

  }, [navigation])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Schat",
      headerLeft: () => (
        <View className='ml-3'>
          <TouchableOpacity onLongPress={Out} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View className='flex-row space-x-5 mr-1'>
          <TouchableOpacity>
            <Icon
              type='simple-line-icon'
              name='camera'
              size={24}
              color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('addChat')}>
            <Icon
              type='simple-line-icon'
              name='pencil'
              size={24}
              color='white' />
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation, auth])


  const enterChat = (id, chatName) => {
    navigation.navigate('chatScreen', { id, chatName })
  }

  const Out = () => {
    SignOut().then(() => {
      navigation.replace('Login')
    })
  }

  return (
    <SafeAreaView>
      <ScrollView className='h-full'>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home