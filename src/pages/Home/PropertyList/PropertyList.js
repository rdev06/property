import { FlatGrid } from 'react-native-super-grid';
import List from '../list.json'
import PropertyItem from '../Component/PropertyItem';


export default function PropertyList({navigation}){
    return <FlatGrid
    itemDimension={400}
    data={List}
    renderItem={item => <PropertyItem {...item} navigation={navigation} />}
  />
}