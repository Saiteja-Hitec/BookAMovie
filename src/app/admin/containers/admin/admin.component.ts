import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Store, select } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  theaterList;
  isDestroyed$ = new Subject();
  constructor(private adminService: AdminService, private store: Store<MovieState.State>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(MovieState.theaterList),
        takeUntil(this.isDestroyed$)
      )
      .subscribe(res => (this.theaterList = Object.values(res)));
  }

  addTheater(formData) {
    this.adminService.newTheater(formData);
  }

  ngOnDestroy() {
    this.isDestroyed$.next();
  }
}
