import * as searchActions from './../actions/search.actions';
import { SearchState } from '../state/search.state';

const initialState: SearchState = {
  language: null,
  genre: null,
  vote_count: null
};
export function SearchReducer(state = initialState, action: searchActions.Actions) {
  switch (action.type) {
    case searchActions.SearchActionTypes.SET_SEARCH_LANG_FIELD: {
      return {
        ...state,
        language: action.payload
      };
    }

    case searchActions.SearchActionTypes.SET_SEARCH_GENRE_FIELD: {
      return {
        ...state,
        genre: action.payload
      };
    }

    case searchActions.SearchActionTypes.SET_SEARCH_VOTE_FIELD: {
      return {
        ...state,
        genre: action.payload
      };
    }
  }
}
