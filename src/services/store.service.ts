import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ITodo } from '../ITodo';



@Injectable()
export class StoreService {
  private list: ITodo[] = [];
  onUpdate: Subject<ITodo[]> = new Subject<ITodo[]>();

  init(items) {
    this.list = [].concat(items);
    this.onUpdate.next(this.list);
  }

  addItem(item: ITodo) {
    this.list.push(item);
    this.onUpdate.next(this.list);
  }

  updeteItem() {

  }

  getItem(id: number): ITodo {
    return this.list.filter(el => el.id === id)[0];
  }
}
