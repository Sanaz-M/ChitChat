import { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from '../firebase';
import CustomListItem from '../components/CustomListItem';

export default function HomeScreen({ navigation }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const result = collection(db, 'chats').onSnapShot(snapShot => { })
  }, [])


  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    })
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'ChitChat',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRight}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name='camera' size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Add Chat")}>
            <SimpleLineIcons name='pencil' size={22} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });

  }, [navigation])

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    marginRight: 20,
  },
});
