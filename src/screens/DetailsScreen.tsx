import { View, Text,SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Colors from '../../constants/Colors';

import { DetailsScreenRouteProp } from '../navigation/types';

const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { name, birthYear } = route.params;

  return (
    <SafeAreaView style={{backgroundColor:Colors.background, height:"100%"}}>
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, backgroundColor:Colors.background, height:"100%"  }}>
      <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
      <Text style={{ fontSize: 18 }}>Birth Year: {birthYear}</Text>
    </View>
    </ SafeAreaView>
  );
};

export default DetailScreen;
