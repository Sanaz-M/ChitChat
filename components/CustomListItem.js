import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function CustomListItem({ id, chatName, navigation }) {

  const openTheChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id,
      chatName
    })
  };

  return (
    <ListItem key={id} onPress={() => openTheChat(id, chatName)} bottomDivider>
      <Avatar rounded source={{ uri: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }} />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>Hi! This is a test. I wanna check my code. It seems it's working great.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};


