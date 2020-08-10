import React, {Component} from 'react';
import {majorScale, Pane} from 'evergreen-ui';

import Board from './Board';
import Words from './Words';
import Buttons from './Buttons';

class Game extends Component {
    render() {
        return (
            <Pane height={majorScale(75)} width={majorScale(125)} border="default" display="flex" elevation={1} margin="auto">
                <Board/>
                <Pane height={majorScale(75)} width={majorScale(50)} display="flex" flexDirection="column">
                    <Words/>
                    <Buttons/>
                </Pane>
            </Pane>
        );
    }
}

export default Game;