import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="helloWorld">
        <h1>
          Hello World! It's me, the Recommended Channels Module
        </h1>
      </div>
    )

  }
}


ReactDOM.render(<App />, document.getElementById('app'));