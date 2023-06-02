export class CookieMap{
    cookie;
    constructor(cookie){
        this.cookie = cookie;
        
    }

    getObjectCookie(){
        let cookieMap = this.cookie.split(';')
            .reduce((cookies, cookie) =>{
                const [name,value] = cookie.split('=').map(c=>c.trim()); 
                return {
                    ...cookies, 
                    [name]: value
                };
            }, {}
            );
        return cookieMap;
    }
    
    deleteCookies(){
        let cookies = document.cookie.split(";");
             for (let i = 0; i < cookies.length; i++) {
                 let cookie = cookies[i];
                 let eqPos = cookie.indexOf("=");
                 let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
                 if(name === "COOKIE") 
                    continue;
                 document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
             }
    }
}