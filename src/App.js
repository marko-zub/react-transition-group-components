import React, { Component } from 'react';
import './App.css';
import RTGCheight from './components/RTGCheight';
import RTGCfade from './components/RTGCfade';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggle}>Click</button>
        <RTGCheight show={isOpen} duration={500}>
          <div className="block">
            Block
            </div>
        </RTGCheight>

        <RTGCfade show={isOpen} duration={500}>
          <div className="block">
            fade
            </div>
        </RTGCfade>
      </div>
    );
  }
}

export default App;
