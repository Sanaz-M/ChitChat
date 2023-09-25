import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

import { auth } from '../firebase';


//Image by <a href="https://www.freepik.com/free-vector/flat-design-communication-logo-template_33513162.htm#query=chat%20logo&position=13&from_view=search&track=ais">Freepik</a>
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (authUser) => {
        if (authUser) {
          navigation.replace('Home');
        }
      });

    return unsubscribe;
  }, [])


  const sigIn = () => {

  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/logo.png')}
        style={{ width: 190, height: 180 }} />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} title='Login' onPress={sigIn} />
      <Button containerStyle={styles.button} title='Register' type='outline' onPress={() => navigation.navigate('Register')} />
      <View style={{ height: 140 }} />
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
