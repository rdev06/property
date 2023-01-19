import { Text } from 'react-native-paper';
import { ScrollView, StyleSheet, Dimensions, Image, View } from 'react-native';
import SwiperPagination from '../../../Component/SwiperPagination';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { width, height } = Dimensions.get('window');

export default function PropertyDetail(props) {
  props = {
    _id: 1,
    title: '1 Room in 2 BED APARTMENT',
    type: 'PRIVATE',
    gender: 'M',
    price: '500',
    duration: 'M',
    currency: '$',
    isWishlisted: false,
    address: 'Some good address',
    updatedAt: {
      value: 2,
      unit: 'Days'
    },
    distanceFromRef: {
      value: 2.2,
      unit: 'K.M'
    },
    images: {
      main: 0,
      list: [
        'https://images.unsplash.com/photo-1584268522967-c85ae5cf7c5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VufHx8fHx8MTY3Mzk4NTgxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=390',
        'https://images.unsplash.com/photo-1584268522967-c85ae5cf7c5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VufHx8fHx8MTY3Mzk4NTgxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=390',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?boy',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    }
  };
  return (
    <ScrollView>
        <SwiperFlatList
        data={props.images.list}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={item}
            defaultSource={require('../../../../assets/loader.gif')}
          />
        )}
        showPagination
        PaginationComponent={SwiperPagination}
      />
      
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    image: {
        width,
        height: height / 2
    }
})