import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
      public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async signOut() {
    try {
      const res = await this.afAuth.auth.signOut();
    } catch (err) {
      console.dir(err);
    }
  }
}
