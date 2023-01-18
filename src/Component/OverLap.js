import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import PropertyDetail from '../pages/Home/PropertyDetail/PropertyDetail';

export default function OverLap({ route, navigation }) {
  if (!route?.params?.use) {
    route.params = { use: 'Title', meta: {} };
  }
  const { use, meta } = route.params;
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={use} />
      </Appbar.Header>
      {use === 'PropertyDetail' && <PropertyDetail {...meta} />}
    </View>
  );
}
