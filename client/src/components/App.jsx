/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="helloWorld">
        <h1>
          `Hello World! It's me, the Recommended Channels Module`
        </h1>
      </div>
    );
  }
}
