import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {Helpers} from '../../Theme';
import CarCategory from '../CarCategory/CarCategory';
import CarInfo from '../CarInfo/CarInfo';

type Props = {
  category: string;
  brand: string;
  model: string;
  image: string;
  version: string;
  onPress?: any;
};
const CardCard = ({category, brand, model, image, onPress, version}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[Helpers.rowCenter]}>
          <Image
            style={styles.image}
            source={{uri: image, priority: Image.priority.high}}
            resizeMode="contain"
          />
          <CarInfo brand={brand} model={model} version={version} />
        </View>
        <CarCategory category={category} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default CardCard;
