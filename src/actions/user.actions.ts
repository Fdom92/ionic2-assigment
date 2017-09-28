import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User } from '../models/user';
import { CustomAction } from '../actions/custom.action';

@Injectable()
export class UserActions {

    static SELECT_USER = 'SELECT_USER';
    selectUser(user: User): CustomAction {
        return {
            type: UserActions.SELECT_USER,
            payload: user
        }
    }
}
