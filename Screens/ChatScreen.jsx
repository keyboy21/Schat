import { useLayoutEffect, useState } from "react";
import { Icon, Avatar } from "@rneui/themed";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import ChatInput from "../Components/ChatInput";
import { SendMessage, getChatMessages } from '../hooks/Firebase.hooks';
import ChatMessages from "../Components/ChatMessages";

const ChatScreen = ({ route, navigation }) => {
  const { id, chatName } = route.params;
  const [input, setinput] = useState('');
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      title: chatName,
      headerBackTitleVisible: false,
      headerRight: () => (
        <View className="flex-row space-x-10">
          <TouchableOpacity>
            <Icon type="feather" name="video" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              type="simple-line-icon"
              name="phone"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, messages]);

  const sendMessage = () => {
    Keyboard.dismiss();
    SendMessage(input, id).catch((error) => alert(error.message));
    setinput('')
  }

  useLayoutEffect(() => {
    getChatMessages(id, setMessages)
  }, [route])

  return (
    <SafeAreaView className='flex-1'>
      <KeyboardAvoidingView
        className='flex-1'
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <>
            <ChatMessages messages={messages} />
            <ChatInput input={input} setinput={setinput} sendMessage={sendMessage} />
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
