import React, {Component} from 'react';
import {majorScale, minorScale, Pane, Button} from 'evergreen-ui';

class Buttons extends Component {
    render() {
        return (
            <Pane justifyContent="center" alignItems="center" height={majorScale(10)} width={majorScale(50)}>
                <Button appearance="primary" height={40} marginTop={minorScale(5)} marginRight={minorScale(3)}>Solve</Button>
                <Button appearance="default" height={40} marginTop={minorScale(5)}>Clear</Button>
            </Pane>
        );
    }
}

export default Buttons;