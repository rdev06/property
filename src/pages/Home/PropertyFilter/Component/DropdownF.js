import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text } from 'react-native';
import { useState } from 'react';

export default function DropDownF({ label, items, selected, style }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selected);
  const [item, setItem] = useState(items);
  return (
    <View style={style}>
      <Text style={{ fontWeight: 'bold', width: 80 }}>{label}</Text>
      <View style={{ width: 100 }} >
        <DropDownPicker
          open={open}
          value={value}
          items={item}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItem}
          showTickIcon={true}
          dropDownDirection="BOTTOM"
        />
      </View>
    </View>
  );
}
