import { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Switch, Text, Divider, IconButton } from 'react-native-paper';
import DropDownF from './Component/DropdownF';
import Slider from '@react-native-community/slider';
import { FlatGrid } from 'react-native-super-grid';
import Chip from '../../../Component/Chip';


const ammeneties = [
  { label: 'Balcony', icon: 'balcony', selected: true },
  { label: 'Basement', icon: 'wheel-barrow', selected: false },
  { label: 'Bike Parking', icon: 'motorbike', selected: false },
  { label: 'Cable TV', icon: 'cast-variant', selected: true }
]

export default function PropertyFilter({ navigation }) {
  const [pet, setPet] = useState(true);
  const [lease, setLease] = useState(1);
  const [withinDistance, setWithinDistance] = useState(1);


  return (
    <ScrollView style={styles.container}>
      <DropDownF
        label='Gender:'
        items={[
          { value: 'M', label: 'Male' },
          { value: 'F', label: 'Female' },
          { value: 'M/F', label: 'Mixed' }
        ]}
        selected='M'
        style={[styles.filterItem, { zIndex: 20 }]}
      />
      <DropDownF
        label='Type:'
        items={[
          { value: 'A', label: 'Any' },
          { value: 'P', label: 'Sharing' },
          { value: 'S', label: 'Private' }
        ]}
        selected='A'
        style={[styles.filterItem, { zIndex: 19 }]}
      />
      <DropDownF
        label='Property:'
        items={[
          { value: '1B', label: '1 Bed' },
          { value: '2B', label: '2 Bed' },
          { value: '3B', label: '3 Bed' },
          { value: '4B', label: '4 Bed' }
        ]}
        selected='1B'
        style={[styles.filterItem, { zIndex: 18 }]}
      />
      <DropDownF
        label='G. Level:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'ABOVE', label: 'Above' },
          { value: 'BASEMENT', label: 'Basement' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 17 }]}
      />
      <DropDownF
        label='Bathroom:'
        items={[
          { value: '1', label: '≤ 1' },
          { value: '2', label: '≤ 2' },
          { value: '3', label: '≤ 3 ≤' }
        ]}
        selected='1'
        style={[styles.filterItem, { zIndex: 16 }]}
      />
      <DropDownF
        label='Wifi:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 15 }]}
      />
      <DropDownF
        label='Heat:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 14 }]}
      />
      <DropDownF
        label='Electricity:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 13 }]}
      />
      <DropDownF
        label='Parking:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'NO', label: 'NO Parking' },
          { value: 'OFF', label: 'OFF Street' },
          { value: 'ON', label: 'ON Street' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 12 }]}
      />
      <DropDownF
        label='Laundry:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'IN-B', label: 'IN-B' },
          { value: 'NO-L', label: 'NO-L' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 11 }]}
      />
      <DropDownF
        label='Deposit:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'NO', label: 'NO' },
          { value: '1/2', label: '1/2' },
          { value: '3/4', label: '3/4' },
          { value: 'FULL', label: 'Full' }
        ]}
        selected='ANY'
        style={[styles.filterItem, { zIndex: 10 }]}
      />

      <View style={styles.filterItem}>
        <Text style={{ fontWeight: 'bold', width: 80 }}>Pet: {pet ? 'Yes' : 'No'}</Text>
        <Switch value={pet} color='purple' onValueChange={setPet} />
      </View>

      <View style={styles.filterItem}>
        <Text style={{ fontWeight: 'bold', width: 80 }}>Lease: {lease}</Text>
        <View style={{ width: 100 }}>
          <Slider
            minimumValue={1}
            maximumValue={12}
            step={3}
            value={lease}
            onValueChange={setLease}
            minimumTrackTintColor='grey'
            maximumTrackTintColor='purple'
          />
        </View>
      </View>

      <View style={styles.filterItem}>
        <Text style={{ fontWeight: 'bold' }}>Within Distance(in Km): {withinDistance}</Text>
        <View style={{ width: 100 }}>
          <Slider
            minimumValue={1}
            maximumValue={35}
            step={5}
            value={withinDistance}
            onValueChange={setWithinDistance}
            minimumTrackTintColor='grey'
            maximumTrackTintColor='purple'
          />
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Ammeneties:</Text>
        <FlatGrid
        itemDimension={150}
        style={{alignSelf: 'center'}}
          data={ammeneties}
          renderItem={({ item }) => <Chip {...item} />}
        />
      </View>

      <DropDownF
        label='Sort By:'
        items={[
          { value: 'date', label: 'Date' },
          { value: 'price', label: 'Price' }
        ]}
        selected='date'
        style={[styles.filterItem, { zIndex: 10 }]}
      />

      <Divider />

      <View style={styles.filterItem}>
        <IconButton
          icon='undo-variant'
          iconColor='red'
          animated={true}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon='check'
          iconColor='green'
          size={40}
          onPress={() => navigation.navigate('PropertyList')}
        />
      </View>

      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
    marginVertical: 10
  }
});
