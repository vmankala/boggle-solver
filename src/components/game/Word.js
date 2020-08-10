import React, {Component} from 'react';
import {majorScale, Table} from 'evergreen-ui';

class Word extends Component {
    score(length) {
        if (length >= 8)
            return 11;
        else if (length === 7)
            return 5;
        else if (length === 6)
            return 3;
        else if (length === 5)
            return 2;
        else if (length <= 4)
            return 1;
    }

    render() {
        const wordlist = this.props.list.map((word, index) => 
            <Table.Row key={index}>
                <Table.TextCell textProps={{size: 500}}>
                    {word}
                </Table.TextCell>
                <Table.TextCell textProps={{size: 500}}>
                    {this.score(word.length)}
                </Table.TextCell>
            </Table.Row>
        );
        
        return (
            <Table.Body height={majorScale(61)}>
                {wordlist}
            </Table.Body>
        )
    }
}

export default Word;