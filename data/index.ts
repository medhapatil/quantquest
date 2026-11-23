import p from './01-probability.json';
import c from './02-combinatorics.json';
import m from './03-mental-math.json';
import k from './04-market-making.json';
import l from './05-linear-algebra-statistics.json';
import g from './06-game-theory-logic.json';

export type Question = {
  id: string;
  category: string;
  subtopic: string;
  difficulty: string;
  text: string;
  inputType: string;
  answer: string;
  options?: string[];
  hint: string;
  explanation: string;
  estimatedSeconds: number;
  tags: string[];
};

export const questions: Question[] = [...p, ...c, ...m, ...k, ...l, ...g];
export const categories = [...new Set(questions.map(q => q.category))];
