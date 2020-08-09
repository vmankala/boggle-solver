import React, {Component} from 'react';
import Cell from '../cell/Cell';
import './Board.css';

class Board extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div class="Board">
                <Cell/> <Cell/> <Cell/> <Cell/> <br/>
                <Cell/> <Cell/> <Cell/> <Cell/> <br/>
                <Cell/> <Cell/> <Cell/> <Cell/> <br/>
                <Cell/> <Cell/> <Cell/> <Cell/> <br/>   
            </div>
        );
    }
}

export default Board;