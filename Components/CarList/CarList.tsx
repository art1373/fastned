import * as React from 'react';
import * as Redux from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, ActivityIndicator, TextInput, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Veichle} from '../../Stores/Veichles/types';
import {Colors, Helpers} from '../../Theme';
import {HomeRoutes} from '../../utils/constants';
import CardCard from '../CardCard/CardCard';
import {Picker as RNPickerSelect} from '@react-native-community/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getSearchCategory, getSearchText} from '../../Stores/Search/selectors';
import {setSearchCategory, setSearchText} from '../../Stores/Search/actions';

type Props = {
  veichles: Veichle[];
};
const CarList = ({veichles}: Props) => {
  const navigation = useNavigation();
  const dispatch = Redux.useDispatch();
  const searchText = Redux.useSelector(getSearchText);
  const searchCategory = Redux.useSelector(getSearchCategory);

  const handleCarPressed = React.useCallback(
    (carId: number) =>
      navigation.navigate(HomeRoutes.DETAIL, {
        carId,
      }),
    [navigation],
  );

  const renderItem = React.useCallback(
    ({item}: {item: Veichle}) => (
      <CardCard
        key={item.id}
        brand={item.brand}
        model={item.model}
        category={item.category}
        image={item.imageUrl}
        version={item.version}
        onPress={() => handleCarPressed(item.id)}
      />
    ),
    [handleCarPressed],
  );

  return (
    <>
      {veichles.length ? (
        <>
          <View style={[Helpers.row, Helpers.mainSpaceAround]}>
            <View style={styles.input}>
              <TextInput
                testID="search-input"
                defaultValue={searchText}
                onChangeText={value => dispatch(setSearchText(value))}
              />
              <AntDesign
                name="search1"
                size={20}
                color={Colors.primary}
                style={styles.searchIcon}
              />
            </View>
            <RNPickerSelect
              selectedValue={searchCategory}
              onValueChange={(itemValue: any) =>
                dispatch(setSearchCategory(itemValue))
              }
              style={[Helpers.fill]}>
              <RNPickerSelect.Item label="All" value="" />
              <RNPickerSelect.Item label="Car" value="Car" />
              <RNPickerSelect.Item label="Van" value="Van" />
              <RNPickerSelect.Item label="Motorcycle" value="Motorcycle" />
            </RNPickerSelect>
          </View>
          <FlatList data={veichles} renderItem={renderItem} />
        </>
      ) : (
        <ActivityIndicator
          size={40}
          style={styles.loading}
          color={Colors.primary}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    marginTop: '45%',
  },
  input: {
    borderWidth: 2,
    paddingVertical: 10,
    width: '50%',
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  searchIcon: {
    position: 'absolute',
    right: 5,
    top: 8,
  },
});

export default CarList;
