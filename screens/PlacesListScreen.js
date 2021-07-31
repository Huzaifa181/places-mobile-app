import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Item} from 'react-navigation-header-buttons';
import {MaterialHeaderButtons} from '../components/HeaderButton';

const PlacesListScreen = props => {
  return <Text>PlacesListScreen</Text>;
};

PlacesListScreen.navigationOptions = {
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

const styles = StyleSheet.create();

export default PlacesListScreen;
