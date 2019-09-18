import { Action } from '@ngrx/store';
import { SearchState } from '../state/search.state';

export enum SearchActionTypes {
  SET_SEARCH_LANG_FIELD = '[ Search ] Set Search Language Field',
  SET_SEARCH_GENRE_FIELD = '[ Search ] Set Search Genre',
  SET_SEARCH_VOTE_FIELD = '[ Search ] Set Search Vote',
  RESET_SEARCH_FIELDS = '[ Search ] Reset Search Fields'
}

export class SetSearchLangField implements Action {
  readonly type = SearchActionTypes.SET_SEARCH_LANG_FIELD;
  constructor(public payload: string) {}
}

export class SetSearchGenreField implements Action {
  readonly type = SearchActionTypes.SET_SEARCH_GENRE_FIELD;
  constructor(public payload: string) {}
}

export class SetSearchVoteField implements Action {
  readonly type = SearchActionTypes.SET_SEARCH_VOTE_FIELD;
  constructor(public payload: string) {}
}

export class ResetSearchFields implements Action {
  readonly type = SearchActionTypes.RESET_SEARCH_FIELDS;
  constructor(public payload: any) {}
}

export type Actions = SetSearchLangField | ResetSearchFields | SetSearchGenreField | SetSearchVoteField;
