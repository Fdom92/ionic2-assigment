import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
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

  users : Array<User> = [];

  constructor(private navCtrl: NavController,
              private store: Store<AppState>,
              private userActions: UserActions,
              private http: HttpClient) {

  }

  ionViewDidEnter() {
    this.http.get('https://api.github.com/users').subscribe((users: Array<any>) => {
      users.map(user => {
        this.http.get(user.url).subscribe((userData: any) => {
          let singleUser: User = {
            Avatar   : userData.avatar_url,
            FullName : userData.name         || 'Not provided',
            Bio      : userData.bio          || 'Not provided',
            Company  : userData.company      || 'Not provided',
            Location : userData.location     || 'Not provided',
            Website  : userData.blog         || undefined,
            Login    : userData.login        || 'Not provided',
            Repos    : userData.public_repos || 0
          };
          this.users.push(singleUser);
        });
      })
    });
  }

  showDetail(user) {
    this.store.dispatch(this.userActions.selectUser(user));
    this.navCtrl.parent.select(1);
  }
}
