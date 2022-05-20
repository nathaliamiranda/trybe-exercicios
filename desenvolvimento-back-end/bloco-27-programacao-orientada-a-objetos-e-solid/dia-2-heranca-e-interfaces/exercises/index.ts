import Person from './Person';
import Student from './Student';
import IEmployee from './interfaces/IEmployee';


const laura = new Person('Laura Oliveira', new Date('1980/01/25'));
const theo = new Person('Theo Andrade', new Date('2005/10/02'));

console.log(laura);
console.log(theo);

const maria = new Student('Maria Simões', new Date('2007/04/27'));
const marcio = new Student('Marcio Oliveira', new Date('2008/05/16'));
const joyce = new Student('Joyce Carvalho', new Date('2009/08/03'));
const bruna = new Student('Bruna Passos', new Date('2006/11/07'));

maria.examsGrades = [10, 8, 7, 8];
marcio.examsGrades = [7, 6, 7, 8];
joyce.examsGrades = [7, 8, 9, 8];
bruna.examsGrades = [7, 7, 9, 8];

maria.worksGrades = [10, 8];
marcio.worksGrades = [8, 9];
joyce.worksGrades = [7, 8];
bruna.worksGrades = [10, 7];


console.log(maria);
console.log(marcio);
console.log(joyce);
console.log(bruna);