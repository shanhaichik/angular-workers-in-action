import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import * as firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/storage';
import {ITodo} from '../ITodo';


const config = {
  apiKey: 'AIzaSyAoq34BO0CWSoFBq_wCKZIu_FXyPViOYos',
  databaseURL: 'https://shop-list-aa69d.firebaseio.com',
  storageBucket: 'gs://shop-list-aa69d.appspot.com'
};

@Injectable()
export class ApiService {
  private database;
  private storage;

  constructor(private store: StoreService) {
    firebase.initializeApp(config);
    this.database = firebase.database();
    this.storage = firebase.storage().ref();
  }

  loadData() {
    this.database.ref('list/').once('value')
      .then(snapshot => this.store.init(snapshot.val()));
  }

  updateItem(item) {
    this.database.ref(`list/${item.id}`).set(item);
  }

  uploadFile(file: ArrayBuffer, name: string, item: ITodo) {
    this.storage.child(name).put(file).then(snapshot => {
      item.url = snapshot.downloadURL;

      this.updateItem(item);
    });
  }
}
