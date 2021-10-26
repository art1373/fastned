import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {Helpers, Colors, Fonts} from '../../Theme';

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
          <View style={styles.infoWrap}>
            <Text style={styles.brand}>{brand}</Text>
            <Text style={styles.modelVer}>{model}</Text>
            <Text style={styles.modelVer}>ver:{version}</Text>
          </View>
        </View>
        <View style={styles.categoryView}>
          <Text style={styles.category}>{category}</Text>
        </View>
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
  infoWrap: {
    marginHorizontal: 20,
  },
  brand: {...Fonts.h4Bold},
  modelVer: {...Fonts.input},
  categoryView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: Colors.richBlack,
    width: 80,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  category: {
    color: 'white',
  },
});

export default CardCard;
