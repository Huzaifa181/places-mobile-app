import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
        [],
        //for success
        (_, result) => {
          //   console.log('response load', res);
          resolve(result);
        },
        // for error
        (_, err) => {
          reject();
        },
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)',
        [title, imageUri, address, lat, lng],
        //for success
        (_, result) => {
          console.log('resolve loadjkjk', result);
          console.log('resultolve rowss', result.rows);
          resolve(result);
        },
        // for error
        (_, err) => {
          console.log('error', err);
          reject();
        },
      );
    });
  });
  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        //for success
        (_, result) => {
          console.log('resolve fetch', result);
          console.log('resolve jjj', result.rows);
          resolve(result);
        },
        // for error
        (_, err) => {
          console.log('reject', err);
          reject();
        },
      );
    });
  });
  return promise;
};
