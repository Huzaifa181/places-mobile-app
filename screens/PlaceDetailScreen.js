import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PlacesDetailScreen = props => {
  return (
    <View>
      <Text>PlacesDetailScreen</Text>
    </View>
  );
};

PlacesDetailScreen.navigationOptions = navigationData => {
  return {
    headerTitle: navData.navigation.getParams('placeTitle'),
  };
};

const styles = StyleSheet.create();

export default PlacesDetailScreen;
