import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropertyFilter from './PropertyFilter/PropertyFilter';
import PropertyList from './PropertyList/PropertyList';
import WishList from './WishList/WishList';
import Scheduled from './Scheduled/Scheduled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropertyDetail from './PropertyDetail/PropertyDetail';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName='PropertyList'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'PropertyList':
              iconName =  focused ? 'list-circle': 'list-circle-outline'
              break;
            // case 'PropertyDetail':
            //   iconName =  focused ? 'business': 'business-outline'
            //   break;
            case 'PropertyFilter':
              iconName = focused ? 'filter' : 'filter-outline';
              break;
            case 'WhishList':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'VisitScheduled':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='PropertyList' component={PropertyList} />
      <Tab.Screen name='PropertyFilter' component={PropertyFilter} />
      {/* <Tab.Screen name='PropertyDetail' component={PropertyDetail} /> */}
      <Tab.Screen name='WhishList' component={WishList} />
      <Tab.Screen name='VisitScheduled' component={Scheduled} />
    </Tab.Navigator>
  );
}
