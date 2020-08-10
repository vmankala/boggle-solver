import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Solver from './structures/solver';
import Board from './structures/board';
import Trie from './structures/trie';
import {dict} from './structures/dictionary';

var trie = new Trie();
var board = new Board([
  ['a', 'p', 'f', 'e'],
  ['g', 'g', 'p', 'n'],
  ['u', 'o', 'l', 'c'],
  ['d', 'r', 'e', 'e']
]);

var date = Date.now();

for (let i = 0, l = dict.length; i < l; i++) {
    trie.addWord(dict[0]);
    dict.shift();
}

console.log('done creating dictionary in ' + (Date.now() - date) + ' ms');

date = Date.now();

var solver = new Solver(trie);
console.log(board.getBoard());
console.log(solver.solve(board));

console.log('done generating solutions in ' + (Date.now() - date) + ' ms');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);