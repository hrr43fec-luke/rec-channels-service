import React from 'react';
import ReactDOM from 'react-dom';

class app extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="helloWorld">
        <h1>
          Hello World!
          It's me, the Recommended Channels Module
        </h1>
      </div>
    )
  }
}


ReactDOM.render(<app />, document.getElementById('app'))

export default app