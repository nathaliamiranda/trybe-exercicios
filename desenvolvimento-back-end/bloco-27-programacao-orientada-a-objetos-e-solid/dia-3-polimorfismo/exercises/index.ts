import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const danielle = new Student('Danielle Cherem', new Date('2005/03/17'));
console.log(danielle);

const math = new Subject('Matemática');

const sarah = new Teacher('Sarah Watson', new Date('1995/01/27'), 4000, math);
console.log(sarah);
