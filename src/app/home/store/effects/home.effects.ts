import { HomeService } from '../../services/home.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as homeActions from './../actions/home.action';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as MovieState from './../../../reducers/index';

@Injectable()
export class HomeEffects {
  constructor(private http: HttpClient, private actions$: Actions, private store: Store<MovieState.State>) {}
  @Effect()
  getMovies$ = this.actions$.pipe(
    ofType<homeActions.GetCreditsUrl>(homeActions.EMovieActionTypes.GET_CREDITS_URL),
    switchMap(action => {
      const { creditsUrl, movies, element } = action.payload;
      return this.http.get(creditsUrl).pipe(
        map(res => {
          element.casts = res['cast'].splice(0, 5);
          element.crews = res['crew'].splice(0, 5);
        })
      );
    })
  );
}
