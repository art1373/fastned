import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';

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
      <View
        style={{
          flex: 1,
          padding: 5,
          alignItems: 'flex-end',
          backgroundColor: 'white',
          marginVertical: 10,
        }}>
        <Image
          style={{
            width: 250,
            height: undefined,
            aspectRatio: 1,
          }}
          source={{uri: image, priority: Image.priority.high}}
          resizeMode="contain"
        />
        <Text>
          This is a {category} and its a {brand}-{model} ver:{version}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardCard;
