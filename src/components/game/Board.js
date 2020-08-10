import React, {Component} from 'react';
import {majorScale, Pane} from 'evergreen-ui';

import Cell from './Cell';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            selected: 0,
            tints: ['#e4e7eb', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1', 'tint1'],
            chars: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        }
        this.select = this.select.bind(this);
        this.keyInput = this.keyInput.bind(this);
    }

    select(id) {
        if (id === -1) {
            if (this.state.selected !== -1) {
                let newtints = this.state.tints;
                newtints[this.state.selected] = 'tint1';
                this.setState({
                    selected: -1,
                    tints: newtints
                });
            }
        } else {
            let newtints = this.state.tints;
            newtints[this.state.selected] = 'tint1';
            newtints[id] = '#e4e7eb';
            this.setState({
                selected: id,
                tints: newtints
            });
        }
    }

    keyInput(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 && this.state.selected !== -1) {
            let newchars = this.state.chars;
            newchars[this.state.selected] = (e.key).toLowerCase();
            this.setState({
                chars: newchars,
            });
            if (this.state.selected !== 15) {
                this.select(this.state.selected + 1);
            } else {
                this.select(-1);
            }
            this.props.callback(this.state.chars);
        } else if (e.keyCode === 38) {
            if (this.state.selected !== -1 && this.state.selected > 3) {
                this.select(this.state.selected - 4);
            }
        } else if (e.keyCode === 39) {
            if (this.state.selected !== -1 && this.state.selected % 4 !== 3) {
                this.select(this.state.selected + 1);
            }
        } else if (e.keyCode === 37) {
            if (this.state.selected !== -1 && this.state.selected % 4 !== 0) {
                this.select(this.state.selected - 1);
            }
        } else if (e.keyCode === 40) {
            if (this.state.selected !== -1 && this.state.selected < 12) {
                this.select(this.state.selected + 4);
            }
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyInput);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyInput)
    }

    componentDidUpdate() {
        if (this.props.clearing) {
            this.props.clear();
            this.setState({
                chars: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
            });
            this.select(0);
        }
    }

    render() {
        return (
            <Pane height={majorScale(75)} width={majorScale(75)} borderRight>
                <table width="100%" height="100%" style={{tableLayout: "fixed"}}>
                    <tbody>
                        <tr>
                            <td onClick={() => {this.select(0)}}><Cell char={this.state.chars[0]} tint={this.state.tints[0]}/></td>
                            <td onClick={() => {this.select(1)}}><Cell char={this.state.chars[1]} tint={this.state.tints[1]}/></td>
                            <td onClick={() => {this.select(2)}}><Cell char={this.state.chars[2]} tint={this.state.tints[2]}/></td>
                            <td onClick={() => {this.select(3)}}><Cell char={this.state.chars[3]} tint={this.state.tints[3]}/></td>
                        </tr>
                        <tr>
                            <td onClick={() => {this.select(4)}}><Cell char={this.state.chars[4]} tint={this.state.tints[4]}/></td>
                            <td onClick={() => {this.select(5)}}><Cell char={this.state.chars[5]} tint={this.state.tints[5]}/></td>
                            <td onClick={() => {this.select(6)}}><Cell char={this.state.chars[6]} tint={this.state.tints[6]}/></td>
                            <td onClick={() => {this.select(7)}}><Cell char={this.state.chars[7]} tint={this.state.tints[7]}/></td>
                        </tr>
                        <tr>
                            <td onClick={() => {this.select(8)}}><Cell char={this.state.chars[8]} tint={this.state.tints[8]}/></td>
                            <td onClick={() => {this.select(9)}}><Cell char={this.state.chars[9]} tint={this.state.tints[9]}/></td>
                            <td onClick={() => {this.select(10)}}><Cell char={this.state.chars[10]} tint={this.state.tints[10]}/></td>
                            <td onClick={() => {this.select(11)}}><Cell char={this.state.chars[11]} tint={this.state.tints[11]}/></td>
                        </tr>
                        <tr>
                            <td onClick={() => {this.select(12)}}><Cell char={this.state.chars[12]} tint={this.state.tints[12]}/></td>
                            <td onClick={() => {this.select(13)}}><Cell char={this.state.chars[13]} tint={this.state.tints[13]}/></td>
                            <td onClick={() => {this.select(14)}}><Cell char={this.state.chars[14]} tint={this.state.tints[14]}/></td>
                            <td onClick={() => {this.select(15)}}><Cell char={this.state.chars[15]} tint={this.state.tints[15]}/></td>
                        </tr>
                    </tbody>
                </table>
            </Pane>
        );
    }
}

export default Board;