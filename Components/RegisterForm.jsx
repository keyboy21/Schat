import {
  View,
  TextInput,
  Button,
} from "react-native";

const RegisterForm = ({
  fullName,
  email,
  password,
  imageUrl,
  setfullName,
  setEmail,
  setpassword,
  setimageUrl,
  register
}) => {
  return (
    <View className="px-4 space-y-10 items-center">
      <TextInput
        value={fullName}
        onChangeText={(txt) => setfullName(txt)}
        className="border-b-2 border-amber-600 text-sm mt-5 w-80"
        placeholder="Full name"
        autoFocus
      />
      <TextInput
        autoCapitalize="none"
        value={email}
        onChangeText={(txt) => setEmail(txt)}
        keyboardType="email-address"
        className="border-b-2 border-amber-600 text-sm mt-5 w-80"
        placeholder="Email address"
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(txt) => setpassword(txt)}
        className="border-b-2 border-amber-600 text-sm mt-5 w-80"
        placeholder="Password"
      />
      <TextInput
        onSubmitEditing={register}
        value={imageUrl}
        onChangeText={(txt) => setimageUrl(txt)}
        className="border-b-2 border-amber-600 text-sm mt-5 mb-10 w-80"
        placeholder="Profile picture"
      />
      <View className='w-3/4'>
        <Button onPress={register} title="Register" color={"green"} />
      </View>
    </View>
  );
};

export default RegisterForm;
