// 1. A Person Object for Base 
const PersonObj = {
    greeting() {
        return `Hi , ${this.firstName} ${this.lastName}`;
    }
}

//2. Create Theon Object using Person Template
let Theon = Object.create(PersonObj)
Theon.firstName = 'Theon'
Theon.lastName = 'Greyjoy'

// or we can use another method


//3. Add firstName[Theon] and lastName[Greyjoy] 


//4. Display the greeting on Theon Object [remove the string when you have the object]
Obj_C2.innerHTML = Theon.greeting()
