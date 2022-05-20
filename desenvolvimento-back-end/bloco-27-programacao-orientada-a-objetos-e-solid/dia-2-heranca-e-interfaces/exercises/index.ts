import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const laura = new Person('Laura Oliveira', new Date('1980/01/25'));
const theo = new Person('Theo Andrade', new Date('2005/10/02'));

console.log(laura);
console.log(theo);

const maria = new Student('Maria Simões', new Date('2007/04/27'));
const marcio = new Student('Marcio Oliveira', new Date('2008/05/16'));

maria.examsGrades = [10, 8, 7, 8];
marcio.examsGrades = [7, 6, 7, 8];

maria.worksGrades = [10, 8];
marcio.worksGrades = [8, 9];

console.log(maria);
console.log(marcio);

const history = new Subject('História');
const math = new Subject('Matemática');

const carlos = new Teacher('Carlos Andrade', new Date('1995/05/15'), 4000, history);
const mariana = new Teacher('Mariana Fernandes', new Date('1988/07/27'), 4000, math);

console.log(carlos);
console.log(mariana);


