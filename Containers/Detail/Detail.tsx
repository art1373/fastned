import * as React from 'react';
import * as Redux from 'react-redux';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';
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
      <View animation="slideInLeft">
        <FastImage
          source={{uri: veichle?.imageUrl, priority: FastImage.priority.high}}
          style={styles.image}
        />
      </View>
      <View animation="fadeInUp" delay={1000} style={styles.infoView}>
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
const styles = StyleSheet.create({
  image: {
    width: screen.width,
    minHeight: 200,
  },
  infoView: {
    marginTop: 55,
  },
});
export default Detail;
