import React from 'react';
import './App.css';

class ImpersonatorCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user1: '', user2: '', message: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Discord Impersonator Check</h3>
        <form onSubmit={this.handleSubmit}>
          <label>User1</label>
          <input type="text" name='user1' value={this.state.user1.value} onChange={this.handleChange} />
          
          <label>User2</label>
          <input type="text" name='user2' value={this.state.user2.value} onChange={this.handleChange} />            
        </form>
        {this.state.message}
      </div>
    );
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value }, () => this.handleSubmit(e));
  }

  handleSubmit(e) {
    var message = "";
    if (this.state.user1 === this.state.user2) {
      message = "Same person";
    } else if (this.state.user1.length !== this.state.user2.length) {
      message = "Different lengths";
    } else {
      message = "NOT THE SAME PERSON";
    }
    this.setState({message: message})
  }
}

export default ImpersonatorCheck;
