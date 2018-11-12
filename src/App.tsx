import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';

import logo from './logo.svg';

class App extends React.Component<any, any> {

  private TimeID: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  public componentDidMount() {
    this.TimeID = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  public componentWillUnmount() {
    clearInterval(this.TimeID);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </header>
        <NavBar text="React & Material-UI" />
      </div>
    );
  }
}

export default App;
