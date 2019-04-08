// Tutorial 2 - Event Module & EventEmitter Class

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name;
  }

  get name(){
    return this._name;
  }
}

let guy = new Person('Shino');
let lady = new Person('Dorfy');

guy.on('name', () => {
    console.log('my name is ' + guy.name);
});
lady.on('name', () => {
    console.log('my name is ' + lady.name);
})

guy.emit('name');
lady.emit('name');
