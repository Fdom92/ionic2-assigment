import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/toPromise';

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
          this.users.push(this.createUser(userData));
        });
      })
    });
  }

  doInfinite(): Promise<any> {
    return this.http.get('https://api.github.com/users?since=' + this.users.length)
      .toPromise()
      .then((users: Array<any>) => {
        return users.map(user => {
          this.http.get(user.url).toPromise()
          .then((userData: any) => {
            this.users.push(this.createUser(userData));
          })
          .catch(error => console.log(error));
        })
    })
    .catch(error => console.log(error));
  }

  createUser(userData): User {
    return {
      Avatar   : userData.avatar_url,
      FullName : userData.name         || 'Not provided',
      Bio      : userData.bio          || 'Not provided',
      Company  : userData.company      || 'Not provided',
      Location : userData.location     || 'Not provided',
      Website  : userData.blog         || undefined,
      Login    : userData.login        || 'Not provided',
      Repos    : userData.public_repos || 0
    };
  }

  showDetail(user) {
    this.store.dispatch(this.userActions.selectUser(user));
    this.navCtrl.parent.select(1);
  }
}
