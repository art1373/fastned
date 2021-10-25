import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Helpers} from '../../Theme';

type Props = {
  children: React.ReactNode;
};
const Container = ({children}: Props) => (
  <SafeAreaView style={[Helpers.fill]}>
    <View style={[Helpers.fill]}>{children}</View>
  </SafeAreaView>
);

export default Container;
