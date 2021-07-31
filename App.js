import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Text,
  Button,
} from 'react-native';
import productReducer from './store/reducer/products';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const rootReducer = combineReducers({
  products: productReducer,
});
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Application</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
