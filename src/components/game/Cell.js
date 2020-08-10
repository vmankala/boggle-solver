import React, {Component} from 'react';
import {Pane, Text} from 'evergreen-ui';

class Cell extends Component {
    render() {
        return (
            <Pane background={this.props.tint} width="100%" height="100%" paddingTop="50px">
                <Text style={{fontSize:100}} color="muted">{this.props.char || "\xa0"}</Text>
            </Pane>
        );
    }
}

export default Cell;