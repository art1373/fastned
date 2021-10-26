import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Veichle} from '../../Stores/Veichles/types';
import {Colors} from '../../Theme';
import {HomeRoutes} from '../../utils/constants';
import CardCard from '../CardCard/CardCard';

type Props = {
  veichles: Veichle[];
};
const CarList = ({veichles}: Props) => {
  const navigation = useNavigation();

  const handleCarPressed = React.useCallback(
    (cardId: number) =>
      navigation.navigate(HomeRoutes.DETAIL, {
        cardId,
      }),
    [navigation],
  );

  const renderItem = React.useCallback(
    ({item}: {item: Veichle}) => (
      <CardCard
        key={item.id}
        brand={item.brand}
        model={item.model}
        category={item.category}
        image={item.imageUrl}
        version={item.version}
        onPress={() => handleCarPressed(item.id)}
      />
    ),
    [handleCarPressed],
  );

  return (
    <>
      {veichles.length ? (
        <FlatList data={veichles} renderItem={renderItem} />
      ) : (
        <ActivityIndicator
          size={40}
          style={styles.loading}
          color={Colors.primary}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    marginTop: '45%',
  },
});

export default CarList;
