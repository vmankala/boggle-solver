import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <header class="Header">
                <h1>Boggle Solver</h1>
            </header>
        );
    }
}

export default Header;