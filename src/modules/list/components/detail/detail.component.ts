import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

import { ApiService } from '../../../../services/api.service';
import { StoreService } from '../../../../services/store.service';
import { ITodo } from '../../../../ITodo';

import { VALUE_CHANGE_DEBOUNCE_TIME } from '../../../constants';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';

const controls = {
  DESCRIPTION: 'description'
};

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailInfo: ITodo;
  isEdit = false;
  form: FormGroup;
  controls = controls;
  private destroyStream = new Subject<void>();

  constructor(private api: ApiService,
              private store: StoreService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.init(params.id);
    });
  }

  init(id: string) {
    this.detailInfo = this.store.getItem(+id);

    if (!this.detailInfo) {
      return this.router.navigate(['/list']);
    }

    this.form = this.fb.group({
      [controls.DESCRIPTION]: [this.detailInfo.description]
    });

    this.form.valueChanges
      .distinctUntilChanged()
      .debounceTime(VALUE_CHANGE_DEBOUNCE_TIME)
      .takeUntil(this.destroyStream)
      .subscribe(item => {
        this.api.updateItem(Object.assign({}, this.detailInfo, item));
      });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  onFileChange(e) {
    const file  = e.target.files[0];
    const reader =  new FileReader();

    reader.onload = () => {
      this.api.uploadFile(reader.result, file.name, this.detailInfo);
    };

    reader.readAsArrayBuffer(file);
  }
}
