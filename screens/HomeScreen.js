import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';

import CustomListItem from '../components/CustomListItem';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>

    </SafeAreaView>
  );
}
