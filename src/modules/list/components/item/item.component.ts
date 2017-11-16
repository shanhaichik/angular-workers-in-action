import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import { ITodo } from '../../../../ITodo';
import { VALUE_CHANGE_DEBOUNCE_TIME } from '../../../constants';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';


const controls = {
  TITLE: 'title'
};

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: ITodo;
  @Output() onUpdate = new EventEmitter<ITodo>();
  isEdit = false;
  form: FormGroup;
  controls = controls;
  private destroyStream = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      [controls.TITLE]: [this.item.title]
    });

    this.form.valueChanges
      .distinctUntilChanged()
      .debounceTime(VALUE_CHANGE_DEBOUNCE_TIME)
      .takeUntil(this.destroyStream)
      .subscribe(item => {
        this.onUpdate.emit(Object.assign({}, this.item, item));
      });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
