import { Constants } from "../../../utils/Constants";

export class Token{
    user;
    password;
    token;
    loggedIn;
    statuscode;
    apiLogin;
    apiUser;
    authorities;

    constructor(user, password){
        this.user = user;
        this.password = password;
        this.loggedIn = false;
        this.apiLogin = new Constants().API_LOGIN;
        this.apiUser = new Constants().API_USER;
    }

    requestToken(){
        const timeExpiredToken = new Constants().TIME_EXPIRED_TOKEN;    
        let bodyLogin = {
            username: this.user,
            password: this.password
        }

        return fetch(this.apiLogin, {
            method : 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyLogin)
        })
        .then(response => {
            this.statuscode = response.status;
            return response.json()})
        
        .then(response => {
            document.cookie = `token=${response.token};max-age=${timeExpiredToken};samesite=strict`;
            document.cookie = `user=${this.user};max-age=${timeExpiredToken};samesite=strict`;
            this.token = response.token;
            this.loggedIn = true;
            
        })
        .then(() => this.#getAuthorities())
        .then(() => document.cookie = `authorities=${this.authorities};max-age=${timeExpiredToken};samesite=strict`)
        .catch(() => {
            this.loggedIn = false;
        });
    }

    //recuperar las autoridades y guardar en el contexto, para enseñar solo una parte si es admin
    #getAuthorities(){
         return fetch(this.apiUser + this.user, {
            headers:{
                "authorization": `Bearer ${this.token}`
            }})
            .then(response => response.json())
            .then(body => {
                let roles = [];
                body.roles.forEach(element => {
                    roles.push(element)
                });
                this.authorities = roles;
            })
            .catch(error=> console.error(error))
    }
}