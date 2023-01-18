import { Pagination } from 'react-native-swiper-flatlist';
import { StyleSheet } from 'react-native';
export default function SwiperPagination(props) {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor='purple'
      paginationActiveColor='grey'
    />
  );
}

const styles = StyleSheet.create({
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
