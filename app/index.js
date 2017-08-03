import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div style={divStyle}>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

const divStyle = {
  color: 'green'
};

ReactDOM.render(<App />, document.getElementById('app'));