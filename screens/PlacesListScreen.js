import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Item} from 'react-navigation-header-buttons';
import {MaterialHeaderButtons} from '../components/HeaderButton';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/actions/places';

const PlacesListScreen = props => {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}></FlatList>
  );
};

PlacesListScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'All Places',
    headerRight: (
      <MaterialHeaderButtons>
        <Item
          title="Save"
          iconName="favorite"
          onPress={() => {
            navigationData.navigation.navigate('NewPlace');
          }}
        />
      </MaterialHeaderButtons>
    ),
  };
};

const styles = StyleSheet.create();

export default PlacesListScreen;
