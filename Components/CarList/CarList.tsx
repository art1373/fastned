import * as React from 'react';
import * as Redux from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, ActivityIndicator, TextInput, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Veichle} from '../../Stores/Veichles/types';
import {Colors, Helpers} from '../../Theme';
import {HomeRoutes} from '../../utils/constants';
import CardCard from '../CardCard/CardCard';
import RNPickerSelect from 'react-native-picker-select';
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
              value={searchCategory}
              onValueChange={value => dispatch(setSearchCategory(value))}
              items={[
                {label: 'Car', value: 'Car'},
                {label: 'Van', value: 'Van'},
                {label: 'Motorcycle', value: 'Motorcycle'},
              ]}
              style={pickerStyles}
            />
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

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: Colors.richBlack,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
};

export default CarList;
