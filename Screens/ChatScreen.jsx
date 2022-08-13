import { useLayoutEffect, useState } from "react";
import { Icon } from "@rneui/themed";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import ChatInput from "../Components/ChatInput";

const ChatScreen = ({ route, navigation }) => {
  const { id, chatName } = route.params;
  const [input, setinput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      title: `${chatName} chat`,
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
  }, [navigation]);

  const sendMessage = () => {
    
  }

  return (
    <SafeAreaView className='flex-1'>
      <KeyboardAvoidingView
        className='flex-1'
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <ScrollView>

        </ScrollView>

        <ChatInput input={input} setinput={setinput} sendMessage={sendMessage} />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
