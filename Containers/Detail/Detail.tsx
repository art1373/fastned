import * as React from 'react';
import * as Redux from 'react-redux';
import {View, Text} from 'react-native';
import {getSelectedCar} from '../../Stores/Veichles/selectors';
import {useRoute} from '@react-navigation/core';

type RouteParams = {
  cardId: number;
};
const Detail = () => {
  const {cardId} = useRoute().params as RouteParams;
  const veichle = Redux.useSelector(getSelectedCar(cardId));
  console.log({veichle});

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
