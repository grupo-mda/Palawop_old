import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    username: string = '';
    password: string = '';
    cPassword: string = '';

    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    async signUp() {
        const {username, password, cPassword} = this;

        if (password !== cPassword) { return console.error('Eres tonto o qué?'); }

        try {
            // const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@correolegal.com', password);
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password);
            console.log(res);


        } catch (err) {
            console.dir(err);
            // switch (err.code) {
            //     case 'auth/user-not-found':
            //         console.log('User not found');
            // }
        }
    }
}
