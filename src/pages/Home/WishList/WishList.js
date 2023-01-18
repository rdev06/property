import { FlatGrid } from 'react-native-super-grid';
import List from '../list.json'
import PropertyItem from '../Component/PropertyItem';

export default function WishList({navigation}){
    return <FlatGrid
    itemDimension={400}
    data={List.filter(e => e.isWishlisted)}
    renderItem={item => <PropertyItem {...item} navigation={navigation} />}
  />
}