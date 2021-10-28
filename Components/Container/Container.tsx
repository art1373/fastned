import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Helpers} from '../../Theme';

type Props = {
  children: React.ReactNode;
  testID: string;
};
const Container = ({children, testID}: Props) => (
  <SafeAreaView style={[Helpers.fill]} testID={testID}>
    <View style={[Helpers.fill]}>{children}</View>
  </SafeAreaView>
);

export default Container;
