import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/todoAction";

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        {this.props.todoList.map((todo, index) => (
          <div key={index}>{todo.description}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

export default connect(
  mapStateToProps,
  { fetchData }
)(List);
