import { View, Text,SafeAreaView } from 'react-native';
import Colors from '../../constants/Colors';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:Colors.background, height:"100%"}} >
      <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
        <Text  style={{ fontSize: 18 }}>Notification Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
