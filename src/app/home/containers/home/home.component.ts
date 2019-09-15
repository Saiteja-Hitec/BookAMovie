import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import * as UserState from '../../../reducers/index';

import { HomeService } from '../../services/home.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  nowPlayingMoviesList: any = [];
  upcomingMoviesList: Observable<any[]>;
  genresList: any = [];
  theaterList: Observable<any[]>;
  userPreference: Observable<User>;

  constructor(
    private store: Store<MovieState.State>,
    private userStore: Store<UserState.State>,
    private homeService: HomeService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getNewSetofNowPlayingMovies(1);
    this.nowPlayingMoviesList = this.store.pipe(select(MovieState.nowPlayingMoviesSelector));

    this.upcomingMoviesList = this.store.pipe(select(MovieState.upcomingMovieSelector));

    this.theaterList = this.store.pipe(
      select(MovieState.theaterList),
      map(res => Object.values(res))
    );

    this.userPreference = this.userStore.pipe(select(UserState.userSelector));

    this.genresList = this.homeService.getGenres();
  }

  getNewSetofNowPlayingMovies(page) {
    this.homeService.getNowshowing(page);
  }
  getNewSetofComingMovies(page) {
    this.homeService.getUpcomingMovies(page);
  }
}
