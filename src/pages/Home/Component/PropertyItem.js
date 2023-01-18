import { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import SwiperPagination from '../../../Component/SwiperPagination';

const { width, height } = Dimensions.get('window');

export default function PropertyItem({ item, navigation }) {
  const pricePerDuration = item.currency + item.price + '/' + item.duration;
  const [isWishlisted, setIsWishlisted] = useState(item.isWishlisted);

  function removeFromWHishList() {
    setIsWishlisted((pre) => !pre);
  }

  return (
    <Card
      onPress={() =>
        navigation.navigate('OverLap', { use: 'PropertyDetail', meta: { foo: 'bar' } })
      }
    >
      <Card.Title title={item.title} />
      <Card.Content>
        <View style={[styles.overview, { alignItems: 'center' }]}>
          <Text>{item.type}</Text>
          <Text>{item.gender}</Text>
          <Text>{pricePerDuration}</Text>
          <IconButton
            icon={isWishlisted ? 'heart' : 'heart-outline'}
            iconColor='purple'
            size={25}
            onPress={removeFromWHishList}
          />
        </View>

        <SwiperFlatList
          data={item.images.list}
          index={item.images.main}
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
        <View style={styles.overview}>
          <Text>{item.address}</Text>
          <Text>2.2 KM</Text>
        </View>
        <View style={styles.overview}>
          <Text style={{ fontWeight: 'bold' }}>
            Updated {item.updatedAt.value + ' ' + item.updatedAt.unit + 'Ago'}
          </Text>
          <IconButton
            icon='message'
            iconColor='purple'
            size={25}
            onPress={() => navigation.navigate('Chat')}
          />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width,
    height: height / 2
  },
  paginationContainer: {
    alignItems: 'center',
    height: 10
  },
  pagination: {
    borderRadius: 5,
    width: 10,
    height: 10,
    marginHorizontal: 5
  }
});
