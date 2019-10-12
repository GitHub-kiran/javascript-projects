class Person {
    name: string,
    age:number,
    
    speak() {
        consoel.log('speaking.......);
    }
}

class student extends Person {

}

let s = student();
s.nmae = 'kiean'
s.age = 25

console.log(s)