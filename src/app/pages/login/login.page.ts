import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username = '';
    password = '';

    constructor(private router: Router,
                public afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    async login() {
        const {username, password} = this;
        try {
            // const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@correolegal.com', password);
            const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
            console.log('estamos dentro');
            this.router.navigate(['home']);
        } catch (err) {
            console.dir(err);
            switch (err.code) {
                case 'auth/user-not-found':
                    console.log('User not found');
            }
        }
    }
}
