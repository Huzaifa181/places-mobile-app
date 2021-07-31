import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

function PlacesListScreen(props) {
  return <View>PlacesListScreen</View>;
}

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
