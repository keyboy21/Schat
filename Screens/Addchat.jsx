import { useLayoutEffect, useState } from 'react';
import { Input, Icon } from '@rneui/themed';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Chatcreate } from '../hooks/Firebase.hooks';

const Addchat = ({ _, navigation }) => {

  const [input, setInput] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create a new chat',
      headerBackTitle: "Chats"
    })
  }, [navigation])

  const createChat = async () => {

    if (input) {
      await Chatcreate(input)
        .then(() => {
          navigation.replace('Home')
        })
        .catch((err) => console.error(err.message));
    }
    else {
      alert('Please enter chat name.')
    }

  }

  return (
    <View>
      <Input
        value={input}
        autoFocus
        onChangeText={val => setInput(val)}
        onSubmitEditing={createChat}
        placeholder="Chat Name"
        leftIcon={<Icon type='antdesign' name='wechat' size={24} color='orange' />}
      />
      {/* <TouchableOpacity> */}
      <Button onPress={createChat}
        color='green'
        // className='text-lg  w-full py-2 mt-6 text-center text-white bg-amber-600' 
        title='Create a new chat' />
      {/* </TouchableOpacity> */}
    </View>
  )
}

export default Addchat