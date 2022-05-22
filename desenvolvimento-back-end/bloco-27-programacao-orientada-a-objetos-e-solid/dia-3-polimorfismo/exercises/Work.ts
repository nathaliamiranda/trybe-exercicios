import Teacher from './Teacher';
import Evaluation from './Evaluation';

export default class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 11) throw new Error('A pontução deve ser menor que 11 pontos.');

    super.score = value;
  }
}