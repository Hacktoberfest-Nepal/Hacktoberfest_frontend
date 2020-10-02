import React from 'react';

export class AddTask extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: props.userValue,
    };
    this.textInput = React.createRef();
  }
  // onChangeHandler for the Input Field.
  getUserInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  verifyEntry() {
    if (this.state.inputValue !== '') {
      if (this.props.updateTask(this.state.inputValue, this.textInput)) {
        this.setState({
          inputValue: '',
        });
      }
    } else {
      alert('Task cannot be empty.');
    }
  }

  render() {
    return (
      <div className='addTask'>
        <input
          ref={this.textInput}
          type='text'
          placeholder='Add new task.'
          onChange={(event) => this.getUserInput(event)}
        />
        <button onClick={() => this.verifyEntry()} title='Click to Add.'>
          +
        </button>
      </div>
    );
  }
}
