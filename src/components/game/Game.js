import React, {Component} from 'react';
import {majorScale, Pane, Heading} from 'evergreen-ui';

import Board from './Board';
import Words from './Words';
import Buttons from './Buttons';

import Solver from '../../structures/solver';
import BoardStruct from '../../structures/board';
import Trie from '../../structures/trie';
import {dict} from '../../structures/dictionary';

class Game extends Component {
    constructor() {
        super();
        this.state = {board1d: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], solutions: [], clearing: false};
        this.getBoard = this.getBoard.bind(this);
        this.runSolver = this.runSolver.bind(this);
        this.clearWords = this.clearWords.bind(this);
        this.clearChars = this.clearChars.bind(this);
    }

    componentDidMount() { // set up the trie
        this.trie = new Trie();
        this.board = new BoardStruct();

        let date = Date.now();
        for (let i = 0, l = dict.length; i < l; i++) {
            this.trie.addWord(dict[0]);
            dict.shift();
        }
        console.log('done creating dictionary in ' + (Date.now() - date) + ' ms');
    }

    getBoard(data) { // callback passed to Board.js to collect the board
        this.setState({
            board1d: data
        });
    }

    runSolver() { // callback to submit button in Buttons.js
        let date = Date.now();

        for (let i = 0; i < this.state.board1d.length; i++) {
            this.board.setCell(i % 4, Math.floor(i / 4), this.state.board1d[i]);
        }
        let solver = new Solver(this.trie);
        this.setState({
            solutions: solver.solve(this.board)
        });

        console.log('done generating solutions in ' + (Date.now() - date) + ' ms');
    }

    clearWords() { // callback to Words.js panel - clears the panel
        this.setState({
            solutions: [],
            clearing: true
        });
    }

    clearChars() { // callback to Board.js panel - clears the baord
        this.setState({
            clearing: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <Heading fontSize={60} color="#66788a">Boggle Solver</Heading> <br/> <br/>
                <Pane height={majorScale(75)} width={majorScale(125)} border="default" display="flex" elevation={1} margin="auto">
                    <Board callback={this.getBoard} clearing={this.state.clearing} clear={this.clearChars}/>
                    <Pane height={majorScale(75)} width={majorScale(50)} display="flex" flexDirection="column">
                        <Words list={this.state.solutions}/>
                        <Buttons solve={this.runSolver} clear={this.clearWords}/>
                    </Pane>
                </Pane>
            </React.Fragment>
        );
    }
}

export default Game;