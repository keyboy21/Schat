import { View, Text, ScrollView } from "react-native";
import { Avatar } from "@rneui/themed";
import { auth } from "../utils/firebase";

const ChatMessages = ({ messages }) => {
  return (
    <ScrollView className='pt-4'>
      {messages.map(({ id, data }) =>
        data.email === auth.currentUser.email ? (
          <View
            key={id}
            className="p-[15px] self-end rounded-2xl mr-4 mb-5 relative max-w-[80%] bg-blue-400"
          >
            <Avatar
              containerStyle={{ position: "absolute", bottom: -15, right: -5 }}
              rounded
              source={{ uri: data.photoURL }}
              size={30}
            />
            <Text className="mr-2 text-white font-medium">{data.message}</Text>
          </View>
        ) : (
          <View
            key={id}
            className="p-[15px] self-start rounded-2xl m-4 relative max-w-[80%] bg-orange-400"
          >
            <Avatar
              containerStyle={{ position: "absolute", bottom: -15, right: -5 }}
              rounded
              source={{ uri: data.photoURL }}
              size={30}
            />
            <Text className="mb-2 text-white font-medium">{data.message}</Text>
            <Text className="left-4 pr-2 text-[10] text-neutral-900">{data.displayName}</Text>

          </View>
        )
      )}
    </ScrollView>
  );
};

export default ChatMessages;
