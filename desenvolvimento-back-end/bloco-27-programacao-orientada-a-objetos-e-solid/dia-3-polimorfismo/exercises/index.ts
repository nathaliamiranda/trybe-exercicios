import EvaluationResult from './EvaluationResult';
import Exam from './Exam';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';
import Work from './Work';

const danielle = new Student('Danielle Cherem', new Date('2008/0/17'));
console.log(danielle);

const math = new Subject('Matemática');

const sarah = new Teacher('Sarah Watson', new Date('1995/01/27'), 4000, math);
console.log(sarah);

const examMath = new Exam(sarah, 25);
const workMath = new Work(sarah, 50);

danielle.addEvaluationResult(new EvaluationResult(examMath, 8));
danielle.addEvaluationResult(new EvaluationResult(workMath, 9));