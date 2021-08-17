import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Alert,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapPreview from './MapPreview';

const LoactionPicker = props => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions',
        'You need to grant location apermissions to use this app.',
        [
          {
            text: 'Okay',
          },
        ],
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeInterval: 5000,
        accuracy: Location.Accuracy.High,
      });
      console.log(location);
      setIsFetching(false);
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      console.log(err);
      Alert(
        'Could fetch location!',
        'Please try again later or pick a location on a map',
        [{text: 'Okay'}],
      );
    }
  };
  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No Location choosen yet</Text>
        )}
      </MapPreview>
      <Button
        title="Get User Location"
        color={Colors.primary}
        onPress={getLocationHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    height: 150,
    borderColor: '#ccc',
  },
});

export default LoactionPicker;
