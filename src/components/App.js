import React, {Component} from 'react';

import Header from './header/Header';
import Board from './board/Board';

class App extends Component {
  constructor() {
      super();
      // todo: state
  }

  render() {
      return (
        <React.Fragment>
          <Header/>
          <Board/>
        </React.Fragment>
      );
  }
}

export default App;
