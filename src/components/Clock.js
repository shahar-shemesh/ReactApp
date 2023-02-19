import React, {Component} from 'react'

export class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.now(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    now() {
      this.setState({ date: new Date() });
    }
  
    render() {
      return (
        <div>
          <h3>{this.state.date.toLocaleTimeString()}</h3>
        </div>
      );
    }
  }
