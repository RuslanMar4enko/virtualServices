import {Component} from '@angular/core';
import {AuthCredential} from '../../modules/AuthCredential';
import {ValidationService} from '../../services/validation/validation.service';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    constructor(private validService: ValidationService, private loginService: LoginService, private router: Router) {
    }

    credential: AuthCredential = new AuthCredential();

    loginForm = new FormGroup({
        email: new FormControl(this.credential.email, [
            Validators.required,
        ]),
        password: new FormControl(this.credential.password, [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    messages = {
        email: {
            required: 'Please insert a email address.',
            default: 'text required'
        },
        password: {
            required: 'Password required',
            minlength: 'Password minLength 6',
            default: 'text required',
        }
    };
    error(tagName: String): string {
        return this.validService.validRequired(tagName, this.loginForm);
    }

    getMessageValid(tagName): string {
        return this.validService.validMessage(tagName, this.loginForm, this.messages);
    }

    async siginIn() {
        console.log('azazazaz');
    }
}
