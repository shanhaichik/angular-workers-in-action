import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { ITodo } from '../../ITodo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: ITodo[] = [];
  inProgress = true;

  constructor(private api: ApiService,
              private store: StoreService) { }

  ngOnInit() {
    this.api.loadData();

    this.store.onUpdate
      .subscribe(list => {
        this.inProgress = false;

        this.list = [].concat(list);
      });
  }

  onUpdateItem(item: ITodo) {
    this.api.updateItem(item);
  }

}
