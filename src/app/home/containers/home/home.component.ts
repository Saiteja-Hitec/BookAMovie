import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import * as UserState from '../../../reducers/index';

import { HomeService } from '../../services/home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  nowPlayingMoviesList: any = [];
  upcomingMoviesList: any = [];
  genresList: any = [];
  theaterList: any = [];
  userPreference: any = [];
  componentDestroyed$ = new Subject();

  constructor(
    private store: Store<MovieState.State>,
    private userStore: Store<UserState.State>,
    private homeService: HomeService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getNewSetofNowPlayingMovies(1);
    this.store
      .pipe(
        select(MovieState.nowPlayingMoviesSelector),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(result => {
        this.nowPlayingMoviesList = result;
        this.cdRef.detectChanges();
      });

    this.store
      .pipe(
        select(MovieState.upcomingMovieSelector),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(result => {
        this.upcomingMoviesList = result;
        this.cdRef.detectChanges();
      });

    this.store
      .pipe(
        select(MovieState.theaterList),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(result => {
        this.theaterList = Object.values(result);
        this.cdRef.detectChanges();
      });

    this.userStore
      .pipe(
        select(UserState.userSelector),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(result => {
        this.userPreference = result.preference;
        this.cdRef.detectChanges();
      });
    this.genresList = this.homeService.getGenres();
  }

  getNewSetofNowPlayingMovies(page) {
    this.homeService.getNowshowing(page);
  }
  getNewSetofComingMovies(page) {
    this.homeService.getUpcomingMovies(page);
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
  }
}
