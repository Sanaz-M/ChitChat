import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function CustomListItem() {
  return (
    <ListItem>
      <Avatar rounded source={{ uri: 'https://img.freepik.com/free-vector/cute-sloth-yoga-cartoon-icon-illustration_138676-2250.jpg?w=740&t=st=1695653979~exp=1695654579~hmac=02291c67ede3ecd5a4513a8a8542eaa41e70ce02d1d4cf2e3ad23d37bdf69172' }} />
      <ListItem.Content>
        <ListItem.Title>New Chat</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>Hi! This is a test. I wanna check my code. It seems it's working great.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
