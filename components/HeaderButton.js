import React from 'react';
import Colors from '../assets/Colors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MaterialHeaderButton = props => (
  <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={23}
    color="white"
    {...props}
  />
);

export const MaterialHeaderButtons = props => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
  );
};

const styles = StyleSheet.create({});
