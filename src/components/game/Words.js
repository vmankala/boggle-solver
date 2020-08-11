import React, {Component} from 'react';
import {majorScale, Pane, Table} from 'evergreen-ui';

import Word from './Word';

class Words extends Component { // represents the words panel
    render() {
        return (
            <Pane height={majorScale(65)} width={majorScale(50)} borderBottom>
                <Table width="100%" height="100%">
                    <Table.Head>
                        <Table.TextHeaderCell textProps={{size: 500}}>Word</Table.TextHeaderCell>
                        <Table.TextHeaderCell textProps={{size: 500}}>Score</Table.TextHeaderCell>
                    </Table.Head>
                    <Word list={this.props.list}/>
                </Table>
            </Pane>
        );
    }
}

export default Words;