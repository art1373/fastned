import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Fonts, Colors, Helpers} from '../../Theme';
import {metrics, screen} from '../../utils/metrics';

type Props = {
  brand?: string;
  model?: string;
  version?: string;
  charger?: string;
  connector?: string;
  link?: string;
  moreInfo?: boolean;
};
const CarInfo = ({
  brand,
  model,
  version,
  moreInfo = false,
  charger,
  link,
  connector,
}: Props) => {
  const onPress = React.useCallback(async url => {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      return Linking.openURL(url);
    }

    return showMessage({
      type: 'danger',
      message: 'uh oh!',
      description: 'seems like the link is broken',
    });
  }, []);

  return (
    <View style={styles.infoWrap}>
      <Text testID="brand" style={styles.brand}>
        {brand}
      </Text>
      <Text numberOfLines={2} style={styles.modelVer}>
        model: {model}
      </Text>
      <Text style={styles.modelVer}>ver: {version}</Text>
      {moreInfo && (
        <View>
          <Text style={styles.modelVer}>Charger: {charger}</Text>
          <Text style={styles.modelVer}>Connector: {connector}</Text>
        </View>
      )}
      {moreInfo && (
        <TouchableOpacity style={styles.btn} onPress={() => onPress(link)}>
          <Text style={styles.btnText}>Get more info</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  infoWrap: {
    marginHorizontal: 20,
  },
  brand: {...Fonts.h4Bold},
  modelVer: {...Fonts.normalBold},
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
  btn: {
    ...Helpers.rowCenter,
    marginVertical: metrics.isAndroid ? '70%' : '100%',
    alignSelf: 'center',
    width: screen.width / 1.1,
    backgroundColor: Colors.richBlack,
    paddingVertical: 8,
    borderRadius: 50,
  },
  btnText: {
    ...Fonts.h3bold,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
export default CarInfo;
