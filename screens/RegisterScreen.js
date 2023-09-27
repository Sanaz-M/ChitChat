import { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, Input } from 'react-native-elements';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth } from '../firebase';

//<a href="https://www.freepik.com/free-vector/cute-sloth-yoga-cartoon-icon-illustration_11167789.htm">Image by catalyststuff</a> on Freepik
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Login',
    });
  }, [navigation]);

  const register = async () => {
    try {
      const authUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(authUser.user, {
        displayName: name,
        photoURL: imageUrl || 'https://img.freepik.com/free-vector/cute-sloth-yoga-cartoon-icon-illustration_138676-2250.jpg?w=740&t=st=1695653979~exp=1695654579~hmac=02291c67ede3ecd5a4513a8a8542eaa41e70ce02d1d4cf2e3ad23d37bdf69172',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>Create an Account</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autoFocus
          type='text'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Password'
          type='password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder='Profile Picture URL (optional)'
          type='text'
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
        <Button
          raised
          onPress={register}
          title='Register'
          containerStyle={styles.button}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
