import { useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import List from '../list.json';
import PropertyItem from '../Component/PropertyItem';
import { View, ScrollView, StyleSheet } from 'react-native';
import Chip from '../../../Component/Chip';
import { IconButton } from 'react-native-paper';

export default function PropertyList({ navigation }) {
  const [filter, setFilter] = useState(['Balcony', 'Wifi']);

  return (
    <ScrollView>
      <View style={styles.filterChips}>
        <IconButton
          icon='filter'
          iconColor='purple'
          size={20}
          onPress={() => navigation.navigate('PropertyFilter')}
        />
        <ScrollView
        horizontal={true}
        >
        {filter.map((e, i) => (
          <Chip
            style={styles.chip}
            key={i}
            label={e}
            selected={true}
            onClose={() => setFilter((ff) => ff.filter((_, j) => i != j))}
          />
        ))}
        </ScrollView>
      </View>
      <FlatGrid
        itemDimension={400}
        data={List}
        renderItem={(item) => <PropertyItem {...item} navigation={navigation} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterChips: {
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  chip : {
    height: 30,
    alignSelf: 'center',
    marginHorizontal: 5
  }
});
