import { ScrollView, View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import DropDownF from './Component/DropdownF';

export default function PropertyFilter() {
  return (
    <ScrollView style={styles.container} >
      <DropDownF
        label='Gender:'
        items={[
          { value: 'M', label: 'Male' },
          { value: 'F', label: 'Femaile' },
          { value: 'M/F', label: 'Mixed' }
        ]}
        selected='M'
        style={{ zIndex: 20 }}
      />
      <DropDownF
        label='Type:'
        items={[
          { value: 'A', label: 'Any' },
          { value: 'P', label: 'Sharing' },
          { value: 'S', label: 'Private' }
        ]}
        selected='A'
        style={{ zIndex: 19 }}
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
        style={{ zIndex: 18 }}
      />
      <DropDownF
        label='G. Level:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'ABOVE', label: 'Above' },
          { value: 'BASEMENT', label: 'Basement' }
        ]}
        selected='ANY'
        style={{ zIndex: 17 }}
      />
      <DropDownF
        label='Bathroom:'
        items={[
          { value: '1', label: '< 1' },
          { value: '2', label: '< 2' },
          { value: '3', label: '< 3 <' }
        ]}
        selected='1'
        style={{ zIndex: 16 }}
      />
      <DropDownF
        label='Wifi:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        selected='ANY'
        style={{ zIndex: 15 }}
      />
      <DropDownF
        label='Heat:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        selected='ANY'
        style={{ zIndex: 14 }}
      />
      <DropDownF
        label='Electricity:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        selected='ANY'
        style={{ zIndex: 13 }}
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
        style={{ zIndex: 12 }}
      />
      <DropDownF
        label='Laundry:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'IN-B', label: 'IN-B' },
          { value: 'NO-L', label: 'NO-L' }
        ]}
        selected='ANY'
        style={{ zIndex: 11 }}
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
        style={{ zIndex: 10 }}
      />

      <View style={{height: 200}} ></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  }
});
