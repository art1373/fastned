import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Theme';

const CarCategory = ({category}: {category: string}) => {
  return (
    <View style={styles.categoryView}>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: Colors.richBlack,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
  },
  category: {
    color: 'white',
    ...Fonts.normal,
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default CarCategory;
