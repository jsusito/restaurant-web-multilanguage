/* eslint-disable no-dupe-class-members */

export class Constants{
       
    MENU1 = "menu 1"
    MENU2 = "menu 2"
    MENU3 = "menu 3"
    TODOS = "todos"
    
    API = "http://localhost:8089/"
    API_USER = "http://localhost:8089/user/"
    API_NEW_USER = "http://localhost:8089/user/new-user" 
    API_IMAGE = "http://localhost:8089/recetas/get-img/"
    API_LOGIN = "http://localhost:8089/login";
    API_RECETAS_ORIENTALES = "http://localhost:8089/recetas/recetas";
    API_RESERVATION = "http://localhost:8089/reservation/"
   
    //Tiempo de expiracion del token 15 minutos 
    TIME_EXPIRED_TOKEN = 60 * 15
    TIME_SECURE_EXIT = 2 //minutos 

    //Horas disponibles para reservar
    TOTAL_TABLES=["1","2","3","4","5","6","7","8"];
    TIME_LUNCH=["12:00","12:30","13:00","13:30","14:00", "19:00","20:00","21:00","22:00"]
    PERSONS_BY_TABLE= [1,2,3,4,5,6];

}