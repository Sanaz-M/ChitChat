import { useState, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../firebase';

export default function AddChatScreen({ navigation }) {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a New Chat',
      headerBackTitle: 'Chats',
    })
  }, [navigation])

  const createChat = async () => {
    try {
      const chatsRef = collection(db, 'chats');
      await addDoc(chatsRef, { chatName: input });
      navigation.goBack();
    } catch (error) {
      alert(error.message);
    }
  };



  return (
    <View>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={<Icon name='wechat' type='antdesign' size={24} color='black' />}
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title='Create New Chat' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%'
  }
});
