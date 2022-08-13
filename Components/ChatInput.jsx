import { View, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from "@rneui/themed";

const ChatInput = ({ input, setinput, sendMessage }) => {
  return (
    <View className="flex-row w-full p-[15px] items-center">
      <TextInput
        className='bottom-0 h-10 flex-1 mr-4 border-transparent bg-slate-200 p-[9px] rounded-3xl'
        value={input}
        onChange={(text) => setinput(text)}
        placeholder="Schat message"
      />
      <TouchableOpacity onPress={sendMessage}>
        <Icon type="Ionicons" name="send" size={30} color="blue" />
      </TouchableOpacity>
    </View>
  )
}

export default ChatInput