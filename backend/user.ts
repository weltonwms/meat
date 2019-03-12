
export class User{
    constructor(public email:string, public name:string, private password:string){}

    matches(anotherUser:User){
        
       return anotherUser && anotherUser.password===this.password;
           
    }

    static getUser(email:string){
        return users[email];
    }
}





const users={
    'welton@gmail.com': new User('welton@gmail.com','Welton', 'welton123'),
    'juliana@gmail.com': new User('juliana@gmail.com','Juliana','juliana123')
}