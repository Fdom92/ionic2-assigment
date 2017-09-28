import { ActionReducer, Action } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';


export function UserReducer(state = [], action) {
    switch(action.type) {
        case UserActions.SELECT_USER:
            return [...state, Object.assign({}, action.payload)];
        default:
            return state;
    };
}
