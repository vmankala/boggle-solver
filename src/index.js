import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Board from './structures/board';
import Trie from './structures/trie';
import {dict} from './structures/dictionary';
/*
var trie = new Trie();

var date = Date.now();

for (let i = 0, l = dict.length; i < l; i++) {
    trie.addWord(dict[0]);
    dict.shift();
}

console.log('done', Date.now() - date);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);