import React from 'react';
import {connect} from 'react-redux';

import css from './app.styl';

export class App extends React.Component {
  static propTypes = {
    files: React.PropTypes.object
  }

  render() {
    return (
      <div className="app">
        <h1>Refractor</h1>

        <div className={css.sideBySide}>
          <div className={css.sideA}>
            <h2>A</h2>
            <img src={this.props.files.original} />
            <button>Better</button>
          </div>
          <div className={css.sideB}>
            <h2>B</h2>
            <img src={this.props.files.original} />
            <button>Better</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(App);
