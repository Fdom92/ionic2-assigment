import { UserActions } from '../actions/user.actions';


export function UserReducer(state = {}, action) {
    switch(action.type) {
        case UserActions.SELECT_USER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    };
}
