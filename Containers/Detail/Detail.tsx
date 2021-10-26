import * as React from 'react';
import * as Redux from 'react-redux';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
import {getSelectedCar} from '../../Stores/Veichles/selectors';
import {useNavigation, useRoute} from '@react-navigation/core';
import {CarInfo, Container} from '../../Components';
import FastImage from 'react-native-fast-image';
import {screen} from '../../utils/metrics';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Theme';

type RouteParams = {
  carId: number;
};
const Detail = () => {
  const {goBack} = useNavigation();
  const {carId} = useRoute().params as RouteParams;
  const veichle = Redux.useSelector(getSelectedCar(carId));

  return (
    <Container>
      <TouchableOpacity style={styles.icon} onPress={() => goBack()}>
        <AntDesign name="closecircleo" size={20} color={Colors.richBlack} />
      </TouchableOpacity>

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
  icon: {
    position: 'absolute',
    top: 10,
    padding: 10,
    zIndex: 10,
  },
});
export default Detail;
