import { useState, useEffect, useLayoutEffect } from 'react';
import * as Localization from 'expo-localization';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from 'react-native';
import { auth } from '../utils/firebase';
import { SignIn } from '../hooks/Firebase.hooks';

const LoginScreen = ({ _, navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [language, setlanguage] = useState('')

  useLayoutEffect(() => {
    setlanguage(Localization.locale)
  }, [])

  useEffect(() => {
    const unscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home');
      }
    })
    return unscribe;
  }, []);

  const Sign = () => {
    if (email && password) {
      SignIn(email, password).catch((error) => alert(error.message));
    }
    else {
      alert('Please enter your email address and password');
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' className='flex-1 items-center justify-center p-10 bg-loginScreen'>
      <Image className='rounded-full' source={require('../assets/icon-512x512.png')} style={{ width: 200, height: 200 }} />
      <View>
        <TextInput
          value={email}
          autoCapitalize='none'
          className='border-b-2 border-amber-600 text-lg mt-5 w-80'
          onChangeText={text => setEmail(text)}
          placeholder='Email'
          autoFocus keyboardType='email-address'
          autoComplete='email'
        />
        <TextInput
          autoCapitalize='none'
          value={password}
          className='border-b-2 border-amber-600 text-lg mt-5 w-80'
          textContentType='password'
          onChangeText={val => setpassword(val)}
          placeholder="Password" secureTextEntry={true}
          onSubmitEditing={Sign}
        />
      </View>


      <TouchableOpacity>
        <Text onPress={Sign} className='text-lg  w-60 py-2 mt-10 text-center text-white bg-amber-600'>{language === 'ru-RU' ? 'Войти' : "Sign In"}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Register')} className='py-2 w-60 text-center mt-4 text-lg border-2 border-amber-600  text-amber-600 '>{language === 'ru-RU' ? 'Регистрация' : "Register"}</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen