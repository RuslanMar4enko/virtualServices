import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../../modules/Auth';
import {AuthCredential} from '../../modules/AuthCredential';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    async login(user: AuthCredential): Promise<Auth> {
        try {
            return await this.http.put<Auth>('auth', user).toPromise();
        } catch (e) {

        }
    }
}
