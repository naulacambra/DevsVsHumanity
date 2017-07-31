import Question from 'pages/question'
import Votation from 'pages/votation'
import Result from 'pages/result'

export const routes = [
  { name: 'question', path: '/question', component: Question, display: 'Question' },
  { name: 'votation', path: '/votation', component: Votation, display: 'Votation' },
  { name: 'result', path: '/result', component: Result, display: 'Result' }
];
