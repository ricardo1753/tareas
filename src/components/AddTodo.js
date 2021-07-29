import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Añade Tarea..."
          className="input-text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Añade" className="input-submit" />
      </form>
    );
  }
}

export default AddTodo;
