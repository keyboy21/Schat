import { useState, useLayoutEffect } from "react";
import * as Localization from 'expo-localization';
import { Text, KeyboardAvoidingView } from "react-native";
import RegisterForm from "../Components/RegisterForm";
import { registerFirebase, updateUserProfile } from '../hooks/Firebase.hooks';

const RegisterScreen = () => {

  const [language, setlanguage] = useState('')
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  useLayoutEffect(() => {
    setlanguage(Localization.locale)
  }, [])

  const register = async () => {
    if (email && password && fullName) {
      registerFirebase(email, password)
        .then(() => {
          updateUserProfile(fullName, imageUrl || 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png')
            .catch(err => alert(err.message))
        })
        .catch(err => { alert(err.message) })
    }
    else {
      alert("Please enter your email address, password and full name");
    }

  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <Text className="mb-5 text-lg text-center mt-10">
        {language === 'ru-RU' ? 'Создать учетную Schat' : 'Create a Schat account'}
      </Text>
      <RegisterForm
        fullName={fullName}
        email={email}
        password={password}
        imageUrl={imageUrl}
        setfullName={setfullName}
        setEmail={setEmail}
        setpassword={setpassword}
        setimageUrl={setimageUrl}
        register={register}
      />
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
