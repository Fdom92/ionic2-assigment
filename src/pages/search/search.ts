import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AppState } from '../../services/app-state';
import { User } from '../../models/user';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})
export class SearchPage {

  selectedUser: User;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {
    this.store.select(state => {
      return state;
    }).subscribe(state => {
      this.selectedUser = state.user;
    });
  }

}
