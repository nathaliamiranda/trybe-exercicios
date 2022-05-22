import EvaluationResult from './EvaluationResult';
import Exam from './Exam';
import Order from './Order';
import OrderItem from './OrderItem';
import OrderRepository from './OrderRepository';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';
import Work from './Work';

const danielle = new Student('Danielle Cherem', new Date('2008/08/17'));
const aline = new Student('Aline Abraão', new Date('1994/03/17'));

const math = new Subject('Matemática');

const sarah = new Teacher('Sarah Watson', new Date('1995/01/27'), 4000, math);
console.log(sarah);

const examMath = new Exam(sarah, 25);
const workMath = new Work(sarah, 50);

danielle.addEvaluationResult(new EvaluationResult(examMath, 8));
danielle.addEvaluationResult(new EvaluationResult(workMath, 9));

const sandwiche = new OrderItem('Sanduiche Robife', 40.00);
const juice = new OrderItem('Suco de Laranja', 11.00);
const dessert = new OrderItem('Brownie', 8.50);

const danielleOrder = new Order(danielle, [sandwiche, juice, dessert], 'cartão', 0.10);
const alineOrder = new Order(aline, [sandwiche, juice], 'vale', 0.20);

console.log('Pedido da Danielle: ', danielleOrder);
console.log('Pedido da Aline: ', alineOrder);

const orderRepository = new OrderRepository();
orderRepository.addOrder(danielleOrder);
orderRepository.addOrder(alineOrder);

console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));
