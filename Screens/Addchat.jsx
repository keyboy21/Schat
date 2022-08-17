import { useLayoutEffect, useState } from "react";
import * as Localization from "expo-localization";
import { Input, Icon } from "@rneui/themed";
import { View, Button } from "react-native";
import { Chatcreate } from "../hooks/Firebase.hooks";

const Addchat = ({ _, navigation }) => {
  const [language, setlanguage] = useState("");
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    const lang = Localization.locale
    navigation.setOptions({
      title: lang === "ru-RU" ? "Создать новый чат" : "Create a new chat",
      headerBackTitle: "Chats",
    });
    setlanguage(Localization.locale);
  }, [navigation]);

  const createChat = async () => {
    await Chatcreate(input)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((err) => console.error(err.message));

  };

  return (
    <View>
      <Input
        value={input}
        autoFocus
        onChangeText={(val) => setInput(val)}
        onSubmitEditing={createChat}
        placeholder={language === "ru-RU" ? "Имя чатa" : "chat name"}
        leftIcon={
          <Icon type="antdesign" name="wechat" size={24} color="orange" />
        }
      />

      <Button disabled={!input} onPress={createChat} color="green" title={language === "ru-RU" ? "Создать" : "Create"} />
    </View>
  );
};

export default Addchat;
