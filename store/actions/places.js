import * as FileSystem from 'expo-file-system';
import {fetchPlaces, insertPlace} from '../../helpers/db';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';

export const addPlace = (title, image) => {
  return async dispatch => {
    console.log('add');
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        'Dummy Address',
        15.6,
        12.3,
      );
      console.log('add place', dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {id: 'jks', title: title, image: image},
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      console.log('load places', dbResult);
      dispatch({type: SET_PLACES, places: dbResult.rows._array});
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
