
class User{

    constructor( name, surname){
        this.name = name
        this.surname = surname
       

    }
   
    print(){
        console.log(`name - ${this.name}; фамилия - ${this.surname}`);
        
    }
}


// let user = new User("Muhammaddior", "Esanbaev")
// console.log(user);
class Student extends User{
    #password
    constructor(name,surname, username, password){
super(name, surname)
this.username = username
this.#password = password
}
print(password){
    if (password === this.#password) {
        console.log (`name-${this.username},  username-${this.username}`);
  }  
}
}
let student = new Student("Muhammaddior", "Esanbaev", "Dior", '34343')
// console.log(student);
student.print('34343');