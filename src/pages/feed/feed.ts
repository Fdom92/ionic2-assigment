import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ModalController, NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AppState } from '../../services/app-state';
import { User } from '../../models/user';
import { UserActions } from '../../actions/user.actions';

@Component({
  selector: 'feed-page',
  templateUrl: 'feed.html'
})
export class FeedPage {

  users : Array<User> = [
    {
      Avatar   : 'http://scem-program.user.jacobs-university.de/wp-content/uploads/2014/12/user_male2-256.png',
      FullName : 'User 1',
      Bio      : 'Bio 1',
      Company  : 'Company 1',
      Location : 'Location 1',
      Website  : 'Website 1'
    },
    {
      Avatar   : 'http://scem-program.user.jacobs-university.de/wp-content/uploads/2014/12/user_male2-256.png',
      FullName : 'User 2',
      Bio      : 'Bio 2',
      Company  : 'Company 2',
      Location : 'Location 2',
      Website  : 'Website 2'
    },
    {
      Avatar   : 'http://scem-program.user.jacobs-university.de/wp-content/uploads/2014/12/user_male2-256.png',
      FullName : 'User 3',
      Bio      : 'Bio 3',
      Company  : 'Company 3',
      Location : 'Location 3',
      Website  : 'Website 3'
    }
  ];

  constructor(private navCtrl: NavController,
              private store: Store<AppState>,
              private modalCtrl: ModalController,
              private userActions: UserActions) {

  }

  showDetail(user) {
    this.store.dispatch(this.userActions.selectUser(user));
    this.navCtrl.parent.select(1);
  }
}
