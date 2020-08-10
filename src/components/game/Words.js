import React, {Component} from 'react';
import {majorScale, Pane, Table} from 'evergreen-ui';

class Words extends Component {
    render() {
        return (
            <Pane height={majorScale(65)} width={majorScale(50)} borderBottom>
                <Table width="100%" height="100%">
                    <Table.Head>
                        <Table.TextHeaderCell>Word</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Score</Table.TextHeaderCell>
                    </Table.Head>
                </Table>
            </Pane>
        );
    }
}

export default Words;