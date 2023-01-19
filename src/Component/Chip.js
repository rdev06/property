import { useState } from 'react';
import { Chip as ChipF } from 'react-native-paper';

export default function Chip(props) {
  // console.log(props);

  const [isSelected, setIsSeclected] = useState(props.selected);
  return (
    <ChipF
      // key={props.key}
      style={props.style || {}}
      icon={props.icon || (!isSelected && 'plus')}
      selectedColor={isSelected ? 'green' : 'purple'}
      onPress={() => setIsSeclected(true)}
      onClose={
        isSelected &&
        (() => {
          setIsSeclected(false);
          if(props.onClose) return props.onClose();
        })
      }
    >
      {props.label}
    </ChipF>
  );
}
