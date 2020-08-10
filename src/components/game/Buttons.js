import React, {Component} from 'react';
import {majorScale, minorScale, Pane, Button} from 'evergreen-ui';

class Buttons extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.clear = this.clear.bind(this);
    }

    submit() {
        this.props.solve();
    }

    clear() {
        this.props.clear();
    }

    render() {
        return (
            <Pane justifyContent="center" alignItems="center" height={majorScale(10)} width={majorScale(50)}>
                <Button onClick={this.submit} appearance="primary" height={48} marginTop={minorScale(4)} marginRight={minorScale(4)}>Solve</Button>
                <Button onClick={this.clear} appearance="default" height={48} marginTop={minorScale(4)}>Clear</Button>
            </Pane>
        );
    }
}

export default Buttons;