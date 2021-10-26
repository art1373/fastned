import * as React from 'react';
import * as Redux from 'react-redux';
import {View} from 'react-native';
import {getSelectedCar} from '../../Stores/Veichles/selectors';
import {useRoute} from '@react-navigation/core';
import {CarInfo, Container} from '../../Components';
import FastImage from 'react-native-fast-image';
import {screen} from '../../utils/metrics';

type RouteParams = {
  cardId: number;
};
const Detail = () => {
  const {cardId} = useRoute().params as RouteParams;
  const veichle = Redux.useSelector(getSelectedCar(cardId));
  console.log({veichle});

  return (
    <Container>
      <FastImage
        source={{uri: veichle?.imageUrl, priority: FastImage.priority.high}}
        style={{width: screen.width, minHeight: 200}}
      />
      <View style={{marginTop: 55}}>
        <CarInfo
          brand={veichle?.brand}
          model={veichle?.model}
          version={veichle?.version}
          charger={veichle?.recommendedCharger}
          connector={veichle?.connectorType}
          link={veichle?.helpUrl}
          moreInfo
        />
      </View>
    </Container>
  );
};

export default Detail;
